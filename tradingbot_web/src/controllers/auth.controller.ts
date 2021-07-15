import { authenticate, TokenService } from '@loopback/authentication';
import {
  MyUserService,
  TokenServiceBindings,
  User,
  UserRepository,
  UserServiceBindings,
} from '@loopback/authentication-jwt';
import { inject } from '@loopback/core';
import { repository } from '@loopback/repository';
import {
  get, post, param,
  RestBindings, Request, Response, requestBody
} from '@loopback/rest';
import { SecurityBindings, securityId, UserProfile } from '@loopback/security';
import { genSalt, hash } from 'bcryptjs';
import _ from 'lodash';
import { GOOGLE_REDIRECT_URL } from '../config';
import { getGoogleAuthURL, getTokens, getUser, GoogleUser } from '../utilities/google.auth';

const MaxAge = 60000 // 10 mins


export class AuthController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE) private jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE) private userService: MyUserService,
    @inject(SecurityBindings.USER, { optional: true }) private user: UserProfile,
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { };


  @get('auth/url')
  getAuthUrl() {
    return getGoogleAuthURL();
  };


  @get(GOOGLE_REDIRECT_URL)
  async authCallBack(
    @param.query.string('code') code: string,
    @inject(RestBindings.Http.RESPONSE) response: Response,

  ) {

    const googleUser = await getUser(code);

    const appUser = await this.findAppUser(googleUser);
    console.log('appUser', appUser);


    if (!appUser) {
      const password = await hash(googleUser.id, await genSalt());
      const newUser = {
        ..._.omit(googleUser, 'id'),
        activated: false,
        submitted: false,
      }
      console.log('create new user', newUser);
      const savedUser = await this.userRepository.create(newUser);
      console.log('saved user', savedUser);
      await this.userRepository.userCredentials(savedUser.id).create({ password });
      await this.setAuthToken(googleUser, response);
      response.redirect('/#/Register/');

    } else {

      await this.setAuthToken(googleUser, response);
      response.redirect('/#/Account/');
    }



  };


  @authenticate('jwt')
  @post('auth/register')
  async register(
    @inject(RestBindings.Http.RESPONSE) response: Response,

  ) {
    return true;
  };


  private async setAuthToken(
    googleUser: GoogleUser,
    response: Response

  ) {
    const user = await this.userService.verifyCredentials({
      email: googleUser.email,
      password: googleUser.id
    });
    const userProfile = this.userService.convertToUserProfile(user);
    const token = await this.jwtService.generateToken(userProfile);
    response.cookie('auth-token', token, { maxAge: MaxAge });
  };



  private async findAppUser(
    googleUser: GoogleUser

  ) {
    const user = await this.userService.userRepository.findOne({
      where: { email: googleUser.email }
    });
    return user;
  };


  @authenticate('jwt')
  @get('/whoAmI')
  async whoAmI(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,

  ): Promise<string> {
    return currentUserProfile[securityId];
  };
}
