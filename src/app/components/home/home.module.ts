import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SidebarComponent,
    RegisterFormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
