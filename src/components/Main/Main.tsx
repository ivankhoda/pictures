import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "rickmortyapi/dist/interfaces";
import { ADD_CARDS } from "../../actions/actions";
import { RootState } from "../../reducers/reducer";
import { CardsContainer } from "../CardsContainer";
type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
export const addcards = (cards: []) => {
  return { type: ADD_CARDS, payload: cards };
};

export const Main = () => {
  const [data, setData] = useState<Character[] | undefined>([]);
  const [info, setInfo] = useState<Info>();
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const getData = async (link: string | null) => {
    const result = await fetch(`${link}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();

    dispatch(addcards(data.results));
  };

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character");
  }, []);
  const cardsData: { cards: any; likedCrads: any } = useSelector((state: RootState) => state.cards);
  const likedCardsData: { cards: any; likedCrads: any } = useSelector((state: RootState) => state.likedCards);
  console.log(likedCardsData, "liked cardData");

  return (
    <div className="main">
      <CardsContainer data={cardsData.cards} />
    </div>
  );
};
