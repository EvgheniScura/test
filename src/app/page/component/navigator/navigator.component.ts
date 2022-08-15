import { Component, OnInit } from '@angular/core';
import { ServiceTableService } from '../../service/service-table.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(
    public serviceTableService: ServiceTableService,
  ) { }

  dataTable = [];

  ngOnInit(
  ) {
  }

  laudTable() {
    if (!this.serviceTableService.startLoauder) {
      this.serviceTableService.startLoauder = true
      this.serviceTableService.getData().subscribe((data: any) => {
        this.serviceTableService.validUsersDataByTable(data.results)
        this.serviceTableService.validUsersDataByChart(data.results);
        this.serviceTableService.startLoauder = false
      }, err => {
        console.log('error')
        this.serviceTableService.startLoauder = false
      })

      setTimeout(() => {
        console.log('zadziałał stoper')
        this.serviceTableService.startLoauder = false
      }, 10000);
    }
  }



}
