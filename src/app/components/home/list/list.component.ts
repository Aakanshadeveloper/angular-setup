import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
listData:any=[]
constructor(public router: Router,public dataService: DashboardService){}
ngOnInit() {
 this.dataService.setActiveComponent({
    activePage: 'list',
    pageRoute: 'abc',
    pageName: 'Detail',
    detail: false,
  });
let data:any=localStorage.getItem('listData');
this.listData=JSON.parse(data)
console.log(this.listData,'listData');
}
deleteRecord(data:any,index:any){
  this.listData.splice(index, 1);
}
redirectToEdit(data:any){
this.router.navigate(['/dashoard/userRegistor'],{ queryParams: {type:'edit',data: JSON.stringify(data)}})
}
}

