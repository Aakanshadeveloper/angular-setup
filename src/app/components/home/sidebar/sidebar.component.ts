import { Component,EventEmitter, Output } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentActive: any;
  activeHeader: any;
  @Output('selectionManu') eventEmitter: EventEmitter<any> =
    new EventEmitter<any>();
  constructor(private service: DashboardService) {
    this.service.currentActiveComponent.subscribe((data) => {
      this.activeHeader = data?.activePage;
    });
  }

  setActiveComponent(component: string) {
    console.log(component, 'component');
    this.service.setActiveComponent(component);
  }
  logout() {
    localStorage.removeItem('userData');
  }
  /**
   * This function is for send Status on home module
   * @param data
   */
  sendData(data: any) {
    this.eventEmitter.emit({ data: data });
  }
}
