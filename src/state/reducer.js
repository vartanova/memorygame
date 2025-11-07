import {
  INIT_GAME,
  SHUFFLE_CARD,
  FLIP_DOWN_CARDS_PAIR,
  FLIP_UP_CARD,
  flipUpCard,
  flipDownCardsPair,
  markPairAsMatched,
} from "./Actions";

import shuffle from "shuffle-array";

const initialState = {
  turnNo: 1,
  pairsFound: 0,
  numClicksWithinTurn: 0,
  firstId: undefined,
  secondId: undefined,
  gameComplete: false,
  cards: generateCardSet(),
};

function memoryCards(state = [], action) {
  switch (action.type) {
    case SHUFFLE_CARD:
      let newCards = [...state];
      newCards = shuffle(newCards);
      return newCards;
    case FLIP_UP_CARD:
      return state.map((card) => {
        if (action.id === card.id) {
          return Object.assign({}, card, {});
        }
      });

    default:
      return state;
  }
}

export default memoryCards;
