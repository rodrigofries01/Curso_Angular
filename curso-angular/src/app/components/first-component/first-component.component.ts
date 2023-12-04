import { Component, OnInit } from '@angular/core';
import * as internal from 'stream';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name:string = 'Rodrigo';
  age: number = 23;
  job: string = 'Developer';
  hobbie = ['jogar', 'correr', 'estudar'];
  car = {
    name: 'Fusion',
    year: 2010
  }

  constructor() {}

  ngOnInit(): void {
  }

}
