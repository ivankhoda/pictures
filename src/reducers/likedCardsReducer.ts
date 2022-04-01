import { Character } from "rickmortyapi/dist/interfaces";
type InitialState = {
  likedCards: [];
};

let initialState: InitialState = { likedCards: [] };

const findItemInArrayById = (arr: any[], id: number) => {
  if (arr.find((el) => el.id === id)) {
    return true;
  }
  return false;
};

export const likedCards = (state = initialState, action?: { type: string; payload: Character }) => {
  switch (action?.type) {
    case "like":
      if (findItemInArrayById(state.likedCards, action.payload.id)) {
        return {
          ...state,
          // @ts-ignore
          likedCards: state.likedCards.filter((item, index) => item.id !== action.payload.id),
        };
      }
      return { ...state, likedCards: [...state.likedCards, action.payload] };

    default:
      return state;
  }
};
