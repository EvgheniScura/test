import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contextbottom',
  templateUrl: './contextbottom.component.html',
  styleUrls: ['./contextbottom.component.css']
})
export class ContextbottomComponent implements OnInit {

  constructor() { }

  stylText = 'textBlockwhite';
  iteration: any;

  ngOnInit() {
    this.iteration = +sessionStorage.getItem('iteration')
    if(!this.iteration){
      sessionStorage.setItem('iteration', '0');
    } else {
      this.iteration++;
      sessionStorage.removeItem('iteration');
      sessionStorage.setItem('iteration', this.iteration);
    }
    if(this.iteration === 5){
      this.stylText = 'textBlock';
      sessionStorage.removeItem('iteration');
      sessionStorage.setItem('iteration', '0');
    }

  }

}
