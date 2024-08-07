import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppModuleIhmV1 } from './IHM-V1/App.module-ihm-v1';
import { AppRoutingModule } from './app.routes';
import { AppRoutingIhmV1Module } from './IHM-V1/App-routing-ihm.module'; // Assurez-vous d'importer correctement AppRoutingIhmV1Module
import { RouterModule } from '@angular/router';
import { PageRegisterComponent } from './IHM-V1/pages/page-register/page-register.component';
import { PagesLoginComponentComponent } from './IHM-V1/pages/pages-login-component/pages-login-component.component';
import { PagesVerifyOtpComponentComponent } from './IHM-V1/pages/pages-verify-otp-component/pages-verify-otp-component.component';
import { AuthInterceptor} from './IHM-V1/auth-interceptor';
import { GasRetailerService } from './IHM-V1/services/gas-retailer.service';
import { SearchService } from './IHM-V1/services/searchService';
import { CardService } from './IHM-V1/composants/inter-entre-client/card/card-service';

@NgModule({
  declarations: [
    AppComponent,
    PagesLoginComponentComponent,
    PageRegisterComponent,
    PagesVerifyOtpComponentComponent,

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
  schemas :[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    GasRetailerService, SearchService ,CardService,FormsModule,
  ],

  bootstrap: [AppComponent],

})
export class AppModule {}
