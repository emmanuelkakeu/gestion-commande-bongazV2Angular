import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../../services/articles-service';
import { ArticleDto } from '../../../../../gCmmd-api/src/models/article-dto';
import { ImagesService } from '../../../../services/Image-service';
import { CartService } from '../../../../composants/inter-entre-client/card/card-service';

@Component({
  selector: 'app-page-article',
  templateUrl: './detail-article-page.html',
  styleUrls: ['./detail-article-page.css']
})
export class DetailArticlePage implements OnInit {
  article: ArticleDto | null = null;
  articleId: string | null = null;

  constructor(
    private router: Router,
    private cartService: CartService,
    private imageService: ImagesService,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('articleId');
    if (this.articleId) {
      this.articleService.findById(Number(this.articleId)).subscribe({
        next: article => {
          this.article = article;
          this.loadImageForArticle();
        },
        error: error => console.error('Error fetching article', error),
        complete: () => console.log('Fetch article complete')
      });
    }
  }

  loadImageForArticle() {
    if (this.article && this.article.imageFileName) {
      this.imageService.getImage(this.article.imageFileName).subscribe({
        next: (blob) => {
          const objectURL = URL.createObjectURL(blob);
          this.article!.imageUrl = objectURL;
        },
        error: (error) => {
          console.error(`Erreur lors de la récupération de l'image ${this.article!.imageFileName}`, error);
          this.article!.imageUrl = './assets/product.png';
        }
      });
    } else if (this.article) {
      this.article.imageUrl = './assets/product.png';
    }
  }

  addToCart(article: ArticleDto): void {
    this.cartService.addToCart(article);
    this.router.navigate(['dashboard/articleVueEntrep', article.id, 'card']).then(() => {
      console.log('Redirection successful!');
    }).catch(err => {
      console.error('Redirection failed:', err);
    });
    console.log('Article added to cart:', article);
  }
}
