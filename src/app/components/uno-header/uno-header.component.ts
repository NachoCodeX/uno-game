import { GameControllerService } from './../../services/game-controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uno-header',
  templateUrl: './uno-header.component.html',
  styleUrls: ['./uno-header.component.scss']
})
export class UnoHeaderComponent implements OnInit {
  constructor(private readonly gameController: GameControllerService) {
    this.gameController.aiCards$.subscribe(cards => {
      console.log(cards);
    });
  }

  ngOnInit() {}

  get aiCardsCounter() {
    return Array(this.gameController.aiCards.length);
  }
}
