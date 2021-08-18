import { registerAuthenticationStrategy } from '@loopback/authentication';
import {
  Application,
  Binding,
  Component,
  CoreBindings,
  createBindingFromClass,
  inject,
} from '@loopback/core';
import { JWTAuthenticationStrategy } from './jwt.auth.strategy';
import { SecuritySpecEnhancer } from './security.spec.enhancer';


/** unit: secs */
export const TOKEN_EXPIRES_IN_VALUE = (60 * 60 * 24 * 7);  // 7 days



export class JWTAuthenticationComponent implements Component {
  bindings: Binding[] = [
    createBindingFromClass(SecuritySpecEnhancer),
  ];
  constructor(@inject(CoreBindings.APPLICATION_INSTANCE) app: Application) {
    registerAuthenticationStrategy(app, JWTAuthenticationStrategy);
  }
}
