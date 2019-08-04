import { GameControllerService } from './../../services/game-controller.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PileCardsComponent } from './pile-cards.component';

@NgModule({
  declarations: [PileCardsComponent],
  imports: [CommonModule],
  exports: [PileCardsComponent],
  providers: [GameControllerService]
})
export class PileCardsModule {}
