/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CompaniesDto } from '../models/companies-dto';
@Injectable({
  providedIn: 'root',
})
class CompaniesService extends __BaseService {
  static readonly findAllPath = '/gestionUtilisateurs/v1/companies/all';
  static readonly savePath = '/gestionUtilisateurs/v1/companies/create';
  static readonly deletePath = '/gestionUtilisateurs/v1/companies/delete/{idCompanies}';
  static readonly findByIdPath = '/gestionUtilisateurs/v1/companies/{idCompanies}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CompaniesDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/companies/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CompaniesDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<CompaniesDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CompaniesDto>)
    );
  }

  /**
   * @param params The `CompaniesService.SaveParams` containing the following parameters:
   *
   * - `imageFile`:
   *
   * - `companiesDto`:
   *
   * @return successful operation
   */
  saveResponse(params: CompaniesService.SaveParams): __Observable<__StrictHttpResponse<CompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.imageFile != null) { __formData.append('imageFile', params.imageFile as string | Blob);}
    if (params.companiesDto != null) { __formData.append('companiesDto', params.companiesDto as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestionUtilisateurs/v1/companies/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompaniesDto>;
      })
    );
  }
  /**
   * @param params The `CompaniesService.SaveParams` containing the following parameters:
   *
   * - `imageFile`:
   *
   * - `companiesDto`:
   *
   * @return successful operation
   */
  save(params: CompaniesService.SaveParams): __Observable<CompaniesDto> {
    return this.saveResponse(params).pipe(
      __map(_r => _r.body as CompaniesDto)
    );
  }

  /**
   * @param idCompanies undefined
   */
  deleteResponse(idCompanies: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestionUtilisateurs/v1/companies/delete/${idCompanies}`,
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
   * @param idCompanies undefined
   */
  delete(idCompanies: number): __Observable<null> {
    return this.deleteResponse(idCompanies).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idCompanies undefined
   * @return successful operation
   */
  findByIdResponse(idCompanies: number): __Observable<__StrictHttpResponse<CompaniesDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionUtilisateurs/v1/companies/${idCompanies}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompaniesDto>;
      })
    );
  }
  /**
   * @param idCompanies undefined
   * @return successful operation
   */
  findById(idCompanies: number): __Observable<CompaniesDto> {
    return this.findByIdResponse(idCompanies).pipe(
      __map(_r => _r.body as CompaniesDto)
    );
  }
}

module CompaniesService {

  /**
   * Parameters for save
   */
  export interface SaveParams {
    imageFile: Blob;
    companiesDto: string;
  }
}

export { CompaniesService }
