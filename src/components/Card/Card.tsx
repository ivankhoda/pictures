import React from "react";
import { useDispatch } from "react-redux";
import { Character, deleteCard, toggleLike } from "../../helpers";
import "./Card.style.scss";

type CardProps = {
  id: number;
  name: string;
  image: string;
  item: Character;
  like?: boolean;
};

export const Card: React.FC<CardProps> = (props) => {
  const { id, name, image, item, like } = props;

  const dispatch = useDispatch();

  const handleToggleLike = (clickedItem: Character) => {
    dispatch(toggleLike(clickedItem));
  };

  const handleDelete = (clickedItem: Character) => {
    dispatch(deleteCard(clickedItem));
  };

  return (
    <div className={like ? "card card-liked" : "card"}>
      <div className="card__header">
        <button className={like ? `icon icon_like-liked` : `icon icon_like`} onClick={() => handleToggleLike(item)} />
        <button className="icon icon_delete" onClick={() => handleDelete(item)} />
      </div>
      <img src={image} alt="Card name." />
      <h2 className="card__title">{name}</h2>
    </div>
  );
};
