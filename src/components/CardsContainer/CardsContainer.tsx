import Spin from "arui-feather/spin";
import React from "react";
import { Character } from "../../helpers";
import { Card } from "../Card/Card";
import "./CardsContainer.style.scss";

type IProps = {
  data: Character[] | undefined;
};

export const CardsContainer: React.FC<IProps> = (props) => {
  const { data } = props;

  return (
    <div className="cards-container">
      {data?.length ? (
        data.map((character, i) => (
          <Card
            key={i}
            id={character.id}
            name={character.name}
            image={character.image}
            item={character}
            like={character.liked}
          />
        ))
      ) : (
        <h3 className="cards-container__warning">
          <Spin size={"xl"} visible={true} /> Uppps, seems like we cannot display anything, please try to like some
          cards or refresh page and try again...
        </h3>
      )}
    </div>
  );
};
