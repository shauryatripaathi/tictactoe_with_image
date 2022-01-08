let grid = document.getElementById("grid");
let tile11 = document.getElementById("tile11");
let tile12 = document.getElementById("tile12");
let tile13 = document.getElementById("tile13");
let tile21 = document.getElementById("tile21");
let tile22 = document.getElementById("tile22");
let tile23 = document.getElementById("tile23");
let tile31 = document.getElementById("tile31");
let tile32 = document.getElementById("tile32");
let tile33 = document.getElementById("tile33");

let img1 = document.createElement('img');
img1.src = "./192948-0320-px.jpg"
img1.id = "img1";

function handleOnClick(e) {
    e.target.appendChild(img1);
}
grid.addEventListener("click", handleOnClick);