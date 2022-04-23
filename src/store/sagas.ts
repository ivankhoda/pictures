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
async function getDataAll(num?: number) {
  try {
    let result = await fetch(`https://rickandmortyapi.com/api/character?page=${num}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return data;
  } catch (err) {
    return err;
  }
}
//fetch data
export function* fetchDataSaga(): any {
  try {
    const response: [] = yield call(getData);
    const resp: { info: {}; results: [] } = yield call(getDataAll);

    yield put(addCards(resp.results));
  } catch (e) {
    yield put(addError(e));
  }
}
