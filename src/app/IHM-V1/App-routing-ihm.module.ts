
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { InterEntreClientComponent } from './composants/inter-entre-client/inter-entre-client.component';
import { ArticleFormComponent } from './pages/articles/article-form/article-form.component';

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
  }
  ,
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingIhmV1Module { }
