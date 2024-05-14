import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  listData: any = [];
  pageType:any
  constructor(public router: Router,public route: ActivatedRoute) {
  }
  model: any = {};
  ngOnInit() {
    this.pageType = this.route.snapshot.queryParamMap.get('type')
    let editData:any = (this.route.snapshot.queryParamMap.get('data'))
    if(editData){
      this.model = JSON.parse(editData)
    }
    // if(editData){
    //   this.model.userName = this.model?.userName
    //   this.model.email = this.model?.email
    //   this.model.phoneNumber = this.model?.phoneNumber
    //   this.model.city = this.model?.city
    //   console.log( this.model,' this.route.snapshot.queryParamMap.get')
    //   }
    }
  onSubmit(form: any) {
    console.log(form.valid, 'form.valid');
    if (form.valid) {
      this.listData.push(this.model);
      localStorage.setItem('listData', JSON.stringify(this.listData));
    } else {
    }
  }
}
