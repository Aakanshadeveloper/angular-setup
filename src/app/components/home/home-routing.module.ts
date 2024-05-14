import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../auth/authGuard';

const routes: Routes = [
{path: '', component:HomePageComponent,
children:[
  {path: '', component:RegisterFormComponent},
  {path: 'userRegistor', component:RegisterFormComponent, },
  {path: 'listInfo', component:ListComponent,canActivate:[AuthGuard]},

]

}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
