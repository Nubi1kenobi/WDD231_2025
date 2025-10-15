// wk3PonderFetchActivities.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  const html = `<h2>${results.name}</h2>
  <img src="${results.sprites.front_default}" alt="${results.name}">`;
  document.getElementById("output").innerHTML = html;
  
  const html2 = `
  <img src="${results.sprites.back_default}" alt="${results.name}">`;
  document.getElementById("output2").innerHTML = html2;

  const html3 = `<h2>shiny ${results.name}</h2>
  <img src="${results.sprites.front_shiny}" alt="${results.name}">`;
  document.getElementById("output3").innerHTML = html3;

  const html4 = `
  <img src="${results.sprites.back_shiny}" alt="${results.name}">`;
  document.getElementById("output4").innerHTML = html4;

  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);