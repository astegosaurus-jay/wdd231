const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);



document.querySelector("#results").innerHTML = `<p> Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>`