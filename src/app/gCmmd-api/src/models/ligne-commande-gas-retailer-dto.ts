/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeGasRetailerDto {
  id?: number;
  article?: ArticleDto;
  quantite?: number;
  prixTotalLgn?: number;
}
