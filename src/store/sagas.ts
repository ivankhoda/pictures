// const getData = async () => {
//   const result = await fetch(`https://rickandmortyapi.com/api/character`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await result.json();
//   return data.results;
// };
//fetch data
export function* fetchDataSaga() {
  try {
    // const response: [] = await yield call(getData);
    //  const response = getData(apiLink);
    console.log("response", "sagas");
  } catch (e) {
    console.log(e);
  }
}
