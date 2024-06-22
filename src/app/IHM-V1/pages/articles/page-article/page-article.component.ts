import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { ArticleService } from '../../../../gCmmd-api/src/services/article.service';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {
  listArticle: Array<ArticleDto> = [];
  errorMsg = '';

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.findListArticle();
  }

  findListArticle(): void {
    this.articleService.findAll().subscribe(articles => {
      this.listArticle = articles;
    });
  }

  nouvelArticle(): void {
    this.router.navigate(['/dashboard/articles/add_article']);
  }

  handleSuppression(event: any): void {
    if (event === 'success') {
      this.findListArticle();
    } else {
      this.errorMsg = event;
    }
  }
}
