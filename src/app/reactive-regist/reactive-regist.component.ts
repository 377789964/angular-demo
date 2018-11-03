import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '../../../node_modules/@angular/forms';
import * as myGlobals from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  
  // 自定义手机号校验器
  // mobileValidator(control:FormControl): any {
  //   let myReg = /^[1][3,4,5,7,8][0-9]{9}$/;
  //   let valid = myReg.test(control.value);
  //   console.log("手机号的校验结果是"+valid)
  //   return valid ? null : {mobile: "请输入有效的手机号"}
  // }

  // 自定义校验器，校验密码和密码确认的输入是否一致
  // equalValidator(group: FormGroup) : any {
  //   let password:FormControl = group.get("password") as FormControl;
  //   let pconfirm:FormControl = group.get("pconfirm") as FormControl;
  //   let valid:boolean = (password.value === pconfirm.value);
  //   console.log("两次密码一致性校验结果"+valid)
  //   return valid ? null : {equal: "两次输入密码不一致"}
  // }

  formModel: FormGroup;

  // constructor() { 
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     mobile: new FormControl(),
  //     passwordGroup: new FormGroup({
  //       password: new FormControl(),
  //       pconfirm: new FormControl(),
  //     })
  //   })
  // }

  // 使用FormBilud简化响应式表单的写法
  constructor(fb: FormBuilder){
    // group()的参数二是一个对象，可以用来校验formGroup
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      // 使用angular中预定义好的Validators校验器校验username
      mobile: ['', myGlobals.mobileValidator],
      // 使用自定义校验器校验mobile
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: [''],
      }, {validator: myGlobals.equalValidator})
      // 使用自定义校验器校验passwordGroup
    })
  }

  ngOnInit() {
  }

  onSubmit(){ 
    let isValid:boolean = this.formModel.get("mobile").valid;
    // let isValid:boolean = this.formModel.get("passwordsGroup").get("password").valid;
    // 上面行的代码是获取formModel下的passwordGroup中的password字段的校验结果
    console.log(isValid);// 输出username的校验结果，是一个布尔值
    let err:any = this.formModel.get("mobile").errors;
    // let err:any = this.formModel.get("passwordsGroup").get("password").errors;
    // 上面行的代码是获取formModel下的passwordGroup中的password字段校验结果抛出的错误信息对象
    console.log(err);//如果校验结果是true则err是null，如果校验结果是false则err是包含校验信息的对象
    if(this.formModel.valid){
      //只有formModel表单里面所有的字段都是true的时候this.formModel.valid才会是true
      // 一般将表单校验成功后才会和后台尽心交互
      console.log(this.formModel.value);
    }
  }

}
