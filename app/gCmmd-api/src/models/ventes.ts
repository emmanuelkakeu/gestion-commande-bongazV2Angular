/* tslint:disable */
import { LigneVentes } from './ligne-ventes';
export interface Ventes {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  code?: string;
  dateVente?: number;
  commentaire?: string;
  idSupplier?: number;
  ligneVentes?: Array<LigneVentes>;
}
