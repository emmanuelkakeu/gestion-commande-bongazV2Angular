/* tslint:disable */
import { LigneCommandeSupplier } from './ligne-commande-supplier';
export interface CommandeGasRetailer {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idGasRetailer?: number;
  ligneCommandeSupplier?: Array<LigneCommandeSupplier>;
}
