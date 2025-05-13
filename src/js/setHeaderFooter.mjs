import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(parkData) {
    //insert data into disclaimerj section
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = parkData.url;
    disclaimer.innerHTML = parkData.fullName;
    //update the title of the site. Notice that we can select things in the head just like in the body with querySelector
    document.querySelector("head > title").textContent = parkData.fullName;
    // set the banner image
    document.querySelector(".hero-banner > img").src = parkData.images[0].url;
    // use the template function above to set the rest of the park specific info in the header
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(data);
}

function setFooter(parkData) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.insertAdjacentHTML("afterbegin", footerTemplate(parkData));
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
}