import { HttpErrors } from '@loopback/rest';
import { securityId, UserProfile } from '@loopback/security';
import { compare } from 'bcryptjs';
import AppUserRepo from '../../repositories/AppUserRepo';
import { IUser } from '../models/IUser';


export class AuthService {
  async verifyCredentials(user: { email: string, password: string }): Promise<IUser> {
    const invalidCredentialsError = 'Invalid email or password.';

    const foundUser = await AppUserRepo.findOne({ email: user.email });
    if (!foundUser)
      throw new HttpErrors.Unauthorized(invalidCredentialsError);


    const passwordMatched = await compare(
      user.password,
      foundUser.passwordHash,
    );

    if (!passwordMatched)
      throw new HttpErrors.Unauthorized(invalidCredentialsError);


    return foundUser;
  }

  convertToUserProfile(user: IUser): UserProfile {
    const userNotfound = 'invalid User';
    if (!user.id)
      throw new HttpErrors.Unauthorized(userNotfound);

    return {
      [securityId]: user.id.toString(),
      name: user.username,
      id: user.id,
      email: user.email,
    };
  }

}
