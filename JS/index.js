
document.addEventListener("DOMContentLoaded", getJson);

//GLOBALE VARIABLER -------------------------


let postTarget = document.querySelector(".promotion_product_template");

let postOutput = document.querySelector("#hest");


let allPost;


//Hentf ---------------------------------------------------------------------------------------------------------------------------------------------------------
async function getJson() {

    let jsonObject = await fetch("https://magnusvjensen.dk/2_semester/eksamen/wordpress/wp-json/wp/v2/product/?per_page=5");

    allPost = await jsonObject.json();



    visPost();

}




//visPost ---------------------
function visPost() {

    //Gennemgår alle posts
    allPost.forEach(post => {


        udSkrivPost(post);
        //Udskriver fra template til dokument
        function udSkrivPost(post) {

            //Kloner template elementerne
            let klon = postTarget.cloneNode(true).content;

            klon.querySelector(".prom_prod_image").src = post.acf.image_prime.url;

            klon.querySelector(".prom_prod_title").textContent = post.acf.title;
            klon.querySelector(".prom_prod_kollektion").textContent = post.acf.kollektion;
            klon.querySelector(".prom_prod_dial").textContent = post.acf.dial;
            klon.querySelector(".prom_prod_rem").textContent = post.acf.rem;
            klon.querySelector(".prom_prod_pris").textContent = post.acf.pris + " " + "kr";



            klon.querySelector(".mySlides").addEventListener("click",() =>{

                 window.location.href = "ure_single_page.html?id=" + post.id;


            });


            console.log(post.acf.image_prime.url);
            //Udskriver
            postOutput.appendChild(klon);

            showDivs();

        }


    })
}



//PROMOTION SLIDER ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-red";
}
//PROMOTION SLIDER END ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------























