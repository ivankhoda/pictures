import React, { useState } from "react";
import { Character } from "rickmortyapi/dist/interfaces";

type IProps = {
  arr: Character[] | undefined;
};

export const CardsContainer: React.FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Character>({} as Character);

  const handleOpen = (character: Character) => {
    setOpen(true);
    setActive(character);
  };
  const charactersArray = props.arr;

  // if (!Component) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div>
        {charactersArray ? (
          charactersArray.map((character) => (
            <div
              key={character.id}
              onClick={() => {
                handleOpen(character);
              }}
            >
              <img src={character.image} alt="Card name" />
              <h1>{character.name}</h1>
            </div>
          ))
        ) : (
          <div>Uppps, seems like we cannot display anything</div>
        )}
      </div>
    </div>
  );
};
