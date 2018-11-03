import { FormControl, FormGroup } from "@angular/forms";
// 自定义手机号校验器
export function mobileValidator(control: FormControl): any {
  let myReg = /^[1][3,4,5,7,8][0-9]{9}$/;
  let valid = myReg.test(control.value);
  console.log("手机号的校验结果是" + valid)
  return valid ? null : { mobile: { description: "请输入有效的手机号" } }
}
// 自定义校验器，校验密码和密码确认的输入是否一致
export function equalValidator(group: FormGroup): any {
  let password: FormControl = group.get("password") as FormControl;
  let pconfirm: FormControl = group.get("pconfirm") as FormControl;
  let valid: boolean = (password.value === pconfirm.value);
  console.log("两次密码一致性校验结果" + valid)
  return valid ? null : { equal: { description: "两次输入密码不一致" } }
}