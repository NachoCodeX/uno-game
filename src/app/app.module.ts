import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { GameControllerService } from './services/game-controller.service';
import { UnoHeaderModule } from './components/uno-header/uno-header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, UnoHeaderModule],
  providers: [GameControllerService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faBrain, faTrophy);
  }
}
