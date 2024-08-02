/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeGasRetailerDto } from '../models/commande-gas-retailer-dto';
import { LigneCommandeGasRetailerDto } from '../models/ligne-commande-gas-retailer-dto';
@Injectable({
  providedIn: 'root',
})
class GasRetailerService extends __BaseService {
  static readonly findAllPath = '/gestionCommande/v1/commandesGasRetailer/all';
  static readonly savePath = '/gestionCommande/v1/commandesGasRetailer/create';
  static readonly deleteArticlePath = '/gestionCommande/v1/commandesGasRetailer/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deletePath = '/gestionCommande/v1/commandesGasRetailer/delete/{idCommandeGasRetailer}';
  static readonly findByCodePath = '/gestionCommande/v1/commandesGasRetailer/filter/{codeCommandeGasRetailer}';
  static readonly findAllLignesCommandesGasRetailerByCommandeGasRetailerIdPath = '/gestionCommande/v1/commandesGasRetailer/lignesCommande/{idCommande}';
  static readonly updateArticlePath = '/gestionCommande/v1/commandesGasRetailer/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateEtatCommandePath = '/gestionCommande/v1/commandesGasRetailer/update/etat/{idCommande}/{etatCommande}';
  static readonly updateGasRetailerPath = '/gestionCommande/v1/commandesGasRetailer/update/gasRetailer/{idCommande}/{idFournisseur}';
  static readonly updateQuantiteCommandePath = '/gestionCommande/v1/commandesGasRetailer/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdPath = '/gestionCommande/v1/commandesGasRetailer/{idCommandeGasRetailer}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeGasRetailerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeGasRetailerDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeGasRetailerDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeGasRetailerDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: CommandeGasRetailerDto): __Observable<__StrictHttpResponse<CommandeGasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeGasRetailerDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: CommandeGasRetailerDto): __Observable<CommandeGasRetailerDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CommandeGasRetailerDto)
    );
  }

  /**
   * @param params The `GasRetailerService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleResponse(params: GasRetailerService.DeleteArticleParams): __Observable<__StrictHttpResponse<CommandeGasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/delete/article/${params.idCommande}/${params.idLigneCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeGasRetailerDto>;
      })
    );
  }
  /**
   * @param params The `GasRetailerService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticle(params: GasRetailerService.DeleteArticleParams): __Observable<CommandeGasRetailerDto> {
    return this.deleteArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeGasRetailerDto)
    );
  }

  /**
   * @param idCommandeGasRetailer undefined
   */
  deleteResponse(idCommandeGasRetailer: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/delete/${idCommandeGasRetailer}`,
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
   * @param idCommandeGasRetailer undefined
   */
  delete(idCommandeGasRetailer: number): __Observable<null> {
    return this.deleteResponse(idCommandeGasRetailer).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codeCommandeGasRetailer undefined
   * @return successful operation
   */
  findByCodeResponse(codeCommandeGasRetailer: string): __Observable<__StrictHttpResponse<CommandeGasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/filter/${codeCommandeGasRetailer}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeGasRetailerDto>;
      })
    );
  }
  /**
   * @param codeCommandeGasRetailer undefined
   * @return successful operation
   */
  findByCode(codeCommandeGasRetailer: string): __Observable<CommandeGasRetailerDto> {
    return this.findByCodeResponse(codeCommandeGasRetailer).pipe(
      __map(_r => _r.body as CommandeGasRetailerDto)
    );
  }

  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesGasRetailerByCommandeGasRetailerIdResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeGasRetailerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/lignesCommande/${idCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeGasRetailerDto>>;
      })
    );
  }
  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesGasRetailerByCommandeGasRetailerId(idCommande: number): __Observable<Array<LigneCommandeGasRetailerDto>> {
    return this.findAllLignesCommandesGasRetailerByCommandeGasRetailerIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeGasRetailerDto>)
    );
  }

  /**
   * @param params The `GasRetailerService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticleResponse(params: GasRetailerService.UpdateArticleParams): __Observable<__StrictHttpResponse<CommandeGasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/update/article/${params.idCommande}/${params.idLigneCommande}/${params.idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeGasRetailerDto>;
      })
    );
  }
  /**
   * @param params The `GasRetailerService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticle(params: GasRetailerService.UpdateArticleParams): __Observable<CommandeGasRetailerDto> {
    return this.updateArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeGasRetailerDto)
    );
  }

  /**
   * @param params The `GasRetailerService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeResponse(params: GasRetailerService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<CommandeGasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/update/etat/${params.idCommande}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeGasRetailerDto>;
      })
    );
  }
  /**
   * @param params The `GasRetailerService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommande(params: GasRetailerService.UpdateEtatCommandeParams): __Observable<CommandeGasRetailerDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeGasRetailerDto)
    );
  }

  /**
   * @param params The `GasRetailerService.UpdateGasRetailerParams` containing the following parameters:
   *
   * - `idFournisseur`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateGasRetailerResponse(params: GasRetailerService.UpdateGasRetailerParams): __Observable<__StrictHttpResponse<CommandeGasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/update/gasRetailer/${params.idCommande}/${params.idGasRetailer}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeGasRetailerDto>;
      })
    );
  }
  /**
   * @param params The `GasRetailerService.UpdateGasRetailerParams` containing the following parameters:
   *
   * - `idGasRetailer`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateGasRetailer(params: GasRetailerService.UpdateGasRetailerParams): __Observable<CommandeGasRetailerDto> {
    return this.updateGasRetailerResponse(params).pipe(
      __map(_r => _r.body as CommandeGasRetailerDto)
    );
  }

  /**
   * @param params The `GasRetailerService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: GasRetailerService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeGasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeGasRetailerDto>;
      })
    );
  }
  /**
   * @param params The `GasRetailerService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: GasRetailerService.UpdateQuantiteCommandeParams): __Observable<CommandeGasRetailerDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeGasRetailerDto)
    );
  }

  /**
   * @param idCommandeGasRetailer undefined
   * @return successful operation
   */
  findByIdResponse(idCommandeGasRetailer: number): __Observable<__StrictHttpResponse<CommandeGasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesGasRetailer/${idCommandeGasRetailer}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeGasRetailerDto>;
      })
    );
  }
  /**
   * @param idCommandeGasRetailer undefined
   * @return successful operation
   */
  findById(idCommandeGasRetailer: number): __Observable<CommandeGasRetailerDto> {
    return this.findByIdResponse(idCommandeGasRetailer).pipe(
      __map(_r => _r.body as CommandeGasRetailerDto)
    );
  }
}

module GasRetailerService {

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
   * Parameters for updateEtatCommande
   */
  export interface UpdateEtatCommandeParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  }

  /**
   * Parameters for updateGasRetailer
   */
  export interface UpdateGasRetailerParams {
    idGasRetailer: number;
    idCommande: number;
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

export { GasRetailerService }
