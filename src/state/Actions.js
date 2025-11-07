export const INIT_GAME = { type: "INIT_GAME" };
export const SHUFFLE_CARD = { type: "SHUFFLE_CARD" };
export const FLIP_DOWN_CARDS_PAIR = {type: "FLIP_DOWN_CARDS_PAIR"}
export const FLIP_UP_CARD = {type: "FLIP_UP_CARD"}

export function flipUpCard(id) {
  return { type: "FLIP_UP_CARD", id: id };
}

export function flipDownCardsPair(id1, id2) {
  return { type: "FLIP_DOWN_CARDS_PAIR", id1: id1, id2: id2 };
}

export function markPairAsMatched(id1, id2) {
  return { type: "MARK_PAIR_AS_MATCHED", id1: id1, id2: id2 };
}
