import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/authGuard';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./components/auth/auth.module').then(module=>module.AuthModule)
},
{
path:'dashoard',
loadChildren:()=>import('./components/home/home.module').then(module=>module.HomeModule),
canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
