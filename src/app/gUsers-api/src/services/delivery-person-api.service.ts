/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DeliveryPersonDto } from '../models/delivery-person-dto';
@Injectable({
  providedIn: 'root',
})
class DeliveryPersonApiService extends __BaseService {
  static readonly findAllPath = '/gestionUtilisateurs/v1/deliveryPersonne/all';
  static readonly savePath = '/gestionUtilisateurs/v1/deliveryPersonne/create';
  static readonly deletePath = '/gestionUtilisateurs/v1/deliveryPersonne/delete/{idDeliveryPersonDto}';
  static readonly findByIdPath = '/gestionUtilisateurs/v1/deliveryPersonne/{idClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<DeliveryPersonDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/deliveryPersonne/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DeliveryPersonDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<DeliveryPersonDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<DeliveryPersonDto>)
    );
  }

  /**
   * @param params The `DeliveryPersonApiService.SaveParams` containing the following parameters:
   *
   * - `imageFile`:
   *
   * - `DeliveryPersonDto`:
   *
   * @return successful operation
   */
  saveResponse(params: DeliveryPersonApiService.SaveParams): __Observable<__StrictHttpResponse<DeliveryPersonDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.imageFile != null) { __formData.append('imageFile', params.imageFile as string | Blob);}
    if (params.DeliveryPersonDto != null) { __formData.append('DeliveryPersonDto', params.DeliveryPersonDto as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionUtilisateurs/v1/deliveryPersonne/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeliveryPersonDto>;
      })
    );
  }
  /**
   * @param params The `DeliveryPersonApiService.SaveParams` containing the following parameters:
   *
   * - `imageFile`:
   *
   * - `DeliveryPersonDto`:
   *
   * @return successful operation
   */
  save(params: DeliveryPersonApiService.SaveParams): __Observable<DeliveryPersonDto> {
    return this.saveResponse(params).pipe(
      __map(_r => _r.body as DeliveryPersonDto)
    );
  }

  /**
   * @param idDeliveryPersonDto undefined
   */
  deleteResponse(idDeliveryPersonDto: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionUtilisateurs/v1/deliveryPersonne/delete/${idDeliveryPersonDto}`,
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
   * @param idDeliveryPersonDto undefined
   */
  delete(idDeliveryPersonDto: number): __Observable<null> {
    return this.deleteResponse(idDeliveryPersonDto).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idClient undefined
   * @return successful operation
   */
  findByIdResponse(idClient: number): __Observable<__StrictHttpResponse<DeliveryPersonDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/deliveryPersonne/${idClient}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeliveryPersonDto>;
      })
    );
  }
  /**
   * @param idClient undefined
   * @return successful operation
   */
  findById(idClient: number): __Observable<DeliveryPersonDto> {
    return this.findByIdResponse(idClient).pipe(
      __map(_r => _r.body as DeliveryPersonDto)
    );
  }
}

module DeliveryPersonApiService {

  /**
   * Parameters for save
   */
  export interface SaveParams {
    imageFile: Blob;
    DeliveryPersonDto: string;
  }
}

export { DeliveryPersonApiService }
