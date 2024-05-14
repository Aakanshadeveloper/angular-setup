import { Component } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
constructor(
  private service: DashboardService
){
this.service.currentActiveComponent.subscribe(component => this.pageType = component);
console.log(this.pageType,'==============')

}
activeHeader:any
  name:any
  pageType:any;

  ngAfterViewInit() {
    this.service.currentActiveComponent.subscribe((data: any) => {
      console.log(data,'data')
    //   if (data?.activePage != 'undefined') {
    //     setTimeout(() => {
    //       this.activeHeader = data?.activePage;
    //     }, 100);
    //   }
    });

  }
}
