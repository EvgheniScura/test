import { Injectable, Injector } from '@angular/core';
import { CoreApiService } from './core-api-service';
import { CoreAppConfigService } from './core-app-config.service';

@Injectable()
export class CoreDataService {

  protected apiService: CoreApiService;
  protected appConfig: CoreAppConfigService;


  constructor(
    protected injector: Injector
  ) {
    this.apiService = this.injector.get(CoreApiService);
    this.appConfig = this.injector.get(CoreAppConfigService);
  }
}
