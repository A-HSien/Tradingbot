import { authenticate, TokenService } from '@loopback/authentication';
import {
  MyUserService,
  TokenServiceBindings,
  TokenServiceConstants,
  UserRepository,
  UserServiceBindings,
} from '../auth';
import { inject } from '@loopback/core';
import { repository } from '@loopback/repository';
import {
  get, post, param,
  RestBindings, Response
} from '@loopback/rest';
import { SecurityBindings, UserProfile } from '@loopback/security';
import { genSalt, hash } from 'bcryptjs';
import _ from 'lodash';
import { GOOGLE_REDIRECT_URL } from '../config';
import { AppUser } from '../domains/AppUser';
import { getGoogleAuthURL, getUser, GoogleUser } from '../common/GoogleAuth';
import { logger } from '../common/Logger';



export class AuthController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE) private jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE) private userService: MyUserService,
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
    logger.debug('app user login:', appUser);
    if (!appUser) {
      const password = await hash(googleUser.id, await genSalt());
      const newUser = {
        ..._.omit(googleUser, 'id'),
        activated: false,
        submitted: false,
      }
      appUser = await this.userRepository.create(newUser);
      logger.debug('add new user:', appUser);
      await this.userRepository.userCredentials(appUser.id).create({ password });
    }

    await this.setAuthToken(googleUser, response);

    if (!appUser.submitted) response.redirect('/#/Register/');
    else response.redirect('/#/Accounts/');
  };


  @authenticate('jwt')
  @post('auth/register')
  async register(
    @inject(SecurityBindings.USER) currentUser: UserProfile,

  ) {
    const user = await this.userRepository.findById(currentUser.id) as AppUser;
    if (!user) throw new Error('user not found');

    user.submitted = true;
    await this.userRepository.update(user);
    logger.debug('user registered:', user);
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
        maxAge: TokenServiceConstants.TOKEN_EXPIRES_IN_VALUE
      }
    );
  };

  private async getAuthToken(
    user: AppUser,

  ) {
    const userProfile = this.userService.convertToUserProfile(user);
    const token = await this.jwtService.generateToken(userProfile);
    logger.debug('gen token:', token);
    return token;
  };


}
