import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
constructor(
public router:Router,
private toastr: ToastrService
){

}
model:any={}
onSubmit(form:any){
if(form.valid){
let userData:any = localStorage.getItem('userData');
console.log( userData,'userData',this.model)
userData ?(this.router.navigate(['/dashoard']),this.toastr.success('Successfully Login'))
:this.toastr.error('User Not Found');
}else{
  this.toastr.error('User Not Found');}
}
redirect(){
this.router.navigate(['/register'])
}
}
