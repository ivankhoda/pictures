import { ADD_CARDS, ADD_ERROR, LIKE, REMOVE_CARD } from "../actions";
import { Character } from "../helpers/types";

export const toggleLike = (card: Character) => {
  return { type: LIKE, payload: card };
};

export const deleteCard = (card: Character) => {
  return { type: REMOVE_CARD, payload: card };
};

export const addCards = (cards: []) => {
  return { type: ADD_CARDS, payload: cards };
};

export const addError = (error: unknown) => {
  return { type: ADD_ERROR, payload: error };
};
