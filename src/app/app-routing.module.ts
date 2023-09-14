import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UserHomeComponent } from './pages/userHome/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren:()=> import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent, 
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    component: RegisterComponent, 
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'user',
    component:UserHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
