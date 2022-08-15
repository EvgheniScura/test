import { Component } from '@angular/core';
import { ServiceTableService } from './page/service/service-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'appTest';

  constructor(
    public serviceTableService : ServiceTableService,

  ) { }



}
