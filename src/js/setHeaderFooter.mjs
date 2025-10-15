import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
//inserts data into disclaimer section
const disclaimer = document.querySelector(".disclaimer > a"); 
disclaimer.href = data.url;
disclaimer.innerHTML = data.fullName;
//update the title of the site. Notice that we can select things in the head just like in the body with querySelector
document.querySelector("head > title").textContent = data.fullName;
//set the banner image
document.querySelector(".hero-banner > img").src = data.images[0].url;
//use the template function to set the rest of the park specific info in the banner
document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

function setFooter(data) {
    const footerE1 = document.querySelector("#park-footer");
    footerE1.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}