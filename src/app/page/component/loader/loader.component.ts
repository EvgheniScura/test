import { Component, OnInit } from '@angular/core';
import { ServiceTableService } from '../../service/service-table.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(
    public serviceTableService : ServiceTableService,
  ) { }

  ngOnInit() {
  }

}
