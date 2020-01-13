
import React from 'react';

import styles from './Function.css';

let myAdd: (x: number, y: number) => number =
  function (x: number, y: number): number { return x + y; };

// 带默认初始化的参数都是可选的，带默认值的参数不需要放在必须参数的后面
function buildName(firstName: string, lastName: string = "Smith") {
  return firstName + " " + lastName;
}
let result1 = buildName("Bob");

// 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    // return function () {
    //   let pickedCard = Math.floor(Math.random() * 52);
    //   let pickedSuit = Math.floor(pickedCard / 13);
    //   // 顶级的非方法式调用会将this视为window，严格模式下为undefined
    //   return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    // }
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    }
  }
}
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// alert("card: " + pickedCard.card + " of " + pickedCard.suit);

let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
  }
  // Otherwise just let them pick the card
  else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
  }
}
// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page Function</h1>
    </div>
  );
}
