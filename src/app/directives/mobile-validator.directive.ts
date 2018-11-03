import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '../../../node_modules/@angular/forms';
import { mobileValidator } from "../validator/validators";

@Directive({
  selector: '[appMobileValidator]',
  providers: [{provide: NG_VALIDATORS, useValue:mobileValidator, multi: true}]
  // mutil：true表示一个token下可以挂多个值，因为另一个校验的指令也需要使用provide: NG_VALIDATORS,
})
export class MobileValidatorDirective {

  constructor() { }

}
