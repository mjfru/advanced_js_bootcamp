/*
! Fetch
* A 'modern' way to make network requests, replacing the older XMLHttpRequest.
* The basic idea is that we call fetch and provide it a URL that we want data from.
? It's a two step process to get our data when we use fetch:
  1. Fetch from the url and get a response.
  2. Call response.json(), giving us a promise with that data from this response.
*/

async function fetchData() {
  try {
    const response = await fetch('https://api.example/com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const poke_url = 'https://pokeapi.co/api/v2/pokemon';

async function getPokemon() {
  const response = await fetch(poke_url);
  const data = await response.json();
  console.log(data);
}

// Or, rewritten (most people refer the async try/catch, though):
fetch(poke_url)
  .then((res) => res.json())
  .then((data) => console.log(data));

/*
! Error Handling by Checking the Response Status
*/

async function fetchAndHandleErrors() {
  const response = await fetch('https://api.example.com/data');
  // Anything in the 200s is OK
  if (!response.ok) {
    throw new Error(`HTTP Error! Status ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
}

// Async / Await Version:
async function getPokemon() {
  try {
    const response = await fetch(poke_url);
    if (!response.ok) {
      throw new Error(`HTTP Error! Status ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log('Something went wrong with the fetch call!');
    console.log(e);
  }
}


// Fetch Version
fetch(poke_url)
  .then((res) => {
    console.log('The fetch worked!');
    console.log(res);
    if(!res.ok) {
      throw new Error(`HTTP Error! Status ${response.status}`);
    }
    return res.json();
  })
  .then(data => console.log("JSON Data:", data))
  .catch((e) => {
    console.log('Something went wrong with the fetch call!');
    console.log(e);
  })

