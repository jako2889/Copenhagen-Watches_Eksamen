document.getElementById("kurv_nav").addEventListener("click", openKurv);

function closeKurv() {
console.log("luk kurv");

var element = document.getElementById("kurv_container");
element.classList.remove("open_kurv");

element.classList.add("close_kurv");

    }

function openKurv() {
    console.log("åben kurv");

var element = document.getElementById("kurv_container");
element.classList.remove("close_kurv");

element.classList.add("open_kurv");

document.getElementById("kryds").addEventListener("click", closeKurv);
}
