import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { LoanComponent } from './pages/loan/loan.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { WorkingTimeComponent } from './pages/working-time/working-time.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { 
    path: 'home', 
    component: HomeComponent,
  }, {
    path: 'loan',
    component: LoanComponent,
  }, {
    path: 'userinfo',
    component: UserInfoComponent,
  }, {
    path: 'salary',
    component: SalaryComponent,
  } , {
    path: 'working-time',
    component: WorkingTimeComponent,
  }

  
];

@NgModule({
  declarations: [HomeComponent, LoanComponent, UserInfoComponent, SalaryComponent, WorkingTimeComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}