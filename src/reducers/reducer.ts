import { combineReducers } from "redux";
import { cards } from "./cardsReducer";
import { errors } from "./errorsReducer";
import { likedCards } from "./likedCardsReducer";

export const rootReducer = combineReducers({
  cards,
  likedCards,
  errors,
});
export type RootState = ReturnType<typeof rootReducer>;
