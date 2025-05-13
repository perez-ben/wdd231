import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner_title">${info.name}</a>
    <p class="hero-banner_subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

function setHeaderInfo(parkData) {
  // insert data into disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = parkData.url;
  disclaimer.innerHTML = parkData.fullName;
  // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
  document.querySelector("head > title").textContent = parkData.fullName;
  // set the banner image
  document.querySelector(".hero-banner > img").src = parkData.images[0].url;
  // use the template function above to set the rest of the park specific info in the header
  document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);
}


function mediaCardTemplate(info) {
  return `<div class="media-card">
  <a href="${info.link}">
  <img src="${info.image}" alt="${info.name}" class=media-card__img">
  <h3 class="media-card__title">${info.name}</h3>
  </a>
  <p>${info.description}</p>
  </div>`;
}

function getMailingAddress(addresses) {
  const mailing = addresses.find((address) => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(numbers) {
  const mailing = addresses.find((number) => number.type === "Voice");
  return phoneNumber;
}

function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}</p>
  <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voice}</p>
  </section>`;
}