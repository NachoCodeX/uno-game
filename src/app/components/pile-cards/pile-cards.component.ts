import { Card } from './../../models/card';
import { GameControllerService } from './../../services/game-controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pile-cards',
  templateUrl: './pile-cards.component.html',
  styleUrls: ['./pile-cards.component.scss']
})
export class PileCardsComponent implements OnInit {
  currentCard: Card;

  constructor(private readonly gameController: GameControllerService) {}

  ngOnInit() {
    this.currentCard = this.gameController.cards.pop();
    this.gameController.currentCard = this.currentCard;

    this.gameController.sendToPile$.subscribe(card => {
      this.currentCard = card;
      this.gameController.currentCard = card;
    });
  }
  get cards() {
    return this.gameController.cards.length;
  }

  get canPlay() {
    return this.gameController.canPlay;
  }

  onClick() {
    this.gameController.giveCard();
  }
}
