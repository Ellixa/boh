import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-sam-like",
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  isLike = false;
  bgColor = 'red'; // parametri
  testo = ' NON MI PIACE ';

  clickedButton = () => { // creo un metodo
    this.isLike = ! this.isLike; // prende la variabile booleana e la inverte
// cambio il colore di background
    if (this.isLike === true) {
      this.bgColor = 'green';
    } else {
      this.bgColor = 'red';
    }
    console.log ('isLike', this.isLike, this.bgColor );
  }
  constructor() { }

  ngOnInit() {
  }

}
