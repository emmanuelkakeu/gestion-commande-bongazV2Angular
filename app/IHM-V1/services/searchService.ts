import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleDto } from '../../gCmmd-api/src/models/article-dto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:8084/gestionCommande/v1/article';

  constructor(private http: HttpClient) {}

  searchArticles(query: string, page: number, size: number): Observable<{ data: ArticleDto[], totalItems: number, totalPages: number }> {
    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<{ data: ArticleDto[], totalItems: number, totalPages: number }>(`${this.baseUrl}/search`, { params })
      .pipe(
        map(response => {
          return {
            data: response.data,
            totalItems: response.totalItems,
            totalPages: response.totalPages
          };
        })
      );
  }

}
