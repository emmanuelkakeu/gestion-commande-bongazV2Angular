import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/articles-service';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { ImagesService } from '../../../services/Image-service';
import { Subscription } from 'rxjs';
import { CartService } from '../../../composants/inter-entre-client/card/card-service';


@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrls: ['./detail-entreprise.component.css']
})
export class DetailEntrepriseComponent implements OnInit, OnDestroy {

  articles: ArticleDto[] = [];
  articlesInCart: ArticleDto[] = [];
  private subscription: Subscription | undefined;
  supplierId: string | null = null;
  gasRetailerId: string | null = null;

  constructor(
    private cartService : CartService,
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.supplierId = this.route.snapshot.paramMap.get('supplierId');
    console.log('Supplier ID from route:', this.supplierId);

    this.gasRetailerId = this.route.snapshot.paramMap.get('gasRetailerId');
    console.log('Supplier ID from route:', this.gasRetailerId);

    if (this.supplierId) {
      this.subscription = this.articleService.findBySupplierId(+this.supplierId).subscribe({
        next: (articles: ArticleDto[]) => {
          console.log('Articles received from service:', articles);
          this.articles = articles;
          this.loadImagesForArticles();
        },
        error: (error) => {
          console.error('Error fetching articles:', error);
        }
      });
    } else {
      this.subscription = this.articleService.findByGasRetailerId(+this.gasRetailerId!).subscribe({
        next: (articles: ArticleDto[]) => {
          console.log('Articles received from service:', articles);
          this.articles = articles;
          this.loadImagesForArticles();
        },
        error: (error) => {
          console.error('Error fetching articles:', error);
        }
      });
    }
  }

  loadImagesForArticles() {
    this.articles.forEach(article => {
      if (article.imageFileName) {
        this.imageService.getImage(article.imageFileName).subscribe({
          next: (blob) => {
            const objectURL = URL.createObjectURL(blob);
            article.imageUrl = objectURL; // Met à jour l'URL de l'image pour chaque fournisseur
          },
          error: (error) => {
            console.error(`Erreur lors de la récupération de l'image ${article.imageFileName}`, error);
            article.imageUrl = './assets/product.png'; // Image par défaut en cas d'erreur
          }
        });
      } else {
        article.imageUrl = './assets/product.png'; // Image par défaut si pas de nom de fichier
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addToCart(article: ArticleDto): void {
    this.cartService.addToCart(article);
    console.log('Article added to cart:', article);
  }

  onclick() {

    return ['card'];
  }

  gotoPokemonList() {
    this.router.navigate(['/dashboard']);
  }
}
