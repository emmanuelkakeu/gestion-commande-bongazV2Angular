/* tslint:disable */
import { Article } from './article';
import { CommandeSupplier } from './commande-supplier';
export interface LigneCommandeSupplier {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  article?: Article;
  commandeSupplier?: CommandeSupplier;
  quantite?: number;
  prixUnitaire?: number;
  idEntreprise?: number;
}
