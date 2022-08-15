import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contextbottom',
  templateUrl: './contextbottom.component.html',
  styleUrls: ['./contextbottom.component.css']
})
export class ContextbottomComponent implements OnInit {

  constructor() { }

  stylText = 'textBlockwhite';
  iteration = 0;

  ngOnInit() {
    this.iteration = +sessionStorage.getItem('iteration')
    if(!this.iteration){
      sessionStorage.setItem('iteration', '1');
    } else {
      this.iteration++;
      sessionStorage.removeItem('iteration');
      sessionStorage.setItem('iteration', this.iteration.toString());
    }
    if(this.iteration === 6){
      this.stylText = 'textBlock';
      sessionStorage.removeItem('iteration');
      sessionStorage.setItem('iteration', '1');
    }

  }

}
