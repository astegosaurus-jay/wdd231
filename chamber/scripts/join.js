let hiddenTime = document.getElementById("subTime");
const now = new Date();


const button = document.querySelector("#button");
const dialogBox = document.querySelector("#dialogBox");
const close = document.querySelector("#close");
const textBox = document.querySelector("#dialogBox div");

hiddenTime.value = now.toDateString();










button1.addEventListener("click", () => {
    dialogBox.showModal();
    textBox.innerHTML = `<h3>Non Profit</h3>
    <p>Join a growing list of non profit businesses and help grow the comunity. Be a part of a monthly news letter and community events</p>`;
})

button2.addEventListener("click", () => {
    dialogBox.showModal();
    textBox.innerHTML = `<h3>Bronze Member</h3>
    <p>Become a Bronze member and join a groing community of upcoming businesses. Become a part of a weekly newletter today.</p>`;
})

button3.addEventListener("click", () => {
    dialogBox.showModal();
    textBox.innerHTML = `<h3>Silver Member</h3> 
    <p>Become a silver member today and enjoy the benefits of the bronze membership plus local advertisements.</p>`;
})

button4.addEventListener("click", () => {
    dialogBox.showModal();
    textBox.innerHTML = `<h3>Gold Member</h3>
    <p>Become a Gold member and enjoy the benefits of the prior levels, plus more advertising and a weekly spotlight.</p>`;
})










close.addEventListener("click", () => {
    dialogBox.close();
})