import Button from "arui-feather/button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCards, Character } from "../../helpers";
import { RootState } from "../../reducers/reducer";
import { CardsContainer } from "../CardsContainer";
import "./Main.style.scss";

export const Main = () => {
  const cardsData: { cards: Character[] } = useSelector((state: RootState) => state.cards);
  const likedCardsData: { likedCards: Character[] } = useSelector((state: RootState) => state.likedCards);

  const [showOnlyLiked, setShowOnlyLiked] = useState(false);

  const dispatch = useDispatch();

  const getData = async (link: string | null) => {
    const result = await fetch(`${link}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    dispatch(addCards(data.results));
  };

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character");
  }, []);

  const handleToggleLike = () => {
    setShowOnlyLiked(!showOnlyLiked);
  };

  return (
    <div className="main">
      <div className="control-panel">
        <h1 className="control-panel__header">Pictures</h1>
        <Button disabled={false} className="" view="extra" size="m" onClick={handleToggleLike}>
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
