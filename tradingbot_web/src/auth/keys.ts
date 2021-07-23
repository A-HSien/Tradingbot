// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/authentication-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { TokenService } from '@loopback/authentication';
import { BindingKey } from '@loopback/core';
import { AuthService } from './services/AuthService';


export namespace TokenServiceConstants {
  export const TOKEN_SECRET_VALUE = 'tradingbot_s3cr3t';
  export const TOKEN_EXPIRES_IN_VALUE = (60 * 60 * 1000);
}

export namespace TokenServiceBindings {
  export const TOKEN_SECRET = BindingKey.create<string>(
    'authentication.jwt.secret',
  );
  export const TOKEN_EXPIRES_IN = BindingKey.create<string>(
    'authentication.jwt.expires.in.seconds',
  );
  export const TOKEN_SERVICE = BindingKey.create<TokenService>(
    'services.authentication.jwt.tokenservice',
  );
}

export namespace AuthServiceBindings {
  export const AUTH_SERVICE = BindingKey.create<AuthService>(
    'services.auth.service',
  );
}
