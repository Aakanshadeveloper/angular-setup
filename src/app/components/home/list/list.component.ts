import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
listData:any=[]
constructor(public router: Router){}
ngOnInit() {
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

