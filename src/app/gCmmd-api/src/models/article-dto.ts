/* tslint:disable */
export interface ArticleDto {
  id?: number;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  prixUnitaireTtc?: number;
  imageFileName?: string;
  supplierId?:number|undefined;
  gasRetailerId?:number|undefined;
}
