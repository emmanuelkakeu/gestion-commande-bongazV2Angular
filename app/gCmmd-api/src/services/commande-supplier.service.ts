/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeSupplierDto } from '../models/commande-supplier-dto';
import { LigneCommandeSupplierDto } from '../models/ligne-commande-supplier-dto';
@Injectable({
  providedIn: 'root',
})
class CommandeSupplierService extends __BaseService {
  static readonly findAllPath = '/gestionCommande/v1/commandesfournisseurs/all';
  static readonly savePath = '/gestionCommande/v1/commandesfournisseurs/create';
  static readonly deleteArticlePath = '/gestionCommande/v1/commandesfournisseurs/delete/article/{idCommande}/{idLigneCommande}';
  static readonly deletePath = '/gestionCommande/v1/commandesfournisseurs/delete/{idCommandeFournisseur}';
  static readonly findByCodePath = '/gestionCommande/v1/commandesfournisseurs/filter/{codeCommandeFournisseur}';
  static readonly findAllLignesCommandesSupplierByCommandeSupplierIdPath = '/gestionCommande/v1/commandesfournisseurs/lignesCommande/{idCommande}';
  static readonly updateArticlePath = '/gestionCommande/v1/commandesfournisseurs/update/article/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateEtatCommandePath = '/gestionCommande/v1/commandesfournisseurs/update/etat/{idCommande}/{etatCommande}';
  static readonly updateSupplierPath = '/gestionCommande/v1/commandesfournisseurs/update/fournisseur/{idCommande}/{idFournisseur}';
  static readonly updateQuantiteCommandePath = '/gestionCommande/v1/commandesfournisseurs/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdPath = '/gestionCommande/v1/commandesfournisseurs/{idCommandeFournisseur}';

  idCommandeFournisseur = '';
  codeCommandeFournisseur = '';
  

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeSupplierDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommandeSupplierDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeSupplierDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeSupplierDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: CommandeSupplierDto): __Observable<__StrictHttpResponse<CommandeSupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeSupplierDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: CommandeSupplierDto): __Observable<CommandeSupplierDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as CommandeSupplierDto)
    );
  }

  /**
   * @param params The `CommandeSupplierService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleResponse(params: CommandeSupplierService.DeleteArticleParams): __Observable<__StrictHttpResponse<CommandeSupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/delete/article/${params.idCommande}/${params.idLigneCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeSupplierDto>;
      })
    );
  }
  /**
   * @param params The `CommandeSupplierService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticle(params: CommandeSupplierService.DeleteArticleParams): __Observable<CommandeSupplierDto> {
    return this.deleteArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeSupplierDto)
    );
  }

  /**
   * @param idCommandeSupplier undefined
   */
  deleteResponse(idCommandeSupplier: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/delete/${this.idCommandeFournisseur}`,
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
   * @param idCommandeSupplier undefined
   */
  delete(idCommandeSupplier: number): __Observable<null> {
    return this.deleteResponse(idCommandeSupplier).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codeCommandeSupplier undefined
   * @return successful operation
   */
  findByCodeResponse(codeCommandeSupplier: string): __Observable<__StrictHttpResponse<CommandeSupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/filter/${this.codeCommandeFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeSupplierDto>;
      })
    );
  }
  /**
   * @param codeCommandeSupplier undefined
   * @return successful operation
   */
  findByCode(codeCommandeSupplier: string): __Observable<CommandeSupplierDto> {
    return this.findByCodeResponse(codeCommandeSupplier).pipe(
      __map(_r => _r.body as CommandeSupplierDto)
    );
  }

  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesSupplierByCommandeSupplierIdResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneCommandeSupplierDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/lignesCommande/${idCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeSupplierDto>>;
      })
    );
  }
  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesSupplierByCommandeSupplierId(idCommande: number): __Observable<Array<LigneCommandeSupplierDto>> {
    return this.findAllLignesCommandesSupplierByCommandeSupplierIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneCommandeSupplierDto>)
    );
  }

  /**
   * @param params The `CommandeSupplierService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticleResponse(params: CommandeSupplierService.UpdateArticleParams): __Observable<__StrictHttpResponse<CommandeSupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/update/article/${params.idCommande}/${params.idLigneCommande}/${params.idArticle}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeSupplierDto>;
      })
    );
  }
  /**
   * @param params The `CommandeSupplierService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return successful operation
   */
  updateArticle(params: CommandeSupplierService.UpdateArticleParams): __Observable<CommandeSupplierDto> {
    return this.updateArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeSupplierDto)
    );
  }

  /**
   * @param params The `CommandeSupplierService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeResponse(params: CommandeSupplierService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<CommandeSupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/update/etat/${params.idCommande}/${params.etatCommande}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeSupplierDto>;
      })
    );
  }
  /**
   * @param params The `CommandeSupplierService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommande(params: CommandeSupplierService.UpdateEtatCommandeParams): __Observable<CommandeSupplierDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeSupplierDto)
    );
  }

  /**
   * @param params The `CommandeSupplierService.UpdateSupplierParams` containing the following parameters:
   *
   * - `idFournisseur`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateSupplierResponse(params: CommandeSupplierService.UpdateSupplierParams): __Observable<__StrictHttpResponse<CommandeSupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/update/fournisseur/${params.idCommande}/${params.idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeSupplierDto>;
      })
    );
  }
  /**
   * @param params The `CommandeSupplierService.UpdateSupplierParams` containing the following parameters:
   *
   * - `idFournisseur`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateSupplier(params: CommandeSupplierService.UpdateSupplierParams): __Observable<CommandeSupplierDto> {
    return this.updateSupplierResponse(params).pipe(
      __map(_r => _r.body as CommandeSupplierDto)
    );
  }

  /**
   * @param params The `CommandeSupplierService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: CommandeSupplierService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<CommandeSupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/update/quantite/${params.idCommande}/${params.idLigneCommande}/${params.quantite}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeSupplierDto>;
      })
    );
  }
  /**
   * @param params The `CommandeSupplierService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: CommandeSupplierService.UpdateQuantiteCommandeParams): __Observable<CommandeSupplierDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as CommandeSupplierDto)
    );
  }

  /**
   * @param idCommandeSupplier undefined
   * @return successful operation
   */
  findByIdResponse(idCommandeSupplier: number): __Observable<__StrictHttpResponse<CommandeSupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/commandesfournisseurs/${this.idCommandeFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeSupplierDto>;
      })
    );
  }
  /**
   * @param idCommandeSupplier undefined
   * @return successful operation
   */
  findById(idCommandeSupplier: number): __Observable<CommandeSupplierDto> {
    return this.findByIdResponse(idCommandeSupplier).pipe(
      __map(_r => _r.body as CommandeSupplierDto)
    );
  }
}

module CommandeSupplierService {

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
   * Parameters for updateSupplier
   */
  export interface UpdateSupplierParams {
    idFournisseur: number;
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

export { CommandeSupplierService }
