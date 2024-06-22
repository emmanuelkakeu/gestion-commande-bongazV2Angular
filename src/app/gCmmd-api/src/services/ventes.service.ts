/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { VentesDto } from '../models/ventes-dto';
@Injectable({
  providedIn: 'root',
})
class VentesService extends __BaseService {
  static readonly findByCodePath = '/gestionCommande/v1/ventes/code/{codeVente}';
  static readonly savePath = '/gestionCommande/v1/ventes/create';
  static readonly deletePath = '/gestionCommande/v1/ventes/delete/{idVente}';
  static readonly findByIdPath = '/gestionCommande/v1/ventes/{idVente}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param codeVente undefined
   * @return successful operation
   */
  findByCodeResponse(codeVente: string): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/ventes/code/${codeVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param codeVente undefined
   * @return successful operation
   */
  findByCode(codeVente: string): __Observable<VentesDto> {
    return this.findByCodeResponse(codeVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: VentesDto): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionCommande/v1/ventes/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: VentesDto): __Observable<VentesDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }

  /**
   * @param idVente undefined
   */
  deleteResponse(idVente: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionCommande/v1/ventes/delete/${idVente}`,
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
   * @param idVente undefined
   */
  delete(idVente: number): __Observable<null> {
    return this.deleteResponse(idVente).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idVente undefined
   * @return successful operation
   */
  findByIdResponse(idVente: number): __Observable<__StrictHttpResponse<VentesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/ventes/${idVente}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VentesDto>;
      })
    );
  }
  /**
   * @param idVente undefined
   * @return successful operation
   */
  findById(idVente: number): __Observable<VentesDto> {
    return this.findByIdResponse(idVente).pipe(
      __map(_r => _r.body as VentesDto)
    );
  }
}

module VentesService {
}

export { VentesService }
