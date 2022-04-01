import React from "react";
import "./Card.style.scss";
// Styles

type ItemProps = {
  slideClass: string;
  zoomFactor: number;
  id: number;
  callback: (id: number) => void;
  callbackOut: () => void;
  slideMargin: number;
  visibleSlides: number;
};

export const Card: React.FC<ItemProps> = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  children,
}) => (
  <div
    //zoomFactor={zoomFactor}
    // //slideMargin={slideMargin}
    // visibleSlides={visibleSlides}
    // className={slideClass}
    onMouseOver={() => callback(id)}
    // onMouseOut={callbackOut}
  >
    {children}
  </div>
);
