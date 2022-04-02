import { Character, findItemInArrayById } from "../helpers";
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
        // @ts-ignore
        cards: state.cards.filter((item, index) => item.id !== action.payload.id),
      };

    case "like":
      // @ts-ignore
      if (findItemInArrayById(state.cards, action.payload.id)) {
        // @ts-ignore
        action.payload.liked ? (action.payload.liked = false) : (action.payload.liked = true);
      }
      return { ...state };

    default:
      return state;
  }
};
