import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ServiceTableService } from '../../service/service-table.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {



  canvas: any;
  ctx: any;
  @ViewChild('myChart', { static: true })
   myChart: ElementRef;


  constructor( public serviceTableService : ServiceTableService) {

   }

    ngAfterViewInit() {
      this.canvas = this.myChart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
        type: 'line',
        data: {
            datasets: [
            {
              label: 'Osób',
              data: this.serviceTableService.stepNumber,
              backgroundColor: "#47a0e8",
              borderColor: "#007ee7",
              fill: true,
          }],
            labels: ['20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-99']
        },
    });
    }






  ngOnInit() {
  }




}
