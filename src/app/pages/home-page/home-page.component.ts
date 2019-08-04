import { GameControllerService } from './../../services/game-controller.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isWon = false;

  constructor(private readonly gameController: GameControllerService) {}

  ngOnInit() {
    this.gameController.winner$.subscribe(winner => {
      console.log(`${winner}`);
      this.isWon = true;
    });
  }
}
