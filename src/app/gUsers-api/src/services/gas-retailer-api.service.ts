/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GasRetailerDto } from '../models/gas-retailer-dto';
@Injectable({
  providedIn: 'root',
})
class GasRetailerApiService extends __BaseService {
  static readonly findAllPath = '/gestionUtilisateurs/v1/gasRetailer/all';
  static readonly savePath = '/gestionUtilisateurs/v1/gasRetailer/create';
  static readonly deletePath = '/gestionUtilisateurs/v1/gasRetailer/delete/{idGasRetailer}';
  static readonly findByIdPath = '/gestionUtilisateurs/v1/gasRetailer/{idGasRetailer}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<GasRetailerDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/gasRetailer/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GasRetailerDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<GasRetailerDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<GasRetailerDto>)
    );
  }

  /**
   * @param params The `GasRetailerApiService.SaveParams` containing the following parameters:
   *
   * - `imageFile`:
   *
   * - `GasRetailerDto`:
   *
   * @return successful operation
   */
  saveResponse(params: GasRetailerApiService.SaveParams): __Observable<__StrictHttpResponse<GasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.imageFile != null) { __formData.append('imageFile', params.imageFile as string | Blob);}
    if (params.GasRetailerDto != null) { __formData.append('GasRetailerDto', params.GasRetailerDto as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionUtilisateurs/v1/gasRetailer/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GasRetailerDto>;
      })
    );
  }
  /**
   * @param params The `GasRetailerApiService.SaveParams` containing the following parameters:
   *
   * - `imageFile`:
   *
   * - `GasRetailerDto`:
   *
   * @return successful operation
   */
  save(params: GasRetailerApiService.SaveParams): __Observable<GasRetailerDto> {
    return this.saveResponse(params).pipe(
      __map(_r => _r.body as GasRetailerDto)
    );
  }

  /**
   * @param idGasRetailer undefined
   */
  deleteResponse(idGasRetailer: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionUtilisateurs/v1/gasRetailer/delete/${idGasRetailer}`,
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
   * @param idGasRetailer undefined
   */
  delete(idGasRetailer: number): __Observable<null> {
    return this.deleteResponse(idGasRetailer).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idGasRetailer undefined
   * @return successful operation
   */
  findByIdResponse(idGasRetailer: number): __Observable<__StrictHttpResponse<GasRetailerDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/gasRetailer/${idGasRetailer}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GasRetailerDto>;
      })
    );
  }
  /**
   * @param idGasRetailer undefined
   * @return successful operation
   */
  findById(idGasRetailer: number): __Observable<GasRetailerDto> {
    return this.findByIdResponse(idGasRetailer).pipe(
      __map(_r => _r.body as GasRetailerDto)
    );
  }
}

module GasRetailerApiService {

  /**
   * Parameters for save
   */
  export interface SaveParams {
    imageFile: Blob;
    GasRetailerDto: string;
  }
}

export { GasRetailerApiService }
