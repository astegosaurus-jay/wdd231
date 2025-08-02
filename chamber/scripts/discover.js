const places = "data/discover.json";

async function getPlaceData() {
    const response = await fetch(places);
    const data = await response.json();
    displayPlaces(data.places);
}

const cards = document.querySelector('#places');

const displayPlaces = (places) => {
    places.forEach(place => {
        
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("address");
        // let fig = document.createElement("figure");
        // let phone = document.createElement("p");
        // let website = document.createElement("p");
        let pic = document.createElement("img");
        let description = document.createElement("p");
        let button = document.createElement("button");

        name.textContent = place.name;
        address.textContent = `Address: ${place.adress}`;
        // phone.textContent = `Phone number: ${member.phonenumber}`;
        // website.textContent = `web site: ${member.url}`;
        description.textContent = place.description;
        button.textContent = `Learn more`;

        pic.setAttribute('src', place.image);
        pic.setAttribute('alt', `Picture of ${place.name}`); 
        pic.setAttribute('loading', 'lazy');
        pic.setAttribute('width', '300');
        pic.setAttribute('height', '200');

        // fig.appendChild(pic);
        // card.appendChild(pic);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(pic);
        // card.appendChild(phone);
        // card.appendChild(website);
        card.appendChild(description);
        // card.appendChild(fig);
        card.appendChild(button);

        cards.appendChild(card);
    });
}

getPlaceData();