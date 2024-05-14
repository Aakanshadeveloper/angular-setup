import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DashboardService } from '../service/dashboard.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  listData: any = [];
  pageType:any
  constructor(public router: Router,public route: ActivatedRoute,public dataService: DashboardService) {
  }
  model: any = {};
  ngOnInit() {
      this.dataService.setActiveComponent({
        activePage: 'userRegistor',
        pageRoute: 'abc',
        pageName: 'Detail',
        detail: false,
      });
  
    this.pageType = this.route.snapshot.queryParamMap.get('type')
    let editData:any = (this.route.snapshot.queryParamMap.get('data'))
    if(editData){
      this.model = JSON.parse(editData)
    }

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
