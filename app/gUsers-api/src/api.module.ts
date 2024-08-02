// /* tslint:disable */
// import { NgModule, ModuleWithProviders } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

// import { CompaniesService } from './services/companies.service';
// import { DeliveryPersonApiService } from './services/delivery-person-api.service';
// import { GasRetailerApiService } from './services/gas-retailer-api.service';
// import { IndividualClientApiService } from './services/individual-client-api.service';
// import { SupplierApiService } from './services/supplier-api.service';
// import { UsersApiService } from './services/users-api.service';

// /**
//  * Provider for all Api services, plus ApiConfiguration
//  */
// @NgModule({
//   imports: [
//     HttpClientModule
//   ],
//   exports: [
//     HttpClientModule
//   ],
//   declarations: [],
//   providers: [
//     ApiConfiguration,
//     CompaniesService,
//     DeliveryPersonApiService,
//     GasRetailerApiService,
//     IndividualClientApiService,
//     SupplierApiService,
//     UsersApiService
//   ],
// })
// export class ApiModule {
//   static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
//     return {
//       ngModule: ApiModule,
//       providers: [
//         {
//           provide: ApiConfiguration,
//           useValue: {rootUrl: customParams.rootUrl}
//         }
//       ]
//     }
//   }
// }
