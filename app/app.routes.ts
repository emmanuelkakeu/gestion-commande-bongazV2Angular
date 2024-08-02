import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IhmV1Component} from'./IHM-V1/ihm-v1.component'
import { AppRoutingIhmV1Module } from './IHM-V1/App-routing-ihm.module';
import { AppModuleIhmV1 } from './IHM-V1/App.module-ihm-v1';
import { DashboardComponent } from './IHM-V1/pages/dashboard/dashboard.component';
import { DetailArticleComponent } from './IHM-V1/composants/detail-article/detail-article.component';
import { PageArticleComponent } from './IHM-V1/pages/articles/page-article/page-article.component';
import { InterEntreClientComponent } from './IHM-V1/composants/inter-entre-client/inter-entre-client.component';
import { ArticleFormComponent } from './IHM-V1/pages/articles/article-form/article-form.component';
import { DetailEntrepriseComponent } from './IHM-V1/composants/inter-entre-client/detail-entreprise/detail-entreprise.component';
import { CardComponent } from './IHM-V1/composants/inter-entre-client/card/card.component';

import { PagesLoginComponentComponent } from './IHM-V1/pages/pages-login-component/pages-login-component.component';
import { PagesVerifyOtpComponentComponent } from './IHM-V1/pages/pages-verify-otp-component/pages-verify-otp-component.component';
import { PageRegisterComponent } from './IHM-V1/pages/page-register/page-register.component';
import { ListGasRetailerComponent } from './IHM-V1/composants/list-gas-retailer/list-gas-retailer.component';



const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard/clientVue',
    pathMatch: 'full'
  },
  {
    path: 'cdashboard/clientVue',
    component:  ListGasRetailerComponent,
  },



  { path: 'login',
  component: PagesLoginComponentComponent },

 { path: 'register',
    component: PageRegisterComponent },

  { path: 'verify-otp',
   component: PagesVerifyOtpComponentComponent },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },



  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [

      // {
      //   path: '',
      //   redirectTo: 'add_article',
      //   pathMatch: 'full'
      // },

      // {
      //   path: 'articles',
      //   component: PageArticleComponent,
      // },
      // {
      //   path: 'articles/add_article',
      //   component: ArticleFormComponent,
      // },

      // {
      //   path: 'vue_entreprise',
      //   component: InterEntreClientComponent,
      // },
      // {
      //   path: 'articleVueEntrep',
      //   component: PageArticleComponent,
      // },
      // {
      //   path: 'vue_entreprise/:supplierId',
      //   component: DetailEntrepriseComponent,
      // },
      // {
      //   path: 'vue_entreprise/:supplierId/card',
      //   component: CardComponent,
      // },
      // {
      //   path: 'clientVue',
      //   component: InterEntreClientComponent,
      // },




    ]
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
