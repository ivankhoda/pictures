import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Character } from "rickmortyapi/dist/interfaces";
import { LIKE, REMOVE_CARD } from "../../actions/actions";
import { Card } from "../Card/Card";
import "./CardsContainer.style.scss";
type IProps = {
  data: Character[] | undefined;
};
export const toggleLike = (card: Character) => {
  return { type: LIKE, payload: card };
};

export const deleteCard = (card: Character) => {
  return { type: REMOVE_CARD, payload: card };
};
export const CardsContainer: React.FC<IProps> = (props) => {
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();
  const charactersArray = props.data;

  const handleToggleLike = (clickedItem: Character) => {
    setLiked(!liked);
    dispatch(toggleLike(clickedItem));
  };

  const handleDelete = (clickedItem: Character) => {
    dispatch(deleteCard(clickedItem));
  };
  return (
    <div className="cards-container">
      {charactersArray ? (
        charactersArray.map((character, i) => (
          <Card
            key={i}
            id={character.id}
            name={character.name}
            image={character.image}
            item={character}
            liked={liked}
            handleToggleLike={handleToggleLike}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <div>Uppps, seems like we cannot display anything</div>
      )}
    </div>
  );
};
