import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Character } from "rickmortyapi/dist/interfaces";
import { ADD_IMAGES } from "../../actions/actions";
import { RootState } from "../../reducers/reducer";
import { CardsContainer } from "../CardsContainer";
type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
export const addImages = (images: []) => {
  return { type: ADD_IMAGES, payload: images };
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
    dispatch(addImages(data));
  };

  useEffect(() => {
    getData("https://rickandmortyapi.com/api/character");
  }, []);
  const imagesData = useSelector((state: RootState) => state.images);
  console.log(imagesData);
  return (
    <div className="main">
      <CardsContainer arr={data} />
    </div>
  );
};
