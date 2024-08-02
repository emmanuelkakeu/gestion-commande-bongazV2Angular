/* tslint:disable */
import { LigneCommandeCompanies } from './ligne-commande-companies';
export interface CommandeCompanies {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idCompanies?: number;
  ligneCommandeCompanies?: Array<LigneCommandeCompanies>;
  prixTolalCmmd?:number;
}
