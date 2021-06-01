import { Component, OnInit } from '@angular/core';

class Card {
  id: number

}

@Component({
  selector: 'app-testing7',
  templateUrl: './testing7.component.html',
  styleUrls: ['./testing7.component.scss']
})
export class Testing7Component implements OnInit {

  cards: Card[] = [];
  selected: Card;

  constructor() { }

  ngOnInit(): void {
    this.createDeckOfCards();
  }

  createDeckOfCards() {

    for (let i = 0; i < 53; i++) {
      const newCard:Card = {
        id: i,
      }
      this.cards.push(newCard);
    }

  }

  calcPosition(index: number) {
    return { transform: 'rotate(' + (360 / 52) * index + 'deg)' };
  }

  cardSelected(card) {
    this.selected = card;

    this.cards = this.cards.filter(x => x.id != card.id);
  }


}
