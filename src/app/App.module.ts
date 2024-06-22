import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IhmV1Component } from './IHM-V1/ihm-v1.component';
import { AppModuleIhmV1 } from './IHM-V1/App.module-ihm-v1';
import { AppRoutingModule } from './app.routes';
import { AppRoutingIhmV1Module } from './IHM-V1/App-routing-ihm.module'; // Assurez-vous d'importer correctement AppRoutingIhmV1Module
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    FormsModule,
    CommonModule,
    RouterModule,
    AppRoutingIhmV1Module,
    AppModuleIhmV1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
