/* tslint:disable */
import { LigneCommandeSupplier } from './ligne-commande-supplier';
export interface CommandeSupplier {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idSupplier?: number;
  ligneCommandeSupplier?: Array<LigneCommandeSupplier>;
  prixTolalCmmd?:number;
}
