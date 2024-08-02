/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeSupplierDto {
  id?: number | null;
  article?: ArticleDto;
  quantite: number;
  prixTotalLgn?: number;
}
