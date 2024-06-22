/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IndividualClientDto } from '../models/individual-client-dto';
@Injectable({
  providedIn: 'root',
})
class IndividualClientApiService extends __BaseService {
  static readonly findAllPath = '/gestionUtilisateurs/v1/individualClient/all';
  static readonly savePath = '/gestionUtilisateurs/v1/individualClient/create';
  static readonly deletePath = '/gestionUtilisateurs/v1/individualClient/delete/{idIndividualClient}';
  static readonly findByIdPath = '/gestionUtilisateurs/v1/individualClient/{idClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<IndividualClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/individualClient/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<IndividualClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<IndividualClientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<IndividualClientDto>)
    );
  }

  /**
   * @param params The `IndividualClientApiService.SaveParams` containing the following parameters:
   *
   * - `individualClientDto`:
   *
   * - `imageFile`:
   *
   * @return successful operation
   */
  saveResponse(params: IndividualClientApiService.SaveParams): __Observable<__StrictHttpResponse<IndividualClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.individualClientDto != null) { __formData.append('individualClientDto', params.individualClientDto as string | Blob);}
    if (params.imageFile != null) { __formData.append('imageFile', params.imageFile as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionUtilisateurs/v1/individualClient/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IndividualClientDto>;
      })
    );
  }
  /**
   * @param params The `IndividualClientApiService.SaveParams` containing the following parameters:
   *
   * - `individualClientDto`:
   *
   * - `imageFile`:
   *
   * @return successful operation
   */
  save(params: IndividualClientApiService.SaveParams): __Observable<IndividualClientDto> {
    return this.saveResponse(params).pipe(
      __map(_r => _r.body as IndividualClientDto)
    );
  }

  /**
   * @param idIndividualClient undefined
   */
  deleteResponse(idIndividualClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionUtilisateurs/v1/individualClient/delete/${idIndividualClient}`,
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
   * @param idIndividualClient undefined
   */
  delete(idIndividualClient: number): __Observable<null> {
    return this.deleteResponse(idIndividualClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idClient undefined
   * @return successful operation
   */
  findByIdResponse(idClient: number): __Observable<__StrictHttpResponse<IndividualClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/individualClient/${idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IndividualClientDto>;
      })
    );
  }
  /**
   * @param idClient undefined
   * @return successful operation
   */
  findById(idClient: number): __Observable<IndividualClientDto> {
    return this.findByIdResponse(idClient).pipe(
      __map(_r => _r.body as IndividualClientDto)
    );
  }
}

module IndividualClientApiService {

  /**
   * Parameters for save
   */
  export interface SaveParams {
    individualClientDto: string;
    imageFile: Blob;
  }
}

export { IndividualClientApiService }
