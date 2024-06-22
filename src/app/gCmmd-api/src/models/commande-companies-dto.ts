/* tslint:disable */
import { LigneCommandeCompaniesDto } from './ligne-commande-companies-dto';
export interface CommandeCompaniesDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idCompaniesDto?: number;
  ligneCommandeCompaniesDto?: Array<LigneCommandeCompaniesDto>;
  commandeLivree?: boolean;
}
