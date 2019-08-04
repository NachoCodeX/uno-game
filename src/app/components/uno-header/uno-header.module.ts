import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoHeaderComponent } from './uno-header.component';

@NgModule({
  declarations: [UnoHeaderComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [UnoHeaderComponent]
})
export class UnoHeaderModule {}
