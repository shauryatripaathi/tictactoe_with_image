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
img1.src = "./062b75c962fe374ba95abbf5319643ef.png";
img1.id = "img1";

let img2 = document.createElement('img');
img2.src = "./192948-0320-px.jpg";
img2.id = "img1";

let img3 = document.createElement('img');
img3.src = "./062b75c962fe374ba95abbf5319643ef.png";
img3.id = "img2";

let img4 = document.createElement('img');
img4.src = "./192948-0320-px.jpg";
img4.id = "img1";

let img5 = document.createElement('img');
img5.src = "./062b75c962fe374ba95abbf5319643ef.png";
img5.id = "img2";

let img6 = document.createElement('img');
img6.src = "./192948-0320-px.jpg";
img6.id = "img1";

let img7 = document.createElement('img');
img7.src = "./062b75c962fe374ba95abbf5319643ef.png";
img7.id = "img2";

let img8 = document.createElement('img');
img8.src = "./192948-0320-px.jpg";
img8.id = "img1";

let img9 = document.createElement('img');
img9.src = "./062b75c962fe374ba95abbf5319643ef.png";
img9.id = "img2";

let arr = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
let val = -1;

function handleOnClick(e) {
    if (
        e.target.innerHTML != "" ||
        e.target == img1 ||
        e.target == img2 ||
        e.target == img3 ||
        e.target == img4 ||
        e.target == img5 ||
        e.target == img6 ||
        e.target == img7 ||
        e.target == img8 ||
        e.target == img9
    ) {
        alert("please select other box")
    }
    else {
        val++;
        e.target.appendChild(arr[val]);
        checkIfGameOver();

    }
    console.log(e.target);

}
grid.addEventListener("click", handleOnClick);

function checkIfGameOver() {
    if (
        tile11.innerHTML != "" &&
        tile12.innerHTML != "" &&
        tile13.innerHTML != "" &&
        tile21.innerHTML != "" &&
        tile22.innerHTML != "" &&
        tile23.innerHTML != "" &&
        tile31.innerHTML != "" &&
        tile32.innerHTML != "" &&
        tile33.innerHTML != ""
    ) {
        setTimeout(function () {
            alert("game over");
            location.reload();
        })
    }
}
