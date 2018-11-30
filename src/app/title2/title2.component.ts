import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title2',
  templateUrl: './title2.component.html',
  styleUrls: ['./title2.component.scss']
})
export class Title2Component implements OnInit {
  title = 'CIAONE';
  nome = 'pippo';
  counter = 0;
  isOff = false;
  textColor = 'blue';
  size = '100px';
greet = () => {
  return 'ciao ' + this.nome;
}
increment = () => {
  this.counter++;
  // this.counter*=1;
  // this.counter = this.counter *1;
  this.isOff = !this.isOff;
  console.log(this.counter);
}

  constructor() { }

  ngOnInit() {
  console.log('ON INIT');
  setInterval(this.increment, 1000);
}
}

