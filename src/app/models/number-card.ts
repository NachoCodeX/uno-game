import { Card } from './card';
import { Color } from '../enums/color.enum';

export class NumberCard extends Card {
  constructor(public id: string, public num: number, color: Color) {
    super(id, color);

    this.path = `card_${color}${num}`;
  }
  canBePlayedOn(card: Card): boolean {
    return this.color === card.color || (card instanceof NumberCard && this.num === (card as NumberCard).num);
  }
}
