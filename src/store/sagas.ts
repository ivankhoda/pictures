import { call, put } from "@redux-saga/core/effects";
import { addCards, addError } from "./dispatchers";

const getData = async () => {
  const result = await fetch(`https://rickandmortyapi.com/api/character`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  return data.results;
};
//fetch data
export function* fetchDataSaga(): any {
  try {
    const response: [] = yield call(getData);
    yield put(addCards(response));
  } catch (e) {
    yield put(addError(e));
  }
}
