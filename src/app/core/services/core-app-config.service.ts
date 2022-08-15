import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CoreAppConfigService {
  private config: Object = null;

  constructor(private http: HttpClient) {}

  public getConfigValue(key: string): string {
      return this.config[key];
  }

  public getBaseApiUrl(): string {
      return this.getConfigValue('BASE_API_URL');
  }

  public emulateCashDesk(): boolean {
      const emulationEnabled = this.getConfigValue('EMULATE_CASH_DESK');

      if (typeof emulationEnabled === 'boolean') {
          return emulationEnabled;
      } else {
          return false;
      }
  }

  public getStatusOfConnectedCashRegister(): boolean {
      return this.emulateCashDesk();
  }

  public loadConfig(): Promise<any> {
      return new Promise((resolve, reject) => {
          this.http
              .get('config.json')
              .pipe(
                  catchError((error: any): any => {
                      reject(true);
                      return Observable.throw(error || 'Server error');
                  })
              )
              .subscribe(
                  (configResponse) => {
                      this.config = configResponse;
                      resolve(configResponse);
                  },
                  (error) => {
                      console.error('Fail to get config.json!', error);
                      reject(true);
                  }
              );
      });
  }

}
