/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeGasRetailerDto {
  id?: number | null;
  articleDto?: ArticleDto;
  quantite?: number;
  prixTotalLgn?: number;
}
