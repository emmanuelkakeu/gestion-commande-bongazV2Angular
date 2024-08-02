/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CommandeCommpaniesService } from './services/commande-commpanies.service';
import { GasRetailerService } from './services/gas-retailer.service';
import { CommandeSupplierService } from './services/commande-supplier.service';
import { ImagesService } from './services/images.service';
import { MvtstkService } from './services/mvtstk.service';
import { ArticleService } from './services/article.service';
import { VentesService } from './services/ventes.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CommandeCommpaniesService,
    GasRetailerService,
    CommandeSupplierService,
    ImagesService,
    MvtstkService,
    ArticleService,
    VentesService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders  <ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
