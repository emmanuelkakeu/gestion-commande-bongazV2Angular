import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingIhmV1Module } from './App-routing-ihm.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner'; // Ajouter cette ligne

import { IhmV1Component } from './ihm-v1.component';
import { MenuComponent } from './composants/menu/menu.component';
import { LoaderComponent } from './composants/loader/loader.component';
import { HeaderComponent } from './composants/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { InterEntreClientComponent } from './composants/inter-entre-client/inter-entre-client.component';
import { ArticleFormComponent } from './pages/articles/article-form/article-form.component';
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
import { AuthInterceptor } from './auth-interceptor';
import { MapComponent } from './composants/map/map.component';
import { ListGasRetailerComponent } from './composants/list-gas-retailer/list-gas-retailer.component';
import { ImagesService } from '../gCmmd-api/src/services';
import { CardService } from './composants/inter-entre-client/card/card-service';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { SearchService } from './services/searchService';
import { ClickOutsideDirective } from './composants/clickOutsideDirective';
import { CommandeCompaniesFinalService } from './services/commande-companies-final';
import { CommandeCompaniesFinalFormComponent } from './pages/pages-commd-comp-suppl/commande-companies-final-form/commande-companies-final-form.component';

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
    ListGasRetailerComponent,
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
    MapComponent,
    ClickOutsideDirective,
    CommandeCompaniesFinalFormComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    AppRoutingIhmV1Module,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
     // Ajouter cette ligne
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ImagesService,
    CardService,
    SearchService,
    CommandeCompaniesFinalService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModuleIhmV1 {}
