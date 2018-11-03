import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '../../../node_modules/@angular/forms';
import { equalValidator } from "../validator/validators";

@Directive({
  selector: '[appEqualValidator]',
  providers: [{provide: NG_VALIDATORS, useValue:equalValidator, multi: true}],
  // mutil：true表示一个token下可以挂多个值，因为另一个校验的指令也需要使用provide: NG_VALIDATORS,
})
export class EqualValidatorDirective {

  constructor() { }

}
