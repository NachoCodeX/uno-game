import { GameControllerService } from './../../services/game-controller.service';
import { UnoCardModule } from './../uno-card/uno-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerHandComponent } from './player-hand.component';

@NgModule({
  declarations: [PlayerHandComponent],
  imports: [CommonModule, UnoCardModule],
  exports: [PlayerHandComponent],
  providers: [GameControllerService]
})
export class PlayerHandModule {}
