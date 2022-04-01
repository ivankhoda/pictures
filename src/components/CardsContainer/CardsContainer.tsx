import React from "react";
import { useDispatch } from "react-redux";
import { Character } from "rickmortyapi/dist/interfaces";
import { LIKE, REMOVE_CARD } from "../../actions/actions";
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
  const dispatch = useDispatch();
  const charactersArray = props.data;

  const handleToggleLike = (clickedItem: Character) => {
    dispatch(toggleLike(clickedItem));
  };

  const handleDelete = (clickedItem: Character) => {
    dispatch(deleteCard(clickedItem));
  };
  return (
    <div className="cards-container">
      {charactersArray ? (
        charactersArray.map((character, i) => (
          <div className="card" key={i}>
            <div className="card__header">
              <button className={`icon icon_like`} onClick={() => handleToggleLike(character)} />

              <button className="icon icon_delete" onClick={() => handleDelete(character)} />
            </div>
            <img src={character.image} alt="Card name" />
            <h2 className="card__title">{character.name}</h2>
          </div>
        ))
      ) : (
        <div>Uppps, seems like we cannot display anything</div>
      )}
    </div>
  );
};
