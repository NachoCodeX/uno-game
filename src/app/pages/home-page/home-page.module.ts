import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UnoHeaderModule } from './../../components/uno-header/uno-header.module';
import { PileCardsModule } from './../../components/pile-cards/pile-cards.module';
import { GameControllerService } from './../../services/game-controller.service';
import { PlayerHandModule } from './../../components/player-hand/player-hand.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PlayerHandModule,
    PileCardsModule,
    UnoHeaderModule,
    FontAwesomeModule
  ],
  providers: [GameControllerService]
})
export class HomePageModule {}
