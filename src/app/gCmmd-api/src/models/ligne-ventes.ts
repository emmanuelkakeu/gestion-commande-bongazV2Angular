/* tslint:disable */
import { Ventes } from './ventes';
import { Article } from './article';
export interface LigneVentes {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  vente?: Ventes;
  article?: Article;
  quantite?: number;
  prixUnitaire?: number;
}
