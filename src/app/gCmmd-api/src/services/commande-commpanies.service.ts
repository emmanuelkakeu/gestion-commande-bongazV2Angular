/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeCompaniesDto } from '../models/commande-companies-dto';
import { LigneCommandeCompaniesDto } from '../models/ligne-commande-companies-dto';
@Injectable({
  providedIn: 'root',
})
class CommandeCommpaniesService extends __BaseService {
  static readonly findAllPath = '/gestionCommande/v1/commandesCompanies/all/all';
  static readonly savePath = '/gestionCommande/v1/commandesCompanies/create';
  static readonly deleteArticlePath = '/gestionCommande/v1/commandesCompanies/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deletePath = '/gestionCommande/v1/commandesCompanies/delete/{idCommandeGasRetailer}/delete/{idcommandesCompanies}';
  static readonly findByCodePath = '/gestionCommande/v1/commandesCompanies/filter/{codeCommandeGasRetailer}/filter/{codeCommandeCompanies}';
  static readonly findAllLignesCommandesCompaniesByCommandeCompaniesIdPath = '/gestionCommande/v1/commandesCompanies/lignesCommande/{idCommande}';
  static readonly updateArticlePath = '/gestionCommande/v1/commandesCompanies/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateClientPath = '/gestionCommande/v1/commandesCompanies/update/client/{idCommande}/{idClient}';
  static readonly updateEtatCommandePath = '/gestionCommande/v1/commandesCompanies/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantiteCommandePath = '/gestionCommande/v1/commandesCompanies/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdPath = '/gestionCommande/v1/commandesCompanies/{idCommandeGasRetailer}/{idCommandeCompanies}';

 
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeCompaniesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/all/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeCompaniesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeCompaniesDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeCompaniesDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: CommandeCompaniesDto): __Observable<__StrictHttpResponse<CommandeCompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeCompaniesDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: CommandeCompaniesDto): __Observable<CommandeCompaniesDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CommandeCompaniesDto)
    );
  }

  /**
   * @param params The `CommandeCommpaniesService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleResponse(params: CommandeCommpaniesService.DeleteArticleParams): __Observable<__StrictHttpResponse<CommandeCompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/delete/article/${params.idCommande}/${params.idLigneCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeCompaniesDto>;
      })
    );
  }
  /**
   * @param params The `CommandeCommpaniesService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticle(params: CommandeCommpaniesService.DeleteArticleParams): __Observable<CommandeCompaniesDto> {
    return this.deleteArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeCompaniesDto)
    );
  }

  /**
   * @param idcommandesCompanies undefined
   */
  deleteResponse(idcommandesCompanies: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/delete/${idcommandesCompanies}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param idcommandesCompanies undefined
   */
  delete(idcommandesCompanies: number): __Observable<null> {
    return this.deleteResponse(idcommandesCompanies).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codecommandesCompanies undefined
   * @return successful operation
   */
  findByCodeResponse(codecommandesCompanies: string): __Observable<__StrictHttpResponse<CommandeCompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/filter/${codecommandesCompanies}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeCompaniesDto>;
      })
    );
  }
  /**
   * @param codecommandesCompanies undefined
   * @return successful operation
   */
  findByCode(codecommandesCompanies: string): __Observable<CommandeCompaniesDto> {
    return this.findByCodeResponse(codecommandesCompanies).pipe(
      __map(_r => _r.body as CommandeCompaniesDto)
    );
  }

  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesCompaniesByCommandeCompaniesIdResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeCompaniesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/lignesCommande/${idCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeCompaniesDto>>;
      })
    );
  }
  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesCompaniesByCommandeCompaniesId(idCommande: number): __Observable<Array<LigneCommandeCompaniesDto>> {
    return this.findAllLignesCommandesCompaniesByCommandeCompaniesIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeCompaniesDto>)
    );
  }

  /**
   * @param params The `CommandeCommpaniesService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticleResponse(params: CommandeCommpaniesService.UpdateArticleParams): __Observable<__StrictHttpResponse<CommandeCompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/update/article/${params.idCommande}/${params.idLigneCommande}/${params.idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeCompaniesDto>;
      })
    );
  }
  /**
   * @param params The `CommandeCommpaniesService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticle(params: CommandeCommpaniesService.UpdateArticleParams): __Observable<CommandeCompaniesDto> {
    return this.updateArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeCompaniesDto)
    );
  }

  /**
   * @param params The `CommandeCommpaniesService.UpdateClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `idClient`:
   *
   * @return successful operation
   */
  updateClientResponse(params: CommandeCommpaniesService.UpdateClientParams): __Observable<__StrictHttpResponse<CommandeCompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/update/client/${params.idCommande}/${params.idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeCompaniesDto>;
      })
    );
  }
  /**
   * @param params The `CommandeCommpaniesService.UpdateClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `idClient`:
   *
   * @return successful operation
   */
  updateClient(params: CommandeCommpaniesService.UpdateClientParams): __Observable<CommandeCompaniesDto> {
    return this.updateClientResponse(params).pipe(
      __map(_r => _r.body as CommandeCompaniesDto)
    );
  }

  /**
   * @param params The `CommandeCommpaniesService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeResponse(params: CommandeCommpaniesService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<CommandeCompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/update/etat/${params.idCommande}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeCompaniesDto>;
      })
    );
  }
  /**
   * @param params The `CommandeCommpaniesService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommande(params: CommandeCommpaniesService.UpdateEtatCommandeParams): __Observable<CommandeCompaniesDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeCompaniesDto)
    );
  }

  /**
   * @param params The `CommandeCommpaniesService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: CommandeCommpaniesService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeCompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeCompaniesDto>;
      })
    );
  }
  /**
   * @param params The `CommandeCommpaniesService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: CommandeCommpaniesService.UpdateQuantiteCommandeParams): __Observable<CommandeCompaniesDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeCompaniesDto)
    );
  }

  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findByIdResponse(idCommandeClient: number): __Observable<__StrictHttpResponse<CommandeCompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesCompanies/${idCommandeClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeCompaniesDto>;
      })
    );
  }
  /**
   * @param idCommandeClient undefined
   * @return successful operation
   */
  findById(idCommandeClient: number): __Observable<CommandeCompaniesDto> {
    return this.findByIdResponse(idCommandeClient).pipe(
      __map(_r => _r.body as CommandeCompaniesDto)
    );
  }
}

module CommandeCommpaniesService {

  /**
   * Parameters for deleteArticle
   */
  export interface DeleteArticleParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateArticle
   */
  export interface UpdateArticleParams {
    idLigneCommande: number;
    idCommande: number;
    idArticle: number;
  }

  /**
   * Parameters for updateClient
   */
  export interface UpdateClientParams {
    idCommande: number;
    idClient: number;
  }

  /**
   * Parameters for updateEtatCommande
   */
  export interface UpdateEtatCommandeParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  }

  /**
   * Parameters for updateQuantiteCommande
   */
  export interface UpdateQuantiteCommandeParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }
}

export { CommandeCommpaniesService }
