import { getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
const parkData = getParkData();

function setParkIntro(data) {
  const introE1 = document.querySelector(".intro");
  introE1.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoE1 = document.querySelector(".info");
  // we have multiple links to build...so we map to transform the array of objects into an array of HTML strings
  const html = data.map(mediaCardTemplate);
  // join the array of string into one string and insert it into the section
  infoE1.insertAdjacentHTML("afterbegin", html.join(""));
}

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);