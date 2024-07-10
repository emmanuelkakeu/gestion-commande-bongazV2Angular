// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { environment } from '../../../../../environments/environment';
import { LigneCommandeSupplierDto } from '../../../../gCmmd-api/src/models/ligne-commande-supplier-dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private articlesInCartSubject = new BehaviorSubject<LigneCommandeSupplierDto[]>([]);
  articlesInCart$ = this.articlesInCartSubject.asObservable();

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  addToCart(article: ArticleDto): void {
    const currentArticles = this.articlesInCartSubject.getValue();
    const existingItem = currentArticles.find(item => item.article && item.article.id === article.id);

    if (existingItem) {
      existingItem.quantite += 1;
      existingItem.prixTotalLgn = this.calculateLineTotal(existingItem);
    } else {
      const newItem: LigneCommandeSupplierDto = {
        article,
        quantite: 1,
        prixTotalLgn: article.prixUnitaireTtc
      };
      this.articlesInCartSubject.next([...currentArticles, newItem]);
    }
  }


  removeFromCart(item: LigneCommandeSupplierDto): void {
    const currentArticles = this.articlesInCartSubject.getValue();
    const updatedArticles = currentArticles.filter(a => a !== item);
    this.articlesInCartSubject.next(updatedArticles);
  }

  createOrder(supplierId: number): Observable<any> {
    const currentArticles = this.articlesInCartSubject.getValue();

    const order = {
      supplierId,
      ligneCommandeSupplier: currentArticles,
      dateCommande: new Date().toISOString(),
      etatCommande: 'EN_PREPARATION',
      prixTolalCmmd: this.calculateTotalPrice(currentArticles)
    };

    return this.http.post<any>(`${this.apiUrl}/create`, order);
  }

 calculateTotalPrice(articles: LigneCommandeSupplierDto[]): number {
    return articles.reduce((total, item) => {
      if (item.prixTotalLgn !== undefined) {
        return total + item.prixTotalLgn;
      } else {
        // Gérer le cas où prixTotalLgn est undefined (optionnel)
        return total;
      }
    }, 0);
  }


  calculateLineTotal(item: LigneCommandeSupplierDto): number {
    if (item.article && item.prixTotalLgn) {
      return item.article.prixUnitaireTtc * item.quantite;
    } else {
      // Gérer le cas où article ou prixTotalLgn est undefined
      return 0; // ou une valeur par défaut appropriée
    }
  }


  clearCart(): void {
    this.articlesInCartSubject.next([]);
  }
}
