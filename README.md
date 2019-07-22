# Loan form made on Angular, by using Typescript.

[Working solution on StackBlitz ⚡️](https://stackblitz.com/edit/angular-9fdatz)




### Structure:
* global - globally used 
  * progress-bar
  * services - data managment between forms

* layout
  * footer
  * header    

* pages
  * homes
  * loan
  * salary
  * summary
  * user-info
  * working-time




### Application capabilities / implementation
1. Form contains intro window from where able to start step-by-step filling loan
2. 4 Steps consist of questions. In firt step if user select more then 5000 eur. then dissapear capability to select 6 month from loan term dropdown, if enter lower then 5000 eur. then 6 months appear againis. All dropdown  dispalyed from `_tmpTerm` JSON object,
3. Every question is mandatory, implemented following validtors:
  * ``
  * `Validators.required`
  * `Validators.min`
  * `Validators.max`
  * `Validators.pattern`  `"^[a-zA-Z ]+$"`
4. Able to comeback or start again from each step
5. Working time question depends on previos one with following conditional syntax:  if entered user salary is lower then 500 eur. and current amount of loan borrowing is bigger then 10000 eur. then user not able to conditional.
6. Each field has error messages
7. Summary contains answers into all questions
8. Application design is responsive
9. All forms data is saved into service called  `loan-info-storage.service`
10. Implemented progress bar to show completion status in percentage values
11. Footer year uses datePipe.
