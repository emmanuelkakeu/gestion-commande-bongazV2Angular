/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface LigneCommandeCompaniesDto {
  id?: number | null;
  articleDto?: ArticleDto;
  quantite?: number;
  prixTotalLgn?: number;
}
