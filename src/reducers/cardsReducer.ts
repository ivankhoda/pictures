import { Character, findItemInArrayById } from "../helpers";
import { ADD_CARDS, LIKE, REMOVE_CARD } from "./../actions/actions";

type InitialState = {
  cards: Character[];
  likedCards: Character[];
};

const initialState: InitialState = {
  cards: [],
  likedCards: [],
};

export const cards = (state = initialState, action?: { type: string; payload: Character[] }) => {
  switch (action?.type) {
    case ADD_CARDS:
      return { ...state, cards: [...action.payload] };

    case REMOVE_CARD:
      return {
        ...state,
        //@ts-ignore
        cards: state.cards.filter((item) => item.id !== action.payload.id),
      };

    case LIKE:
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
