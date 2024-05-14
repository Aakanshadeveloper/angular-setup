import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() { }
  public emitActiveHeader: any = '';
  private activeComponent = new BehaviorSubject(this.emitActiveHeader);
  currentActiveComponent = this.activeComponent.asObservable();


  setActiveComponent(component: any) {
    this.activeComponent.next(component);
  }



  // public emitActiveHeader: any = '';
  // private activeHeaderSource = new BehaviorSubject(this.emitActiveHeader);
  // currentTab = this.activeHeaderSource.asObservable();

  // /**
  //  * Emit user side state.
  //  * @param message
  //  */
  // changeTab(message: any) {
  //   this.activeHeaderSource.next(message);
  // }

}
