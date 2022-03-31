/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import { images } from "./imagesReducer";
import { likedImages } from "./likedImagesReducer";

export const rootReducer = combineReducers({
  images,
  likedImages,
});
export type RootState = ReturnType<typeof rootReducer>;
