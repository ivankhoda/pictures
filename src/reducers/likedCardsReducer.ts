import { Character } from "rickmortyapi/dist/interfaces";
import { LIKE, REMOVE_CARD } from "../actions";
import { findItemInArrayById } from "../helpers";
type InitialState = {
  likedCards: [];
};

let initialState: InitialState = { likedCards: [] };

export const likedCards = (state = initialState, action?: { type: string; payload: Character }) => {
  switch (action?.type) {
    case LIKE:
      if (findItemInArrayById(state.likedCards, action.payload.id)) {
        return {
          ...state,
          // @ts-ignore
          likedCards: state.likedCards.filter((item, index) => item.id !== action.payload.id),
        };
      }
      return { ...state, likedCards: [...state.likedCards, action.payload] };
    case REMOVE_CARD:
      return {
        ...state,
        // @ts-ignore
        likedCards: state.likedCards.filter((item, index) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
