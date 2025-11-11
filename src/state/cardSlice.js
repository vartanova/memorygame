import { createSlice } from "@reduxjs/toolkit";
import { generateCardSet } from "./cardFunctions";
import shuffleArray from "shuffle-array";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    turnNumber: 1,
    // отслеживаем клики внутри хода. Если 0 - никакая из двух карт не открыта, 1 - открыта одна, 2- открыты обе
    numberClicksInTurn: 0,
    // записываем id карт на которые кликаем
    firstId: undefined,
    secondId: undefined,
    // считаем сколько пар найдено. Когда pairsFound === NUM_IMAGES, то игра закончена
    pairsFound: 0,
    gameComplete: false,
    cards: generateCardSet(),
  },
  reducers: {
    shuffleCard(state, action) {
      state.cards = shuffleArray([...state.cards]);
    },

    flipUpCard(state, action) {
      const id = action.payload;
      if (numberClicksInTurn === 0) {
        state.firstId = id;
      }
      if (numberClicksInTurn === 1) {
        state.secondId = id;
      }
      if (numberClicksInTurn === 2) {
        cardSlice.caseReducers.checkMatchedPair(state);
        cardSlice.caseReducers.flipUpCard(state, { payload: id });
        return;
      }

      state.numberClicksInTurn += 1;

      const card = getCard(id, state.cards);
      if (card.imageUp || card.matched) return;

      const cardToFlip = state.cards.find((c) => c.id === id);
      if (cardToFlip) cardToFlip.imageUp = true;
    },

    markPairAsMatched(state, action) {
      const { id1, id2 } = action.payload;

      state.cards.map((c) => {
        if (c.id === id1 || c.id === id2) {
          return { ...c, matched: true };
        }
        return c;
      });
    },
    flipDown(state, action) {
      const { id1, id2 } = action.payload;

      state.cards.map((c) => {
        if (c.id === id1 || c.id === id2) {
          return { ...c, imageUp: false };
        }
        return c;
      });
    },
    // основная логика игры:
    checkMatchedPair(state, action) {},
    initGame(state, action) {},
  },
});

export const {
  shuffleCard,
  flipUpCard,
  markPairAsMatched,
  flipDown,
  checkMatchedPair,
  initGame,
} = cardSlice.actions;

export default cardSlice.reducer;
