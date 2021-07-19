import { TokenServiceBindings } from "../auth";
import { inject } from "@loopback/core";
import { HttpErrors, get, post, requestBody } from "@loopback/rest";
import { JWTService } from "../auth";
import SignalRepo from "../repositories/SignalRepo";
import _ from "lodash";
import { authenticate } from "@loopback/authentication";
import { SecurityBindings, securityId, UserProfile } from '@loopback/security';



export class SignalController {

  constructor(
    @inject(TokenServiceBindings.TOKEN_SERVICE) private tokenSvc: JWTService,
  ) { };


  @authenticate('jwt')
  @get('signal/history')
  async history(
    @inject(SecurityBindings.USER) currentUser: UserProfile,

  ) {
    const data = await SignalRepo.where({ userId: currentUser.id });
    return data;
  };

  @authenticate('jwt')
  @get('signal/getToken')
  async getToken(
    @inject(SecurityBindings.USER) currentUser: UserProfile,

  ) {
    return this.tokenSvc.generateTokenForSignal(currentUser.id);
  };

  @post('signal/trading')
  async trading(
    @requestBody() data: {
      token: string
    },

  ) {
    console.log('signal/trading payload:', data);
    const tokenData = await this.tokenSvc.decodedToken(data.token);
    console.log('signal/trading tokenData:', tokenData);
    ['userId'].forEach(field => {
      if (!tokenData[field])
        throw new HttpErrors.Unauthorized(
          `Error verifying token : ${field} is required`
        );
    });

    const signal = {
      ...data,
      userId: tokenData.userId,
      time: new Date(),
    };

    await SignalRepo.create(signal);
    return true;
  };
};