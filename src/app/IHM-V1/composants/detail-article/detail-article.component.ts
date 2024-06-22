import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticleDto } from '../../../gCmmd-api/src/models/article-dto';
import { Router } from '@angular/router';
import { ArticleService } from '../../../gCmmd-api/src/services/article.service';
import { ImagesService } from '../../services/Image-service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  @Input() articleDto: ArticleDto = {};
  @Output() suppressionResult = new EventEmitter();
  articles: ArticleDto[] = [];
  imageUrl: string = './assets/product.png'; // URL par défaut de l'image

  constructor(
    private router: Router,
    private articleService: ArticleService,
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
    this.articleService.findAll().pipe(
      tap(response => this.articles = response),
      catchError(error => {
        console.error('Erreur lors de la récupération des articles', error);
        return of([]); // Retourne un tableau vide ou gère l'erreur selon les besoins
      })
    ).subscribe();

    this.loadImage();
  }

  loadImage(): void {
    if (this.articleDto.imageFileName) {
      this.imagesService.getImage(this.articleDto.imageFileName).subscribe({
        next: (blob) => {
          const objectURL = URL.createObjectURL(blob);
          this.imageUrl = objectURL;
        },
        error: (error) => {
          console.error('Erreur lors de la récupération de l\'image', error);
          this.imageUrl = './assets/product.png'; // Image par défaut en cas d'erreur
        }
      });
    } else {
      this.imageUrl = './assets/product.png'; // Image par défaut si pas de nom de fichier
    }
  }

  modifierArticle(): void {
    this.router.navigate(['nouvelarticle', this.articleDto.id]);
  }

  confirmerEtSupprimerArticle(): void {
    console.log('Tentative de suppression de l\'article avec ID:', this.articleDto.id);
    if (this.articleDto.id) {
      this.articleService.delete(this.articleDto.id).subscribe({
        next: () => {
          console.log('Suppression réussie');
          this.suppressionResult.emit('success');
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de l\'article:', error);
          this.suppressionResult.emit(error.error.error);
        }
      });
    } else {
      console.error('ID de l\'article manquant');
    }
  }
}
