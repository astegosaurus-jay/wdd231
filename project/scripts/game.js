const games = "data/games.json";

async function getGamesData() {
    const response = await fetch(games);
    const data = await response.json();
    displayGames(data.games);

    const xboxLink = document.querySelector("#xbox");
    xboxLink.addEventListener("click", () => {
    displayGames(data.games.filter(game => game.brand.includes("xbox")))

    const nintendoLink = document.querySelector("#nintendo");
    nintendoLink.addEventListener("click", () => {
    displayGames(data.games.filter(game => game.brand.includes("nintendo")))
    });

    const sonyLink = document.querySelector("#sony");
    sonyLink.addEventListener("click", () => {
    displayGames(data.games.filter(game => game.brand.includes("sony")))
    });

    const allLink = document.querySelector("#all");
    allLink.addEventListener("click", () => {
    displayGames(data.games)
    });
});
}

function displayGames(filteredGames) {
    document.querySelector(".game").innerHTML = "";
    filteredGames.forEach(game =>{
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let platform = document.createElement("h3");
        let img = document.createElement("img");
        let word = document.createElement("p");

        name.textContent = game.name;
        word.textContent = game.thought;
        platform.textContent = `Platform: ${game.brand}`;
        img.setAttribute("src", game.image);
        img.setAttribute("alt", game.name);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "350");
        img.setAttribute("height", "350");

        card.appendChild(name);
        card.appendChild(platform);
        card.appendChild(img);
        card.appendChild(word);

        document.querySelector(".game").appendChild(card);
    })
};


getGamesData();



const button = document.querySelector("#button");
const dialogBox = document.querySelector("#dialogBox");
const close = document.querySelector("#close");
const textBox = document.querySelector("#dialogBox div");

button.addEventListener("click", () => {
    dialogBox.showModal();
    textBox.innerHTML = `
    <p>About half of the images are pictures of games from my personal collection. The rest are images of cover art off the internet. I hope to be able to take photos of all of my collection as I have time.</p>`;
})

close.addEventListener("click", () => {
    dialogBox.close();
})