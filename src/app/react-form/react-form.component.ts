import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {

  username: FormControl = new FormControl();

  formModel:FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl("a@a.com"),
      new FormControl("b@b.com"),
    ])
  });

 


  constructor() { }

  ngOnInit() {
  }

  onsubmit(){
    console.log(this.formModel.value)
  }

  addEmial(){
    // 下面两行输出在控制台看不出区别，都是对象类型
    console.log(typeof(this.formModel.get("emails")), this.formModel.get("emails"));
    console.log(typeof(this.formModel.get("emails") as FormArray), this.formModel.get("emails") as FormArray);
    let emails = this.formModel.get("emails") as FormArray;
    // let emails = this.formModel.get("emails");这种方式获取的对象无法使用push方法
    emails.push(new FormControl());
  }

}
