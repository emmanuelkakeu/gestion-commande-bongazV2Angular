import { ArticleDto } from './article-dto';
export interface LigneCommandeIndividualClientDto {
  id?: number | null;
  articleDto?: ArticleDto;
  quantite?: number;
  prixTotalLgn?: number;
}


