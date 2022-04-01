/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import { cards } from "./cardsReducer";
import { likedCards } from "./likedCardsReducer";

export const rootReducer = combineReducers({
  cards,
  likedCards,
});
export type RootState = ReturnType<typeof rootReducer>;
