import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { ArticleService } from '../../../services/articles-service';
import { ImagesService } from '../../../services/Image-service';
import { catchError, of, tap, Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

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
    stock: 0,
    imageFileName: '',
    supplierId: null,
    gasRetailerId: null
  };
  articles: Array<ArticleDto> = [];
  isArticleVueEntrep: boolean = false;

  filteredArticles$: Observable<ArticleDto[]>;
  searchControl = new FormControl('');
  searchQuery: string = '';

  searchResults: ArticleDto[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 3;
  dropdownVisible: boolean = false;

  private searchSubscription: Subscription;



  constructor(
    private imagesService: ImagesService,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {

  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.isArticleVueEntrep = url.some(segment => segment.path.includes('articleVueEntrep'));
      if (this.isArticleVueEntrep) {
        this.findListArticle();
      } else {
        this.listeArticle();
      }
    });


    // Set up search control for filtering
    this.searchControl.valueChanges.pipe(
      startWith(''),
      map(query => this.filterArticles(query!))
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

    if (filterValue) {
      const relevantResults = this.articles.filter(article =>
        article.nameArticle?.toLowerCase().includes(filterValue)
      );
      const otherResults = this.articles.filter(article =>
        !article.nameArticle?.toLowerCase().includes(filterValue)
      );
      return [...relevantResults, ...otherResults];
    } else {
      return this.articles;
    }
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
        this.filteredArticles$ = of(this.articles);
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
    const query = this.searchQuery.trim().toLowerCase();
    this.searchResults = this.filterArticles(query);
    this.dropdownVisible = this.searchResults.length > 0;
  }

  onResultClick(result: ArticleDto): void {
    console.log('Selected article:', result);
    this.router.navigateByUrl(`/dashboard/articleVueEntrep/${result.id}`);
    this.closeDropdown();
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

  loadPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.searchArticles();
  }

  searchArticles(): void {
    // Note: This method may no longer be necessary if you handle filtering locally.
  }

  closeDropdown(): void {
    this.dropdownVisible = false;
  }
}
