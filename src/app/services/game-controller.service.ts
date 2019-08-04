import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Color } from '../enums/color.enum';
import { NumberCard } from '../models/number-card';
import { Subject } from 'rxjs';
import { tap, delay, filter, share, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameControllerService {
  public cards: Card[] = [];
  public currentCard: Card;
  public currentCard$: Subject<Card> = new Subject();
  public sendToPile$: Subject<Card> = new Subject();
  private aiPlay$: Subject<void> = new Subject();
  public aiCards$: Subject<Card[]> = new Subject();
  public winner$: Subject<string> = new Subject();

  public playerCards: Card[] = [];
  public aiCards: Card[] = [];
  // public canPlay = true;
  private turnCounter = 1;
  // public

  constructor() {
    this.init();

    this.currentCard$$.subscribe();
    this.aiPlay$.pipe(delay(1500)).subscribe(n => {
      this.aiPlay();
      this.aiCards$.next(this.aiCards);

      this.turnCounter++;
    });
  }

  get canPlay() {
    return this.turnCounter % 2 !== 0;
  }

  get currentCard$$() {
    return this.currentCard$.pipe(
      filter(card => card.canBePlayedOn(this.currentCard)),
      tap(card => {
        this.playerCards = this.playerCards.filter(c => c.id !== card.id);

        if (!this.playerCards.length) {
          // console.log('YOU WON');
          this.winner$.next('Player');
        }
        this.currentCard = card;
        this.turnCounter++;

        this.aiPlay$.next();
        this.sendToPile$.next(card);
      })
    );
  }

  aiPlay() {
    // const randomIndex = this.generateRandomIndex(this.aiCards.length);
    const cards = this.aiCards.filter(
      card => card.color === this.currentCard.color || (this.currentCard as NumberCard).num === (card as NumberCard).num
    );
    const card = cards[this.generateRandomIndex(cards.length)];

    if (card) {
      if (card.canBePlayedOn(this.currentCard)) {
        // console.log(this.aiCards);
        this.aiCards = this.aiCards.filter(c => c.id !== card.id);

        if (!this.aiCards.length) {
          this.winner$.next('AI');
        }

        this.sendToPile$.next(card);
      }
    } else {
      this.aiCards.push(this.cards.pop());
    }

    // if(t)
  }

  init() {
    // tslint:disable-next-line: forin
    for (const key in Color) {
      const color = Color[key] as Color;
      for (let i = 0; i < 10; i++) {
        if (i !== 0) {
          this.cards.push(new NumberCard(`${color}${i}*`, i, color));
        }
        this.cards.push(new NumberCard(`${color}${i}`, i, color));
      }
    }
    this.cards = this.cards.sort(() => Math.random() - 0.5);
    this.playerCards = this.generatePlayersHand();
    this.aiCards = this.generatePlayersHand();
  }

  generatePlayersHand() {
    const randomCards: Card[] = [];

    for (let i = 0; i < 7 && this.cards.length > 0; i++) {
      const randomIndex = this.generateRandomIndex(this.cards.length);

      randomCards.push(this.cards[randomIndex]);
      this.cards.splice(randomIndex, 1);
    }

    return randomCards;
  }

  private generateRandomIndex(l: number) {
    return Math.floor(Math.random() * l);
  }

  giveCard() {
    const card = this.cards.pop();
    this.playerCards.push(card);
    this.turnCounter++;
    this.aiPlay$.next();
  }
}
