/* tslint:disable */
import { LigneCommandeIndividualClient } from './ligne-commande-individual-client';
export interface CommandeIndividualClient {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  ligneCommandeIndividualClients?: Array<LigneCommandeIndividualClient>;
  idIndividualClient?: number;
}
