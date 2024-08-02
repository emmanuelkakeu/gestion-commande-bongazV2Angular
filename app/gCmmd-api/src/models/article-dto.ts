export interface ArticleDto {
 

  id: number;
  nameArticle: string;
  codeArticle: string;
  designation: string;
  prixUnitaireHt: number;
  tauxTva: number;
  prixUnitaireTtc: number;
  stockInit: number;

  imageFileName: string;
  supplierId: number | null;
  gasRetailerId: number | null;
  imageArticle: string[];
  imageUrl?: string; // Ajouté pour l'URL de l'image principale
  additionalImageUrls?: string[]; // Ajouté pour les URLs des images supplémentaires
}
