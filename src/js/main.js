import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import setHeaderFooter  from "./setHeaderFooter.mjs"; 
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks(parkData);

function setParkIntro(data) {
   const introE1 = document.querySelector(".intro");
   introE1.innerHTML = `<h1>${data.fullName}</h1>
   <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
   const infoE1 = document.querySelector(".info");
   //mapping to use an array of objects to create an array of objects as HTML strings
   const html = data.map(mediaCardTemplate);
   //combines the array of strings into one string and insert it into the section
   infoE1.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);

