import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LoanComponent } from './loan/loan.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { LoanInfoStorageService } from '../global/services/loan-info-storage.service';
import { SalaryComponent } from './salary/salary.component';
import { WorkingTimeComponent } from './working-time/working-time.component';


@NgModule({
  imports: [
    CommonModule,
     BrowserModule,
     FormsModule,
     ReactiveFormsModule
  ],
  declarations: [HomeComponent, LoanComponent, UserInfoComponent, SalaryComponent, WorkingTimeComponent, ],
  exports: [HomeComponent, LoanComponent, UserInfoComponent, SalaryComponent, WorkingTimeComponent],
  providers: [LoanInfoStorageService]
})
export class PagesModule { }