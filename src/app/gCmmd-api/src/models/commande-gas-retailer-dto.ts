/* tslint:disable */
import { LigneCommandeGasRetailer } from './ligne-commande-gas-retailer';
export interface CommandeGasRetailerDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idGasRetailer?: number;
  ligneCommandeGasRetailers?: Array<LigneCommandeGasRetailer>;
  commandeLivree?: boolean;
  prixTolalCmmd?:number;
}
