import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
listData:any=[]
ngOnInit() {
let data=localStorage.getItem('listData');
this.listData=data
console.log(this.listData,'listData');
}
}
