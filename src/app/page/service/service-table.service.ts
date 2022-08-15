import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreAppConfigService } from 'src/app/core/services/core-app-config.service';
import { CoreDataService } from 'src/app/core/services/core-data.service';
// import { CoreDataService } from 'src/app/core/services/core-data.dervices'

@Injectable({
  providedIn: 'root'
})
export class ServiceTableService  extends CoreDataService{

    dataTable: any;
    startLoauder = false;
    stepNumber = [0,0,0,0,0,0,0,0];


    getData(): Observable<Array<any>> {
        const url = `${this.appConfig.getBaseApiUrl()}` // get users
        return this.apiService.get<any>(url)
    }

    validUsersDataByTable(data){
      let dataOnlyMale = [];
      data.forEach(e => {
        if(e.gender === "male"){
           dataOnlyMale.push(e)
        }
      })

      let dataSort = dataOnlyMale.sort(function (a, b) {
        if (a.dob.age > b.dob.age) {
          return 1;
        }
        if (a.dob.age < b.dob.age) {
          return -1;
        }
        return 0;
      });

      let numLength = dataSort.length - 10;
      dataSort.splice(0, numLength);
      this.dataTable = dataSort;
    }


    validUsersDataByChart(data){
      data.forEach(e => {
        if(e.gender === "male" && e.location.country === 'France'){
          if( 20 <= e.dob.age && e.dob.age <=29){
            this.stepNumber[0]++;
          }
          if( 30 <= e.dob.age && e.dob.age <=39){
            this.stepNumber[1]++;
          }
          if( 40 <= e.dob.age && e.dob.age <=49){
            this.stepNumber[2]++;
          }
          if( 50 <= e.dob.age && e.dob.age <=59){
            this.stepNumber[3]++;
          }
          if( 60 <= e.dob.age && e.dob.age <=69){
            this.stepNumber[4]++;
          }
          if( 70 <= e.dob.age && e.dob.age <=79){
            this.stepNumber[5]++;
          }
          if( 80 <= e.dob.age && e.dob.age <=89){
            this.stepNumber[6]++;
          }
          if( 90 <= e.dob.age && e.dob.age <= 99){
            this.stepNumber[7]++;
          }
        }

      });
    }
}
