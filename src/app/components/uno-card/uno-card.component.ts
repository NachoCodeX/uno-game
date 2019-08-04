import { Card } from './../../models/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uno-card',
  templateUrl: './uno-card.component.html',
  styleUrls: ['./uno-card.component.scss']
})
export class UnoCardComponent implements OnInit {
  @Input()
  card: Card;

  constructor() {}

  ngOnInit() {}
}
