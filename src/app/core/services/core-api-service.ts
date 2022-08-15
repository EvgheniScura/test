import { Injectable, OnDestroy } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, share, map } from 'rxjs/operators';
import { Router } from '@angular/router';





@Injectable()
export class CoreApiService implements OnDestroy {

    private httpOptions = this.getStardardHttpOption();
    status: boolean;
    massege: string;

    constructor(
        private httpClient: HttpClient,
        private router: Router,
    ) { }


    get<T>(url: string, datas?: string[], displayError: boolean = true): Observable<T> {
        if (typeof datas !== 'undefined') {
            for (let data of datas) {
                url += `${data}/`;
            }
        }

        // this.logger.debug("Wykonano zapytanie GET pod adres: " + url);
        return this.httpClient.get<T>(url, this.httpOptions).pipe(
            catchError((error: HttpErrorResponse) => {
                if(displayError)
                    this.handleError(error);
                    if(this.status){
                        // this.stopLoading()
                    }

                return Observable.throw(error.error);
            }),
            map((res: any) => {
                return res;
            }),
            share()
        );
    }

    // Obsługa błędu  z wyswietleniem komunikatu
    private handleError(error: HttpErrorResponse) {
        if (typeof error.message !== 'undefined') {
            let message = error.message;
            // Komunikaty bledu z API (409)
            if (error.status == 409) {
                message = error.error.message;
            } else if (error.status == 500) {
                message =
                    'Błąd podczas komunikacji z serwerem. Prosimy o kontakt z administratorem!';
            } else if (error.status === 401) {
                message = 'Zaloguj sie by kontynuować';
                this.router.navigate(['/login']);
                // let link = this.baseHref + 'admin/login';
                // this.router.navigate([]).then(result => {  window.location.href = link});
            }
            // .showError(message, 3000);
        }
    }

    private getStardardHttpOption() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            // withCredentials: true,
            params: {},
        };
    }

    ngOnDestroy(): void {
        this.httpOptions = this.getStardardHttpOption();

    }



}
