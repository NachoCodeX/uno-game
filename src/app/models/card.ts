import { Color } from '../enums/color.enum';
import { NumberCard } from './number-card';

export abstract class Card {
  public color: Color;
  public id: string;
  public path: string;

  constructor(id: string, color: Color) {
    this.color = color;
    this.id = id;
  }

  abstract canBePlayedOn(card: Card): boolean;
}
