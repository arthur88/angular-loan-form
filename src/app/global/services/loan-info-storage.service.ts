import { Injectable } from '@angular/core';
import {Subject}  from 'rxjs/Subject';

@Injectable()
export class LoanInfoStorageService {

  loanAmount: number;
  loanTerm: number;
  userName: string;
  salary: number;
  workedTime: number;

  constructor() { }

  loanAmountChange(data: number) {
    this.loanAmount = data;
  }

  loanTermChange(data: number) {
    this.loanTerm = data;
    console.log(this.loanTerm);
  }

  userNameChange(data: string) {
    this.userName = data;
  }

  SalaryChange(data: number) {
    this.salary = data;
  };

  WorkedTimeChange(data: number) {
    this.workedTime = data;
  }   

  getSalary() {
    return this.salary;
  }

  getLoanAmount() {
    return this.loanAmount;
  }

}