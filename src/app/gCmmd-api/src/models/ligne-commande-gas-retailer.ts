/* tslint:disable */
import { Article } from './article';
import { CommandeGasRetailer } from './commande-gas-retailer';
export interface LigneCommandeGasRetailer {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  article?: Article;
  commandeGasRetailer?: CommandeGasRetailer;
  quantite?: number;
  prixUnitaire?: number;
}
