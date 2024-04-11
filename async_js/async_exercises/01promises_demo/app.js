const base_url = "https://pokeapi.co/api/v2/pokemon";
const url = `${base_url}/1`;

// fetch(url).then(function(data) {
//   console.log(data);
// }).catch(function(err) {
//   console.log("Error!", err);
// })

//! Cleaned up:
// fetch(url)
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error!", err));

//! Making Sequential Fetch Requests (without Callback Hell):
fetch(`${base_url}/1`)
  .then((res1) => {
    console.log("Response 1", res1);
    return fetch(`${base_url}/2`)
  })
  .then((res2) => {
    console.log("Response 2", res2);
    return fetch(`${base_url}/3`)
  })
  .then((res3) => {
    console.log("Response 3", res3)
  })
  .catch(err => {
    console.log("In the catch! Error: ", err);
  })