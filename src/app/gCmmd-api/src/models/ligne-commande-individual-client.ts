/* tslint:disable */
import { Article } from './article';
import { CommandeIndividualClient } from './commande-individual-client';
export interface LigneCommandeIndividualClient {
  id?: number;
  creationDate?: number;
  lastModifiedDate?: number;
  article?: Article;
  commandeIndividualClient?: CommandeIndividualClient;
  quantite?: number;
  prixUnitaire?: number;
}
