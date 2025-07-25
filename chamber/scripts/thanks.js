// let hiddenTime = document.getElementById("subTime")
// const now = new Date();
// hiddenTime = now.toDateString();

const info = new URLSearchParams(window.location.search);




document.querySelector("#result").innerHTML = `
<p>Application For: ${info.get("first")} ${info.get("last")}</p>
<p>email: ${info.get("email")}</p>
<p>Phone Number: ${info.get("phone")}</p>
<p>Business Name: ${info.get("orginization")}</p>
<p>Date Submitted: ${info.get("subtime")}</p>
`;