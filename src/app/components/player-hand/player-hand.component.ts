import { GameControllerService } from './../../services/game-controller.service';
import { Card } from './../../models/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {
  // cards: Card[] = [];

  constructor(private readonly gameController: GameControllerService) {}

  ngOnInit() {
    // this.cards = this.gameController.playerCards;
  }

  get cards() {
    return this.gameController.playerCards;
  }

  onClick(e: Card) {
    if (e.canBePlayedOn(this.gameController.currentCard) && this.gameController.canPlay) {
      // this.cards = this.cards.filter(card => card.id !== e.id);
      this.gameController.currentCard$.next(e);
    }

    if (this.cards.length === 1) {
      console.log('UNOO');
    }
  }
}
