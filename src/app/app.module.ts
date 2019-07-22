import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { LoanInfoStorageService } from './global/services/loan-info-storage.service';

@NgModule({
  imports: [ 
    AppRoutingModule,
    BrowserModule, 
    HttpModule,
    LayoutModule,
    
  ],
    
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [],
  providers: [LoanInfoStorageService]
})
export class AppModule { }
