import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private activeComponent = new BehaviorSubject<string>('userRegistor');
  currentActiveComponent = this.activeComponent.asObservable();

  constructor() { }

  setActiveComponent(component: string) {
    this.activeComponent.next(component);
  }
}
