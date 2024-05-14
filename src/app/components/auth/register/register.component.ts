import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private toastr: ToastrService, public router: Router) {}
  model: any = {};
  onSubmit(form: any) {
    console.log(form.valid, 'form.valid');
    if (form.valid) {
      localStorage.setItem('userData', JSON.stringify(this.model));
      this.toastr.success('Successfully Register');
      this.router.navigate(['']);
    } else {
      this.toastr.success('Please Fill The Form');
    }
  }
}
