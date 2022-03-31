/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADD_IMAGES, REMOVE_IMAGE } from "../actions/actions";

const initialState = {
  images: [],
};

export const images = (state = initialState, action?: { type: string; payload?: string }) => {
  switch (action?.type) {
    case ADD_IMAGES:
      return { ...state, images: [...state.images, action.payload] };

    case REMOVE_IMAGE:
      console.log(action, "remove image");
    // action?.payload !== (null || undefined) ? (state = action.payload) : state;
    default:
      return state;
  }
};
