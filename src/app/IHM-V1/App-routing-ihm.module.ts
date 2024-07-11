
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { InterEntreClientComponent } from './composants/inter-entre-client/inter-entre-client.component';
import { ArticleFormComponent } from './pages/articles/article-form/article-form.component';
import { DetailEntrepriseComponent } from './composants/inter-entre-client/detail-entreprise/detail-entreprise.component';
import { CardComponent } from './composants/inter-entre-client/card/card.component';
import { DetailArticlePage } from './pages/articles/page-article/detail-article-page/detail-article-page';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';
import { PagesCompaniesComponent } from './pages/pages-companies/pages-companies.component';
import { PagesSupplierComponent } from './pages/pages-supplier/pages-supplier.component';
import { NouveauSupplierCompaniesComponent } from './composants/nouveau-supplier-companies/nouveau-supplier-companies.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PagesLoginComponentComponent } from './pages/pages-login-component/pages-login-component.component';
import { PagesVerifyOtpComponentComponent } from './pages/pages-verify-otp-component/pages-verify-otp-component.component';
import { MapComponent } from './composants/map/map.component';

const routes: Routes = [
  {
    path: 'dashboard',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login',
      component: PagesLoginComponentComponent },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [

      {
        path: 'map',
        component: MapComponent,
      },

      {
        path: 'articles',
        component: PageArticleComponent,
      },
      {
        path: 'articles/add_article',
        component: ArticleFormComponent,
      },


      {
        path: 'articleVueEntrep',
        component: PageArticleComponent,
      },
      {
        path: 'articleVueEntrep/:articleId',
        component: DetailArticlePage,
      },
      {
        path: 'articleVueEntrep/:articleId/card',
        component: CardComponent,
      },



      {
        path: 'vue_entreprise',
        component: InterEntreClientComponent,
      },
      {
        path: 'vue_entreprise/:supplierId',
        component: DetailEntrepriseComponent,
      },
      {
        path: 'vue_entreprise/:supplierId/card',
        component: CardComponent,
      },


      {
        path: 'clientVue',
        component: InterEntreClientComponent,
      },



      {
        path: 'mvtstk',
        component: DetailMvtStkComponent,
      },


      {
        path: 'Companies',
        component: PagesCompaniesComponent,
        data: {
          origin: 'companies'
        }
      },
      {
        path: 'Companies/nouveauSupplierCompanies',
        component: NouveauSupplierCompaniesComponent,
        data: {
          origin: 'companies'
        }
      },


      {
        path: 'fournisseurs',
        component: PagesSupplierComponent,
        data: {
          origin: 'supplier'
        }
      },
      {
        path: 'fournisseurs/nouveauSupplierCompanies',
        component: NouveauSupplierCompaniesComponent,
        data: {
          origin: 'supplier'
        },
      },

      { path: 'login',
      component: PagesLoginComponentComponent },

     { path: 'register',
        component: PageRegisterComponent },

      { path: 'verify-otp',
       component: PagesVerifyOtpComponentComponent },




    ]
  }
  ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingIhmV1Module { }
