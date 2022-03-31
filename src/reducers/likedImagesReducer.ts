import { LIKE, UNLIKE } from "../actions/actions";

let initialState: [] = [];
// export const images = (state = initialState, action?: { type: string; payload?: string }) => {
//   switch (action?.type) {
//     default:
//       return state;
//   }
// };
export const likedImages = (state = initialState, action?: { type: string; payload?: string }) => {
  switch (action?.type) {
    case LIKE:
      console.log(state);
    //action?.payload !== (null || undefined) ? state.push[action.payload] : state;
    case UNLIKE:
      console.log(state);
    // action?.payload !== (null || undefined) ? (state = action.payload) : state;
    default:
      return state;
  }
};
