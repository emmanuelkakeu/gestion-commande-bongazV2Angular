import { Injectable } from '@angular/core';
import {UsersApiService} from '../../gUsers-api/src/services/users-api.service';
import {ArticleService} from '../../../app/gCmmd-api/src/services';
import {ArticleDto} from '../../../app/gCmmd-api/src/models/article-dto'
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private userService: UsersApiService,
    private articleService: ArticleService
  ) { }


  // enregistrerArticle(articleDto: ArticleDto): Observable<ArticleDto> {
  //   articleDto.idEntreprise = this.userService.getConnectedUser().entreprise?.id;
  //   return this.articleService.save(articleDto);
  // }

  findAllArticles(): Observable<ArticleDto[]> {
    return this.articleService.findAll();
  }

  findArticleById(idArticle?: number): Observable<ArticleDto> {
    if (idArticle) {
      return this.articleService.findById(idArticle);
    }
    return of();
  }

  deleteArticle(idArticle: number): Observable<any> {
    if (idArticle) {
      return this.articleService.delete(idArticle);
    }
    return of();
  }

  findArticleByCode(codeArticle: string): Observable<ArticleDto> {
    return this.articleService.findByCodeArticle(codeArticle);
  }
}

