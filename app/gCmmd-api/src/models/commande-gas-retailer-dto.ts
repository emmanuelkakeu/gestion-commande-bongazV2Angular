/* tslint:disable */
import { LigneCommandeGasRetailerDto } from './ligne-commande-gas-retailer-dto';
export interface CommandeGasRetailerDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idGasRetailer?: number;
  ligneCommandeGasRetailerDto?: Array<LigneCommandeGasRetailerDto>;
  commandeLivree?: boolean;
  prixTolalCmmd?:number;
}
