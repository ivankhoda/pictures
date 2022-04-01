import React from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import "./Card.style.scss";
// Styles

type CardProps = {
  id: number;
  name: string;
  image: string;
  item: Character;
  liked: boolean;
  handleToggleLike: (item: Character) => void;
  handleDelete: (item: Character) => void;
};

export const Card: React.FC<CardProps> = (props) => {
  const { id, name, image, item, liked, handleToggleLike, handleDelete } = props;

  return (
    <div className="card">
      <div className="card__header">
        <button className={liked ? `icon icon_like-liked` : `icon icon_like`} onClick={() => handleToggleLike(item)} />
        <button className="icon icon_delete" onClick={() => handleDelete(item)} />
      </div>
      <img src={image} alt="Card name" />
      <h2 className="card__title">{name}</h2>
    </div>
  );
};
