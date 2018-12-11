document.addEventListener("DOMContentLoaded", redirectKollektioner);


let kol_knap_data;

function redirectKollektioner(){

    console.log("haløøøøj");


      document.querySelectorAll(".kol_knap").forEach(knap =>{

        knap.addEventListener("click", getData)

    });

}


function getData(){


    knap_kollektion = this.getAttribute("data-knap_kollektion");

    console.log(knap_kollektion);

        window.location.href = "ure.html?data=" + knap_kollektion;

}
