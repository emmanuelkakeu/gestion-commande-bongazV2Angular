import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  findById(articleId: number): Observable<ArticleDto> {
    return this.http.get<ArticleDto>(`${this.baseUrl}/${articleId}`);
  }


  findAllArticles(): Observable<ArticleDto[]> {
    return this.http.get<ArticleDto[]>(`${this.baseUrl}/all`);
  }

  findBySupplierId(supplierId: number): Observable<ArticleDto[]> {
    return this.http.get<ArticleDto[]>(`${this.baseUrl}/supplierId/${supplierId}`);
  }

  findByGasRetailerId(gasRetailerId: number): Observable<ArticleDto[]> {
    return this.http.get<ArticleDto[]>(`${this.baseUrl}/gasRetailerId/${gasRetailerId}`);
  }
  delete(idArticle: number): Observable<null> {
    const url = `${this.baseUrl}/delete/${idArticle}`;
    return this.http.delete<null>(url);
  }

  searchArticles(query: string, page: number, itemsPerPage: number): Observable<{ data: ArticleDto[], totalItems: number }> {
    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString())
      .set('size', itemsPerPage.toString());

    return this.http.get<{ data: ArticleDto[], totalItems: number }>(`${this.baseUrl}/search`, { params });
  }
}
