/* tslint:disable */
import { Article } from './article';
import { CommandeCompanies } from './commande-companies';
export interface LigneCommandeCompanies {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  article?: Article;
  commandeCompanies?: CommandeCompanies;
  quantite?: number;
  prixUnitaire?: number;
}
