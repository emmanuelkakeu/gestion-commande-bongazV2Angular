import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { ArticleService } from '../../../services/articles-service';
import { ImagesService } from '../../../services/Image-service';
import { catchError, of, tap, Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { SearchService } from '../../../services/searchService';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.scss']
})
export class PageArticleComponent implements OnInit, OnDestroy {
  listArticles: Array<ArticleDto> = [];
  errorMsg = '';

  articleDto: ArticleDto = {
    imageUrl: '',
    prixUnitaireTtc: 0,
    additionalImageUrls: [],
    imageArticle: [],
    id: 0,
    nameArticle: '',
    codeArticle: '',
    designation: '',
    prixUnitaireHt: 0,
    tauxTva: 0,
    stockInit: 0,
    imageFileName: '',
    supplierId: null,
    gasRetailerId: null
  };
  articles: Array<ArticleDto> = [];
  isArticleVueEntrep: boolean = false;

  filteredArticles$: Observable<any[]>;
  searchControl = new FormControl('');
  searchQuery: string = '';

  searchResults: ArticleDto[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 3;

  private searchSubscription: Subscription;

  constructor(
    private imagesService: ImagesService,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.isArticleVueEntrep = url.some(segment => segment.path.includes('articleVueEntrep'));
      if (this.isArticleVueEntrep) {
        this.findListArticle();
      } else {
        this.listeArticle();
      }
    });

    this.searchSubscription = this.searchService.searchQuery$.pipe(
      startWith(''),
      map(query => this.filterArticles(query))
    ).subscribe(filteredArticles => {
      this.filteredArticles$ = of(filteredArticles);
    });

    this.listeArticle();
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  private filterArticles(query: string): ArticleDto[] {
    const filterValue = query.toLowerCase();

    const relevantArticles = this.articles.filter(article =>
      article.nameArticle?.toLowerCase().includes(filterValue)
    );

    const nonRelevantArticles = this.articles.filter(article =>
      !article.nameArticle?.toLowerCase().includes(filterValue)
    );

    return [...relevantArticles, ...nonRelevantArticles];
  }

  listeArticle(): void {
    this.articleService.findAllArticles().pipe(
      tap(response => {
        this.listArticles = response;
        this.listArticles.forEach(article => this.loadImage(article));
        this.articles = [...this.listArticles];
        this.filteredArticles$ = of(this.articles);
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
          article.imageUrl = './assets/product.png';
        }
      });
    } else {
      article.imageUrl = './assets/product.png';
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
        return of([]);
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

  onSearch(): void {
    this.currentPage = 1;
    this.searchService.setSearchQuery(this.searchQuery);
    this.searchArticles();
  }

  searchArticles(): void {
    this.articleService.searchArticles(this.searchQuery, this.currentPage, this.itemsPerPage)
      .subscribe(response => {
        this.searchResults = response.data;
        this.totalPages = Math.ceil(response.totalItems / this.itemsPerPage);
        this.searchService.setSearchResults(this.searchResults);
      });
  }

  loadNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.searchArticles();
    }
  }

  loadPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchArticles();
    }
  }
}
