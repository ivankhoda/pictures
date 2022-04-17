import Button from "arui-feather/button";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Character } from "../../helpers";
import { RootState } from "../../reducers/reducer";
import { CardsContainer } from "../CardsContainer";
import "./Main.style.scss";

export const Main = () => {
  const cardsData: { cards: Character[] } = useSelector((state: RootState) => state.cards);
  const likedCardsData: { likedCards: Character[] } = useSelector((state: RootState) => state.likedCards);

  const [showOnlyLiked, setShowOnlyLiked] = useState(false);

  const handleToggleLike = () => {
    setShowOnlyLiked(!showOnlyLiked);
  };

  return (
    <div className="main">
      <div className="control-panel">
        <h1 className="control-panel__header">Pictures</h1>
        <Button disabled={false} view="extra" size="m" onClick={handleToggleLike}>
          {showOnlyLiked
            ? `Show all cards: ${cardsData.cards.length}`
            : `Show liked cards: ${likedCardsData.likedCards.length}`}
        </Button>
      </div>

      <CardsContainer
        data={showOnlyLiked ? cardsData.cards.filter((item: Character) => item.liked === true) : cardsData.cards}
      />
    </div>
  );
};
