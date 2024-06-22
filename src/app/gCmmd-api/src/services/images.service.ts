/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Resource } from '../models/resource';
@Injectable({
  providedIn: 'root',
})
class ImagesService extends __BaseService {
  static readonly getImagePath = '/gestionCommande/v1/image/vue/{imageName}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param imageName undefined
   * @return successful operation
   */
  getImageResponse(imageName: string): __Observable<__StrictHttpResponse<Resource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestionCommande/v1/image/vue/${imageName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Resource>;
      })
    );
  }
  /**
   * @param imageName undefined
   * @return successful operation
   */
  getImage(imageName: string): __Observable<Resource> {
    return this.getImageResponse(imageName).pipe(
      __map(_r => _r.body as Resource)
    );
  }
}

module ImagesService {
}

export { ImagesService }
