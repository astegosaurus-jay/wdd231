
const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = today.getFullYear();


const lastmodified = document.querySelector("#lastmodified")
lastmodified.innerHTML = document.lastModified