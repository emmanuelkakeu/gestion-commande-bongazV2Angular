/* tslint:disable */
import { LigneCommandeSupplierDto } from './ligne-commande-supplier-dto';
export interface CommandeSupplierDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idSupplier?: number;
  ligneCommandeSupplier?: Array<LigneCommandeSupplierDto>;
  commandeLivree?: boolean;
}
