const members = "data/members.json";


const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(members);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach(member => {
        
        let card = document.createElement("section");
        let name = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let pic = document.createElement("img");
        let level = document.createElement("p");

        name.textContent = member.name;
        address.textContent = `Address: ${member.adress}`;
        phone.textContent = `Phone number: ${member.phonenumber}`;
        website.textContent = `web site: ${member.url}`;
        level.textContent = `${member.membership} star member`;

        pic.setAttribute('src', member.image);
        pic.setAttribute('alt', `Picture of ${member.name}`); 
        pic.setAttribute('loading', 'lazy');
        // pic.setAttribute('width', '340');
        // pic.setAttribute('height', '440');

        card.appendChild(pic);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card);
    });
}

getMemberData();


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});