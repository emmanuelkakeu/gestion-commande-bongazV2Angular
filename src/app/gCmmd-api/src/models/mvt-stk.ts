/* tslint:disable */
import { Article } from './article';
export interface MvtStk {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  dateMvt?: number;
  quantite?: number;
  article?: Article;
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
  sourceMvt?: 'COMMANDE_INDIVIDUALCLIENT' | 'COMMANDE_SUPPLIER' | 'COMMANDE_COMPANIES' | 'COMMANDE_RETAILER' | 'VENTE';
  idEntreprise?: number;
}
