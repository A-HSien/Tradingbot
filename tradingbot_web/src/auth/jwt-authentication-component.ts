// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/authentication-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { registerAuthenticationStrategy } from '@loopback/authentication';
import {
  Application,
  Binding,
  Component,
  CoreBindings,
  createBindingFromClass,
  inject,
} from '@loopback/core';
import {
  TokenServiceBindings,
  AuthServiceBindings,
} from './keys';
import { JWTAuthenticationStrategy } from './services/jwt.auth.strategy';
import { JWTService } from './services/jwt.service';
import { SecuritySpecEnhancer } from './services/security.spec.enhancer';
import { AuthService } from './services/AuthService';


export const TOKEN_SECRET_VALUE = 'tradingbot_s3cr3t';
export const TOKEN_EXPIRES_IN_VALUE = (60 * 60 * 1000);



export class JWTAuthenticationComponent implements Component {
  bindings: Binding[] = [
    // token bindings
    Binding.bind(TokenServiceBindings.TOKEN_SECRET).to(
      TOKEN_SECRET_VALUE,
    ),
    Binding.bind(TokenServiceBindings.TOKEN_EXPIRES_IN).to(
      TOKEN_EXPIRES_IN_VALUE.toString(),
    ),
    Binding.bind(TokenServiceBindings.TOKEN_SERVICE).toClass(JWTService),

    // user bindings
    Binding.bind(AuthServiceBindings.AUTH_SERVICE).toClass(AuthService),
    createBindingFromClass(SecuritySpecEnhancer),



  ];
  constructor(@inject(CoreBindings.APPLICATION_INSTANCE) app: Application) {
    registerAuthenticationStrategy(app, JWTAuthenticationStrategy);
  }
}
