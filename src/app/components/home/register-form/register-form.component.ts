import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  listData:any=[]
  constructor(
public router:Router,
  ) {}
  model: any = {};
  onSubmit(form: any) {
    console.log(form.valid, 'form.valid');
    if (form.valid) {
 this.listData.push(this.model)
      localStorage.setItem('listData',JSON.stringify( this.listData));
    } else {
    }
  }
}
