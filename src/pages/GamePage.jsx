import React from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { checkMatchedPair, flipUpCard } from "../state/cardSlice";

const GamePage = () => {
  const dispatch = useDispatch();

  const cards = useSelector((state) => state.cards.cards);
  const turnNo = useSelector((state) => state.cards.turnNo);
  const gameComplete = useSelector((state) => state.cards.gameComplete);
  const pairsFound = useSelector((state) => state.cards.pairsFound);
  const numberClicksInTurn = useSelector(
    (state) => state.cards.numberClicksInTurn
  );

  if (pairsFound === 7 && numberClicksInTurn === 2) {
    dispatch(checkMatchedPair());
  }

  const getCardViews = () => {
    let cardViews = [];
    cards.forEach((c) => {
      let cardView = (
        <Card
          key={c.id}
          id={c.id}
          image={c.image}
          imageUp={c.imageUp}
          matched={c.matched}
          onClick={() => dispatch(flipUpCard(c.id))}
        />
      );
      cardViews.push(cardView);
    });
    return cardViews;
  };

  let cardViews = getCardViews();

  return (
    <div className="flex flex-col gap-10 pt-10 justify-center">
      <div className="flex gap-5 justify-center">
        <div>
          <p>user name:</p>
          {/* сюда значение из инпута модалки */}
        </div>
        <div className="flex gap-2.5">
          <p>current points:</p>
          {pairsFound}
        </div>
      </div>
      <div className="flex justify-center pb-10">
        <div className="grid grid-cols-4 gap-5 ">{cardViews}</div>
      </div>
    </div>
  );
};

export default GamePage;
