import { authenticate, TokenService } from '@loopback/authentication';
import {
  TokenServiceBindings,
  TokenServiceConstants,
  AuthServiceBindings,
} from '../auth';
import { inject } from '@loopback/core';
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
import { AuthService } from '../auth/services/AuthService';
import AppUserRepo from '../repositories/AppUserRepo';



export class AuthController {
  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE) private jwtService: TokenService,
    @inject(AuthServiceBindings.AUTH_SERVICE) private authService: AuthService,
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
    let appUser = await AppUserRepo.findOne({
      email: googleUser.email
    });
    console.log('app user login:', appUser);
    if (!appUser) {
      const password = await hash(googleUser.id, await genSalt());
      const newUser: AppUser = {
        ..._.omit(googleUser, 'id'),
        passwordHash: password,
        activated: false,
        submitted: false,
      }
      appUser = await AppUserRepo.create(newUser);
      console.log('add new user:', appUser);
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
    const user = await AppUserRepo.findById(currentUser.id);
    if (!user) throw new Error('user not found');

    user.submitted = true;
    await AppUserRepo.updateOne({ _id: user.id }, user);
    console.log('user registered:', user);
    return true;
  };


  private async setAuthToken(
    googleUser: GoogleUser,
    response: Response

  ) {
    const user = await this.authService.verifyCredentials({
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
    const userProfile = this.authService.convertToUserProfile(user);
    return this.jwtService.generateToken(userProfile);
  };


}
