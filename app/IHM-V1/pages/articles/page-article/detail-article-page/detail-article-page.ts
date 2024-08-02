import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../../services/articles-service';
import { ArticleDto } from '../../../../../gCmmd-api/src/models/article-dto';
import { ImagesService } from '../../../../services/Image-service';
import { CardService } from '../../../../composants/inter-entre-client/card/card-service';

@Component({
  selector: 'app-page-article',
  templateUrl: './detail-article-page.html',
  styleUrls: ['./detail-article-page.css']
})
export class DetailArticlePage implements OnInit {
  article: ArticleDto | null = null;
  articles: ArticleDto[] = [];
  articleId: string | null = null;
  mainImageUrl: string;
  isImageExpanded = false;

  constructor(
    private router: Router,
    @Inject(CardService) private cardService: CardService,
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit called');
    this.articleId = this.route.snapshot.paramMap.get('articleId');
    console.log('articleId:', this.articleId);
    if (this.articleId) {
      this.articleService.findById(Number(this.articleId)).subscribe({
        next: article => {
          console.log('Article fetched:', article);
          this.article = article;
          this.loadImagesForArticle();
        },
        error: error => console.error('Error fetching article', error),
        complete: () => console.log('Fetch article complete')
      });
    }
    this.mainImageUrl = this.article!.imageUrl || './assets/product.png';
  }

  loadImagesForArticle() {
    console.log('Starting to load images for the article');

    if (this.article) {
      // Chargement de l'image principale
      if (this.article.imageFileName) {
        console.log(`Fetching main image for article ${this.article.id}: ${this.article.imageFileName}`);

        this.imageService.getImage(this.article.imageFileName).subscribe({
          next: (blob) => {
            const objectURL = URL.createObjectURL(blob);
            console.log(`Main image fetched for article ${this.article!.id}: ${this.article!.imageFileName}, Object URL created: ${objectURL}`);
            this.article!.imageUrl = objectURL;
          },
          error: (error) => {
            console.error(`Erreur lors de la récupération de l'image ${this.article!.imageFileName} pour l'article ${this.article!.id}`, error);
            this.article!.imageUrl = './assets/product.png'; // Image par défaut en cas d'erreur
          }
        });
      } else {
        console.log(`No main image found for article ${this.article.id}, setting default image`);
        this.article.imageUrl = './assets/product.png'; // Image par défaut si pas de nom de fichier
      }

      // Chargement des autres images
      if (Array.isArray(this.article.imageArticle)) {
        console.log(`Fetching additional images for article ${this.article.id}`);
        this.article.additionalImageUrls = [];

        this.article.imageArticle.forEach((image: string, index: number) => {
          console.log(`Checking image at index ${index} : ${image}`);

          if (image && typeof image === 'string') {
            console.log(`Fetching additional image ${index + 1} for article ${this.article!.id}: ${image}`);

            this.imageService.getImage(image).subscribe({
              next: (blob) => {
                const objectURL = URL.createObjectURL(blob);
                console.log(`Additional image ${index + 1} fetched for article ${this.article!.id}, Object URL created: ${objectURL}`);
                this.article!.additionalImageUrls?.push(objectURL);
              },
              error: (error) => {
                console.error(`Erreur lors de la récupération de l'image ${image} pour l'article ${this.article!.id}`, error);
              }
            });
          } else {
            console.error(`Image or image filename is undefined at index ${index} : ${image}`);
          }
        });
      } else {
        console.log(`No additional images found for article ${this.article.id}`);
      }
    }

    console.log('Finished loading images for the article');
  }

  addToCart(article: ArticleDto): void {
    console.log('Adding article to cart:', article);
    this.cardService.addToCart(article);
    this.router.navigate(['dashboard/articleVueEntrep', article.id, 'card']).then(() => {
      console.log('Redirection successful!');
    }).catch(err => {
      console.error('Redirection failed:', err);
    });
    console.log('Article added to cart:', article);
  }

  toggleImageSize(event: MouseEvent): void {
    const imgElement = event.target as HTMLElement;
    imgElement.classList.toggle('expanded');
  }

  toggleMainImage(): void {
    this.isImageExpanded = !this.isImageExpanded;
  }

  handleThumbnailClick(imageUrl: string): void {
    if (this.mainImageUrl === imageUrl && this.isImageExpanded) {
      this.resetMainImage();
    } else {
      this.setMainImage(imageUrl);
    }
  }

  setMainImage(imageUrl: string): void {
    this.mainImageUrl = imageUrl;
    this.isImageExpanded = true;
  }

  resetMainImage(): void {
    this.mainImageUrl = this.article!.imageUrl || './assets/product.png';
    this.isImageExpanded = false;
  }

}
