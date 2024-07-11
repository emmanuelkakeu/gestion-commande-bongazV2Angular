// Dans votre fichier AppModuleIhmV1 (app.module-ihm-v1.ts)

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingIhmV1Module } from './App-routing-ihm.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ReactiveFormsModule } from '@angular/forms';

import { IhmV1Component } from './ihm-v1.component';
import { MenuComponent } from './composants/menu/menu.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { HeaderComponent } from './composants/header/header.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { CompaniesService } from '../../app/gUsers-api/src/services/companies.service';
import { DeliveryPersonApiService } from '../../app/gUsers-api/src/services/delivery-person-api.service';
import { GasRetailerApiService } from '../../app/gUsers-api/src/services/gas-retailer-api.service';
import { IndividualClientApiService } from '../../app/gUsers-api/src/services/individual-client-api.service';
import { SupplierApiService } from '../../app/gUsers-api/src/services/supplier-api.service';
import { UsersApiService } from '../../app/gUsers-api/src/services/users-api.service';
import {PageRegisterComponent} from './pages/page-register/page-register.component'

import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component'; // Assurez-vous que c'est importé ici
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ApiModule } from '../gCmmd-api/src/api.module';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { InterEntreClientComponent } from './composants/inter-entre-client/inter-entre-client.component';
import { SupplierService } from './services/supplier.service';
import { ArticleFormComponent } from './pages/articles/article-form/article-form.component';
import { ArticleService } from './services/articles-service';
import { RouterModule } from '@angular/router';
import { DetailEntrepriseComponent } from './composants/inter-entre-client/detail-entreprise/detail-entreprise.component';
import { CardComponent } from './composants/inter-entre-client/card/card.component';
import { DetailArticlePage } from './pages/articles/page-article/detail-article-page/detail-article-page';
import { PageMvtstkComponent } from './pages/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { PagesCommdCompSupplComponent } from './pages/pages-commd-comp-suppl/pages-commd-comp-suppl.component';
import { PagesCompaniesComponent } from './pages/pages-companies/pages-companies.component';
import { PagesGasRetailerComponent } from './pages/pages-gas-retailer/pages-gas-retailer.component';
import { PagesIndividualClientComponent } from './pages/pages-individual-client/pages-individual-client.component';
import { PagesSupplierComponent } from './pages/pages-supplier/pages-supplier.component';
import { CmdcltfrsService } from './services/service-cls-supls';
import { DetailClsFrsComponent } from './composants/detail-cls-frs/detail-cls-frs.component';
import { NouveauSupplierCompaniesComponent } from './composants/nouveau-supplier-companies/nouveau-supplier-companies.component';
import { PagesLoginComponentComponent } from './pages/pages-login-component/pages-login-component.component';
import { UserService } from './services/users-service';
import { AuthInterceptor } from './auth-interceptor';
import { MapComponent } from './composants/map/map.component';

@NgModule({
  declarations: [
    IhmV1Component,
    DashboardComponent,
    MenuComponent,
    LoaderComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    BouttonActionComponent,
    PaginationComponent,
    InterEntreClientComponent,
    ArticleFormComponent,
    DetailEntrepriseComponent,
    CardComponent,
    DetailArticlePage,
    PageMvtstkComponent,
    DetailMvtStkComponent,
    PagesCommdCompSupplComponent,
    PagesCompaniesComponent,
    PagesGasRetailerComponent,
    PagesIndividualClientComponent,
    PagesSupplierComponent,
    DetailClsFrsComponent,
    NouveauSupplierCompaniesComponent,
    MapComponent

  ],
  imports:  [
    CommonModule,
    AccordionModule.forRoot(),
    AppRoutingIhmV1Module,
    
    ApiModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],

  exports: [
    IhmV1Component,
    HttpClientModule,
    DashboardComponent,
    MenuComponent,
    LoaderComponent,
    HeaderComponent,

    DetailArticleComponent,
    BouttonActionComponent, // Assurez-vous que c'est exporté si nécessaire
    PaginationComponent,
    InterEntreClientComponent,
    ArticleFormComponent,
    DetailEntrepriseComponent,
    CardComponent,
    DetailArticlePage,
    PageMvtstkComponent,
    DetailMvtStkComponent,
    PagesCommdCompSupplComponent,
    PagesCompaniesComponent,
    PagesGasRetailerComponent,
    PagesIndividualClientComponent,
    PagesSupplierComponent,
    DetailClsFrsComponent,
    NouveauSupplierCompaniesComponent,
    MapComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModuleIhmV1 {}
