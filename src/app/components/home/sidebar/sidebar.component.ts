import { Component } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentActive: any;
  constructor(private service: DashboardService) {
    this.service.currentActiveComponent.subscribe(
      (component) => (this.currentActive = component)
    );
  }

  setActiveComponent(component: string) {
    console.log(component, 'component');
    this.service.setActiveComponent(component);
  }
  logout() {
localStorage.removeItem('userData')
localStorage.removeItem('listData')

  }
}
