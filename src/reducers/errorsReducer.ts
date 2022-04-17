import { ADD_ERROR } from "../actions";

const initialState = {
  errors: [],
};

export const errors = (state = initialState, action?: { type: string; payload: unknown }) => {
  switch (action?.type) {
    case ADD_ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
