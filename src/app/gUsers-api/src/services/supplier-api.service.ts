/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { SupplierDto } from '../models/supplier-dto';
@Injectable({
  providedIn: 'root',
})
class SupplierApiService extends __BaseService {
  static readonly findAllPath = '/gestionUtilisateurs/v1/suppliers/all';
  static readonly savePath = '/gestionUtilisateurs/v1/suppliers/create';
  static readonly deletePath = '/gestionUtilisateurs/v1/suppliers/delete/{idFournisseur}';
  static readonly findByIdPath = '/gestionUtilisateurs/v1/suppliers/{idFournisseur}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<SupplierDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/suppliers/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<SupplierDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<SupplierDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<SupplierDto>)
    );
  }

  /**
   * @param params The `SupplierApiService.SaveParams` containing the following parameters:
   *
   * - `supplierDTO`:
   *
   * - `imageFile`:
   *
   * @return successful operation
   */
  saveResponse(params: SupplierApiService.SaveParams): __Observable<__StrictHttpResponse<SupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.supplierDTO != null) { __formData.append('supplierDTO', params.supplierDTO as string | Blob);}
    if (params.imageFile != null) { __formData.append('imageFile', params.imageFile as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionUtilisateurs/v1/suppliers/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SupplierDto>;
      })
    );
  }
  /**
   * @param params The `SupplierApiService.SaveParams` containing the following parameters:
   *
   * - `supplierDTO`:
   *
   * - `imageFile`:
   *
   * @return successful operation
   */
  save(params: SupplierApiService.SaveParams): __Observable<SupplierDto> {
    return this.saveResponse(params).pipe(
      __map(_r => _r.body as SupplierDto)
    );
  }

  /**
   * @param idFournisseur undefined
   */
  deleteResponse(idFournisseur: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionUtilisateurs/v1/suppliers/delete/${idFournisseur}`,
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
   * @param idFournisseur undefined
   */
  delete(idFournisseur: number): __Observable<null> {
    return this.deleteResponse(idFournisseur).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idFournisseur undefined
   * @return successful operation
   */
  findByIdResponse(idFournisseur: number): __Observable<__StrictHttpResponse<SupplierDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/suppliers/${idFournisseur}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SupplierDto>;
      })
    );
  }
  /**
   * @param idFournisseur undefined
   * @return successful operation
   */
  findById(idFournisseur: number): __Observable<SupplierDto> {
    return this.findByIdResponse(idFournisseur).pipe(
      __map(_r => _r.body as SupplierDto)
    );
  }
}

module SupplierApiService {

  /**
   * Parameters for save
   */
  export interface SaveParams {
    supplierDTO: string;
    imageFile: Blob;
  }
}

export { SupplierApiService }
