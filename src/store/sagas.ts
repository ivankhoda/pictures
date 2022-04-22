import { call, put } from "@redux-saga/core/effects";
import { addCards, addError } from "./dispatchers";

const getData = async () => {
  const result = await fetch(`https://rickandmortyapi.com/api/character?page=`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  return data.results;
};
const getDataAll = async (num?: number) => {
  try {
    let result = await fetch(`https://rickandmortyapi.com/api/character?page=${num}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return [...data.results];
  } catch (err) {
    console.log(err);
  }
};
//fetch data
export function* fetchDataSaga(): any {
  try {
    const response: [] = yield call(getData);
    const resp: [] = yield call(getDataAll);
    console.log(resp, "dataall");
    yield put(addCards(resp));
  } catch (e) {
    yield put(addError(e));
  }
}
