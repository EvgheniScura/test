import { Component, OnInit, Input } from '@angular/core';
import { ServiceTableService } from '../../service/service-table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(
    public serviceTableService : ServiceTableService,
  ) { }

  searchString: any;

  tableCols = [
    { header: 'Numer' },
    { header: 'Imie i nazwisko' },
    { header: 'Data urodzenia' },
    { header: 'Wiek' },
    { header: 'Email' },
    { header: 'Państwo' },
    { header: 'Kod pocztowy/Miasto' },
    { header: 'Adres' },
  ]

  ngOnInit() {
  }

}
