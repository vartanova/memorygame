import { createSlice } from "@reduxjs/toolkit";
import {
  cardsHaveIdenticalImages,
  generateCardSet,
  getCard,
  NUM_IMAGES,
} from "./cardFunctions";
import shuffle from "shuffle-array";

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
    cards: shuffle([...generateCardSet()]),
    history: [],
    playerName: "",
  },
  reducers: {
    setPlayerName(state, action) {
      state.playerName = action.payload;
    },

    flipUpCard(state, action) {
      const id = action.payload;
      if (state.numberClicksInTurn === 0) {
        state.firstId = id;
      }
      if (state.numberClicksInTurn === 1) {
        state.secondId = id;
      }
      if (state.numberClicksInTurn === 2) {
        cardSlice.caseReducers.checkMatchedPair(state);
        cardSlice.caseReducers.flipUpCard(state, { payload: id });
        return;
      }

      state.numberClicksInTurn += 1;

      const card = getCard(id, state.cards);
      if (card.imageUp || card.matched) return;

      const cardToFlip = state.cards.find((c) => c.id === id);
      if (cardToFlip) cardToFlip.imageUp = true;
      state.history.push({
        move: state.turnNumber,
        pickedItem: cardToFlip.image,
        points: state.pairsFound,
      });
    },

    markPairAsMatched(state, action) {
      const { id1, id2 } = action.payload;

      state.cards.forEach((c) => {
        if (c.id === id1 || c.id === id2) {
          c.matched = true;
        }
      });
    },

    flipDown(state, action) {
      const { id1, id2 } = action.payload;

      state.cards.forEach((c) => {
        if (c.id === id1 || c.id === id2) {
          c.imageUp = false;
        }
      });
    },

    // основная логика игры:
    checkMatchedPair(state) {
      if (
        state.numberClicksInTurn === 2 &&
        cardsHaveIdenticalImages(state.firstId, state.secondId, state.cards)
      ) {
        state.pairsFound += 1;
        cardSlice.caseReducers.markPairAsMatched(state, {
          payload: { id1: state.firstId, id2: state.secondId },
        });
      }
      if (state.pairsFound === NUM_IMAGES) state.gameComplete = true;
      else {
        cardSlice.caseReducers.flipDown(state, {
          payload: { id1: state.firstId, id2: state.secondId },
        });
      }

      state.numberClicksInTurn = 0;
      state.turnNumber += 1;
    },

    initGame(state) {
      const newCards = generateCardSet();
      (state.turnNumber = 1),
        (state.numberClicksInTurn = 0),
        (state.firstId = undefined),
        (state.secondId = undefined),
        (state.pairsFound = 0),
        (state.gameComplete = false),
        (state.cards = shuffle([...newCards])),
        (state.history = []);
    },
  },
});

export const {
  flipUpCard,
  markPairAsMatched,
  flipDown,
  checkMatchedPair,
  initGame,
  setPlayerName,
} = cardSlice.actions;

export default cardSlice.reducer;
