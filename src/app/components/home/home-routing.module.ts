import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
{path: '', component:HomePageComponent},
{path: 'userRegistor', component:RegisterFormComponent},
{path: 'listInfo', component:ListComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
