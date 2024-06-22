/* tslint:disable */
import { LigneVentes } from './ligne-ventes';
import { LigneCommandeIndividualClient } from './ligne-commande-individual-client';
import { LigneCommandeSupplier } from './ligne-commande-supplier';
import { LigneCommandeCompanies } from './ligne-commande-companies';
import { MvtStk } from './mvt-stk';
export interface Article {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  codeArticle?: string;
  designation?: string;
  prixUnitaireHt?: number;
  tauxTva?: number;
  supplierId?:number|undefined;
  gasRetailerId?:number|undefined;
  prixUnitaireTtc?: number;
  imageFileName?: string;
  ligneVentes?: Array<LigneVentes>;
  ligneCommandeIndividualClients?: Array<LigneCommandeIndividualClient>;
  ligneCommandeSuppliers?: Array<LigneCommandeSupplier>;
  ligneCommandeCompanies?: Array<LigneCommandeCompanies>;
  mvtStks?: Array<MvtStk>;
}
