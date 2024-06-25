import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../../services/articles-service';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { ImagesService } from '../../../services/Image-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-detail-entreprise',
  templateUrl: './detail-entreprise.component.html',
  styleUrls: ['./detail-entreprise.component.css']
})
export class DetailEntrepriseComponent implements OnInit, OnDestroy {

   articles: ArticleDto[] = [];
  articleDto: ArticleDto = {
    imageUrl: ''
  }
  private subscription: Subscription | undefined;


  constructor(private imageService : ImagesService, private route: ActivatedRoute, private router: Router, private articleService: ArticleService) { }

  ngOnInit(): void {
    const supplierId: string | null = this.route.snapshot.paramMap.get('supplierId');
    console.log('Supplier ID from route:', supplierId); // Vérification de l'ID du fournisseur

    if (supplierId) {
      this.subscription = this.articleService.findBySupplierId(+supplierId).subscribe({
        next: (articles: ArticleDto[]) => {
          console.log('Articles received from service:', articles); // Vérification des articles reçus
          this.articles = articles;
          this.loadImagesForArticle(); // Charger les images après avoir assigné les articles
        },
        error: (error) => {
          console.error('Error fetching articles:', error);

        }
      });
    } else {
      console.log('Supplier ID is null');
    }
  }


  loadImagesForArticle() {
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

  gotoPokemonList() {
    this.router.navigate(['/dashboard']);
  }
}
