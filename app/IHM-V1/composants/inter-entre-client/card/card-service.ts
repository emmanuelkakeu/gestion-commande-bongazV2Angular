import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { LigneCommandeSupplierDto, LigneCommandeIndividualClientDto, LigneCommandeCompaniesDto, LigneCommandeGasRetailerDto } from '../../../../gCmmd-api/src/models';
import { ArticleDto } from '../../../../gCmmd-api/src/models';
import { SharedDataService } from '../../../services/Shared-data-service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private articlesInCartSubject = new BehaviorSubject<LigneCommandeSupplierDto[]>([]);
  articlesInCart$ = this.articlesInCartSubject.asObservable();

  private commandeSubject = new BehaviorSubject<any>(null);
  commande$ = this.commandeSubject.asObservable();

  setCommande(commande: any): void {
    console.log("commande envoyer",commande)
    this.commandeSubject.next(commande);
  }

  private apiUrlcmp = `${environment.apiUrlcmp}`;
  private apiUrlindClt = `${environment.apiUrlindClt}`;
  private apifrs = `${environment.apifrs}`;
  private apigasrtl = `${environment.apigasrtl}`;

  constructor(private http: HttpClient,
    sharedDataService :SharedDataService) {}

  addToCart(article: ArticleDto): void {
    const currentArticles = this.articlesInCartSubject.getValue();
    const existingItem = currentArticles.find(item => item.article && item.article.id === article.id);

    if (existingItem) {
      existingItem.quantite += 1;
      existingItem.prixTotalLgn = this.calculateLineTotal(existingItem);
    } else {
      const newItem: LigneCommandeSupplierDto = {
        id: null, // Utiliser null pour un nouvel ID
        article: article,
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

  incrementQuantity(item: LigneCommandeSupplierDto): void {
    item.quantite += 1;
    item.prixTotalLgn = this.calculateLineTotal(item);
    this.articlesInCartSubject.next([...this.articlesInCartSubject.getValue()]);
  }

  decrementQuantity(item: LigneCommandeSupplierDto): void {
    if (item.quantite > 1) {
      item.quantite -= 1;
      item.prixTotalLgn = this.calculateLineTotal(item);
      this.articlesInCartSubject.next([...this.articlesInCartSubject.getValue()]);
    }
  }

  updateQuantity(item: LigneCommandeSupplierDto): void {
    item.prixTotalLgn = this.calculateLineTotal(item);
    this.articlesInCartSubject.next([...this.articlesInCartSubject.getValue()]);
  }

  createOrder(): Observable<any> {
    const currentArticles = this.articlesInCartSubject.getValue();
    console.log('Articles in cart:', currentArticles); // Log to check cart contents

    const connectedUser = JSON.parse(localStorage.getItem('connectedUser') || '{}');
    const roleLibelle = connectedUser.role?.libelle || null;

    let apiUrl = '';
    let order: any = {
      dateCommande: new Date().toISOString(),
      etatCommande: 'EN_PREPARATION',
      prixTolalCmmd: this.calculateTotalPrice(currentArticles)
    };

    const ligneCommande = this.mapArticlesToLigneCommande(currentArticles, roleLibelle);
    console.log('Mapped ligneCommande:', ligneCommande); // Log to check mapped lines

    switch(roleLibelle) {
      case 'INDIVIDUALCLIENT':
        order.idIndividualClient = connectedUser.id;
        order.ligneCommandeIndividualClientDto = ligneCommande;
        order.prixTolalCmmd = this.calculateTotalPrice(currentArticles);
        apiUrl = `${this.apiUrlindClt}/create`;
        break;
      case 'COMPANIESCLIENT':
        order.idCompanies = connectedUser.id;
        order.ligneCommandeCompaniesDto = ligneCommande;
        order.prixTolalCmmd = this.calculateTotalPrice(currentArticles);
        apiUrl = `${this.apiUrlcmp}/create`;
        break;
      case 'SUPPLIER':
        order.idSupplier = connectedUser.id;
        order.ligneCommandeSupplierDto = ligneCommande;
        apiUrl = `${this.apifrs}/create`;
        break;
      case 'GASRETAILER':
        order.idGasRetailer = connectedUser.id;
        order.ligneCommandeGasRetailersDto = ligneCommande;
        apiUrl = `${this.apigasrtl}/create`;
        break;
      default:
        throw new Error('Role non pris en charge');
    }

    console.log('Order to be sent:', order); // Log to check final order object
    this.setCommande(order);
    return this.http.post<any>(apiUrl, order);
  }

  mapArticlesToLigneCommande(articles: LigneCommandeSupplierDto[], roleLibelle: string): any[] {
    switch(roleLibelle) {
      case 'INDIVIDUALCLIENT':
        return articles.map(article => ({

          articleDto: article.article,
          quantite: article.quantite,
          prixTotalLgn: article.prixTotalLgn,

        } as LigneCommandeIndividualClientDto));
      case 'COMPANIESCLIENT':
        return articles.map(article => ({

          articleDto: article.article,
          quantite: article.quantite,
          prixTotalLgn: article.prixTotalLgn
        } as LigneCommandeCompaniesDto));
      case 'SUPPLIER':
        return articles.map(article => ({

          articleDto: article.article,
          quantite: article.quantite,
          prixTotalLgn: article.prixTotalLgn
        } as LigneCommandeSupplierDto));
      case 'GASRETAILER':
        return articles.map(article => ({

          articleDto: article.article,
          quantite: article.quantite,
          prixTotalLgn: article.prixTotalLgn
        } as LigneCommandeGasRetailerDto));
      default:
        throw new Error('Role non pris en charge');
    }
  }

  calculateTotalPrice(articles: LigneCommandeSupplierDto[]): number {
    return articles.reduce((total, item) => {
      if (item.prixTotalLgn !== undefined) {
        return total + item.prixTotalLgn;
      } else {
        return total;
      }
    }, 0);
  }

  calculateLineTotal(item: LigneCommandeSupplierDto): number {
    if (item.article && item.prixTotalLgn) {
      return item.article.prixUnitaireTtc * item.quantite;
    } else {
      return 0;
    }
  }

  clearCart(): void {
    this.articlesInCartSubject.next([]);
  }
}
