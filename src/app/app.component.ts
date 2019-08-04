import { Component, OnInit } from '@angular/core';
import { GameControllerService } from './services/game-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uno-game';

  ngOnInit() {
    // this.gameController.init();
    // this.gameController.playerCards = this.gameController.generatePlayersHand();
  }
}
