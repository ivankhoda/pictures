import { Character } from "rickmortyapi/dist/interfaces";
import { ADD_CARDS, REMOVE_CARD } from "./../actions/actions";

type InitialState = {
  cards: [];
  likedCards: [];
};

const initialState: InitialState = {
  cards: [],
  likedCards: [],
};

export const cards = (state = initialState, action?: { type: string; payload: Character[] | Character }) => {
  switch (action?.type) {
    case ADD_CARDS:
      if (action.payload && Array.isArray(action.payload)) return { ...state, cards: [...action.payload] };

    case REMOVE_CARD:
      return {
        ...state,
        //Add ts ignore for avoid TS complain "id doesn't exists on type" but in fact id exists .
        // @ts-ignore
        cards: state.cards.filter((item, index) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
