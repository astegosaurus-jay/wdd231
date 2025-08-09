

const info = new URLSearchParams(window.location.search);




document.querySelector("#result").innerHTML = `
<p>Gamer Tag: ${info.get("tag")}</p>
<p>Favorite Generation: ${info.get("gen")}</p>
<p>Favorite Memory: ${info.get("memory")}</p>
<p>Thanks for sharing!</p>
`;