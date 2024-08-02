import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ArticleDto } from '../../gCmmd-api/src/models/article-dto';  // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject = new BehaviorSubject<string>('');
  private searchResultsSubject = new BehaviorSubject<ArticleDto[]>([]);

  searchQuery$ = this.searchQuerySubject.asObservable();
  searchResults$ = this.searchResultsSubject.asObservable();

  private apiUrl = 'http://localhost:8084/gestionCommande/v1/article';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  setSearchResults(results: ArticleDto[]): void {
    this.searchResultsSubject.next(results);
  }

  searchArticles(query: string, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search`, {
      params: {
        query,
        page: page.toString(),
        size: size.toString()
      }
    });
  }


}
