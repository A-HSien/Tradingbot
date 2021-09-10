import { authenticate } from '@loopback/authentication';
import { TOKEN_EXPIRES_IN_VALUE } from '../auth';
import { inject } from '@loopback/core';
import {
  get, post, param,
  RestBindings, Response, HttpErrors
} from '@loopback/rest';
import { SecurityBindings, UserProfile } from '@loopback/security';
import { genSalt, hash } from 'bcryptjs';
import _ from 'lodash';
import { GOOGLE_REDIRECT_URL } from '../config';
import { AppUser } from '../domains/AppUser';
import { getGoogleAuthURL, getUser, GoogleUser } from '../common/GoogleAuth';
import AppUserRepo from '../repositories/AppUserRepo';
import { signToken, TokenType } from '../domains/Token';
import { convertToUserProfile, verifyCredentials } from '../auth/AuthService';



export class AuthController {


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
    console.log(`app user login - ${appUser?.email}`, appUser);
    if (!appUser) {
      const password = await hash(googleUser.id, await genSalt());
      const newUser: AppUser = {
        ..._.omit(googleUser, 'id'),
        passwordHash: password,
        activated: false,
        submitted: false,
      }
      appUser = await AppUserRepo.create(newUser);
      console.log(`add new user - ${appUser?.email}`, appUser);
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
    console.log(`user registered - ${user.email}`, user);
    return true;
  };


  private async setAuthToken(
    googleUser: GoogleUser,
    response: Response

  ) {
    const user = await verifyCredentials({
      email: googleUser.email,
      password: googleUser.id
    });
    const maxAge = TOKEN_EXPIRES_IN_VALUE * 1000;
    response.cookie('auth-token', await this.getAuthToken(user), { maxAge });
    response.cookie('userId', user.id, { maxAge });
    response.cookie('email', user.email, { maxAge });
  };


  private async getAuthToken(
    user: AppUser,

  ) {
    const userProfile = convertToUserProfile(user);
    if (!userProfile) {
      throw new HttpErrors.Unauthorized(
        'Error generating token : userProfile is null',
      );
    }
    const userInfoForToken = {
      id: userProfile.id,
      email: userProfile.email || '',
    };
    return await signToken(userInfoForToken, TokenType.login, TOKEN_EXPIRES_IN_VALUE)
      .catch(error => {
        throw new HttpErrors.Unauthorized(`Error encoding token : ${error}`);
      });
  };


}

