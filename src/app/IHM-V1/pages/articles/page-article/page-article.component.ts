import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { ArticleService } from '../../../services/articles-service';
import { ImagesService } from '../../../services/Image-service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit {
  listArticles: Array<ArticleDto> = [];
  errorMsg = '';

  articleDto: ArticleDto = {
    imageUrl: '',
    prixUnitaireTtc: 0
  };
  articles: Array<ArticleDto> = [];
  isArticleVueEntrep: boolean = false;

  constructor(
    private imagesService: ImagesService,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.isArticleVueEntrep = url.some(segment => segment.path.includes('articleVueEntrep'));
      if (this.isArticleVueEntrep) {
        this.findListArticle();
      }
    });
    this.listeArticle();
  }

  listeArticle(): void {
    this.articleService.findAllArticles().pipe(
      tap(response => {
        this.listArticles = response;
        this.listArticles.forEach(article => this.loadImage(article));
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des articles', error);
        return of([]); // Retourne un tableau vide ou gère l'erreur selon les besoins
      })
    ).subscribe();
  }

  loadImage(article: ArticleDto): void {
    if (article.imageFileName) {
      this.imagesService.getImage(article.imageFileName).subscribe({
        next: (blob) => {
          const objectURL = URL.createObjectURL(blob);
          article.imageUrl = objectURL;
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de l\'image', error);
          article.imageUrl = './assets/product.png'; // Image par défaut en cas d'erreur
        }
      });
    } else {
      article.imageUrl = './assets/product.png'; // Image par défaut si pas de nom de fichier
    }
  }

  findListArticle(): void {
    this.articleService.findAllArticles().pipe(
      tap(response => {
        this.articles = response;
        this.articles.forEach(article => this.loadImage(article));
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des articles', error);
        return of([]); // Retourne un tableau vide ou gère l'erreur selon les besoins
      })
    ).subscribe();
  }

  nouvelArticle(): void {
    this.router.navigate(['/dashboard/articles/add_article']);
  }

  handleSuppression(event: string): void {
    if (event === 'success') {
      this.listeArticle();
    } else {
      this.errorMsg = event;
    }
  }

  onCardClick(article: ArticleDto): void {
    this.router.navigate(['/article-details', article.id]);
  }


}
