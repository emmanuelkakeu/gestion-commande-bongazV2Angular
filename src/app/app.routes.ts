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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [

      // {
      //   path: '',
      //   redirectTo: 'add_article',
      //   pathMatch: 'full'
      // },

      {
        path: 'articles',
        component: PageArticleComponent,
      },
      {
        path: 'articles/add_article',
        component: ArticleFormComponent,
      },
      {
        path: 'vue_entreprise',
        component: InterEntreClientComponent,
      },
      {
        path: 'clientVue',
        component: InterEntreClientComponent,
      },




    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
