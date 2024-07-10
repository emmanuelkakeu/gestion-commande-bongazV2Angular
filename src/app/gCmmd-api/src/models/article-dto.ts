/* tslint:disable */
export interface ArticleDto {
  imageUrl: string;
  id?: number;
  nameArticle?: string;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc: number;
  imageFileName?: string;
  stockInit?:number;
  supplierId?:number|undefined;
  gasRetailerId?:number|undefined;
}
