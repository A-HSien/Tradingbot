import { HttpErrors } from '@loopback/rest';
import { securityId, UserProfile } from '@loopback/security';
import { compare } from 'bcryptjs';
import { TokenType, verifyToken } from '../domains/Token';
import AppUserRepo from '../repositories/AppUserRepo';
import { IUser } from './IUser';


export const verifyCredentials = async (
  user: { email: string, password: string }
): Promise<IUser> => {

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
};

export const convertToUserProfile = (user: IUser): UserProfile => {
  const userNotfound = 'invalid User';
  if (!user.id)
    throw new HttpErrors.Unauthorized(userNotfound);

  return {
    [securityId]: user.id.toString(),
    id: user.id,
    email: user.email,
  };
};

export const getUserProfile = async (token: string): Promise<UserProfile> => {
  const decodedToken = await verifyToken(token, TokenType.login);
  const userProfile: UserProfile = {
    [securityId]: decodedToken.id,
    id: decodedToken.id,
    email: decodedToken.email,
  };
  return userProfile;
}