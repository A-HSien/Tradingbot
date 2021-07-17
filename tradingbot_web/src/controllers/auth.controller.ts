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
  RestBindings, Response
} from '@loopback/rest';
import { SecurityBindings, securityId, UserProfile } from '@loopback/security';
import { genSalt, hash } from 'bcryptjs';
import _ from 'lodash';
import { GOOGLE_REDIRECT_URL } from '../config';
import { getGoogleAuthURL, getUser, GoogleUser } from '../utilities/google.auth';

const MaxAge = 600000 // 100 mins

type AppUser = User & {
  activated?: boolean,
  submitted?: boolean,
};

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
    let appUser = await this.userRepository.findOne({
      where: { email: googleUser.email }
    }) as AppUser;
    console.log('app user login:', appUser);
    if (!appUser) {
      const password = await hash(googleUser.id, await genSalt());
      const newUser = {
        ..._.omit(googleUser, 'id'),
        activated: false,
        submitted: false,
      }
      appUser = await this.userRepository.create(newUser);
      console.log('add new user:', appUser);
      await this.userRepository.userCredentials(appUser.id).create({ password });
    }

    await this.setAuthToken(googleUser, response);

    if (!appUser.submitted) response.redirect('/#/Register/');
    else response.redirect('/#/Accounts/');
  };


  @authenticate('jwt')
  @post('auth/register')
  async register(
    @inject(SecurityBindings.USER) currentUserProfile: UserProfile,
    @inject(RestBindings.Http.RESPONSE) response: Response,

  ) {
    console.log('register uesr id:',currentUserProfile[securityId]);

    const user = await this.userRepository.findOne({
      where: { email: currentUserProfile.email }
    }) as AppUser;
    if (!user) response.redirect('/#/Login/');

    user.submitted = true;
    await this.userRepository.update(user);
    console.log('user registered:', user);
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
    response.cookie(
      'auth-token',
      await this.getAuthToken(user),
      {
        maxAge: MaxAge
      }
    );
  };

  private async getAuthToken(
    user: AppUser,

  ) {
    const userProfile = this.userService.convertToUserProfile(user);
    const token = await this.jwtService.generateToken(userProfile);
    console.log('gen token:', token);
    return token;
  };


}
