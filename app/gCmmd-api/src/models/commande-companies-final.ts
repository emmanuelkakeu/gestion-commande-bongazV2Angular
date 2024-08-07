import { LigneCommandeCompaniesDto } from "./ligne-commande-companies-dto";

export class CommandeCompaniesDto {
  id?: number;
  code?: string;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  idCompaniesDto?: number;
  ligneCommandeCompaniesDto?: Array<LigneCommandeCompaniesDto>;
  commandeLivree?: boolean;
  prixTolalCmmd?: number;
}




// Modify CommandeCompaniesFinalDto
export class CommandeCompaniesFinalDto {
  id: number = 0;
  commandeCompaniesDto: CommandeCompaniesDto = new CommandeCompaniesDto();
  infosCompaniesClient: InfosCompaniesClient = new InfosCompaniesClient();
  adresseLivraison: AdresseLivraison = new AdresseLivraison();
  coutLivraison: number = 0;
  coutFinal: number = 0;
  statusCommandeFinal: StatusCommandeFinal = StatusCommandeFinal.EN_PREPARATION;


}



export class InfosCompaniesClient {
  name: string;
  contactDetails: string;
  openingHours: string;
  latitude: number;
  longitude: number;
}

export class AdresseLivraison {
  ville: string;
  quartier: string;
  rue: string;
}

export enum StatusCommandeFinal {
  EN_PREPARATION = "EN_PREPARATION",

}
