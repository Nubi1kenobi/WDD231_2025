// wk3PonderFetchActivities.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon/?limit=151";
let results = null;
let results2 = null;

/* async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuffList(data);
  }
}*/
async function getMyPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data)
  }
}

function doStuff(data) {
  results = data;
  const html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="${results.name}">`;
  document.getElementById("output").innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  results = data;
  console.log("doStuffList: ", results);
  let pokeList = data.results;
  pokeList.sort((a, b) => a.name.localeCompare(b.name));
  pokeList.forEach((poke) => {
    const html = `<li>${poke.name}</li>`
    document.getElementById("outputList").innerHTML += html;
    // "=+" appends instead of overwriting
  })
  
function sortPokemon(list) {

}

}

/*getPokemon(url);
getPokemonList(urlList);*/

getMyPokemon(url, doStuff)
getMyPokemon(urlList, doStuffList)

console.log("second: ", results);

