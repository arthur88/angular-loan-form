import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoanInfoStorageService } from '../../global/services/loan-info-storage.service';

@Component({
  selector: 'app-working-time',
  templateUrl: './working-time.component.html',
  styleUrls: ['./working-time.component.css']
})
export class WorkingTimeComponent implements OnInit {

workingForm: FormGroup;
  submitted: boolean = false;
  _tmpProgress: number = 75;
   private _tmpWTime = 3;
   private currentSalary: Number;
   private currentAmount: Number;
   private currentSalaryMin: Number = 500;
   private currentAmountMin: Number = 10000;;

  get progress() { return this._tmpProgress; }
  get fields() { return this.workingForm.controls };

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private LoanInfoStorageService : LoanInfoStorageService
  ) { }

   createForm() {
    this.workingForm = this.fb.group({
      wTime: ['', [Validators.required, Validators.min(this._tmpWTime)]]
    });
  }

  onSubmit() {
   this.submitted = true;
    if (this.workingForm.invalid) {
            return;
    }

   this.LoanInfoStorageService.WorkedTimeChange(this.workingForm.value['wTime']);
   this.router.navigate(['/working-time']);
  }

  ngOnInit() {

   this.currentSalary = this.LoanInfoStorageService.getSalary();
   this.currentAmount = this.LoanInfoStorageService.getLoanAmount();

   if(this.currentSalary <= this.currentSalaryMin && this.currentAmount >= this.currentAmountMin) {
     console.log('cool');
   }
   else {
      this.createForm();
   }
  
  } 

}