import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleDto } from '../../gCmmd-api/src/models';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl = 'http://localhost:8084/gestionCommande/v1/article';

  constructor(private http: HttpClient) {}

  createArticle(article: ArticleDto, imageFile: File): Observable<ArticleDto> {
    const formData: FormData = new FormData();
    formData.append('articleDto', new Blob([JSON.stringify(article)], { type: 'application/json' }));
    formData.append('imageFile', imageFile, imageFile.name);

    return this.http.post<ArticleDto>(`${this.baseUrl}/create`, formData);
  }
}
