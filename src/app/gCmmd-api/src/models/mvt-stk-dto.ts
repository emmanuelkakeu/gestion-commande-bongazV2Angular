/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MvtStkDto {
  id?: number;
  dateMvt?: number;
  quantite?: number;
  articleDto?: ArticleDto;
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
  sourceMvt?: 'COMMANDE_INDIVIDUALCLIENT' | 'COMMANDE_SUPPLIER' | 'COMMANDE_COMPANIES' | 'COMMANDE_RETAILER' | 'VENTE';
}
