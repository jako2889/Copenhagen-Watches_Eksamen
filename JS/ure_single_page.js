document.addEventListener("DOMContentLoaded", getJson);



let urlParams = new URLSearchParams(window.location.search);

let sPost = urlParams.get("id");

console.log(sPost);


async function getJson() {

    let jsonObject = await fetch("https://magnusvjensen.dk/2_semester/eksamen/wordpress/wp-json/wp/v2/product/?per_page=100");

    allPost = await jsonObject.json();


    visProduct();
}

    function visProduct() {


            let display = document.querySelector(".site_content_wrapper");

        allPost.forEach(post => {
                if (post.id == sPost) {

                 console.log("HESTE FEST")

            //HEADER
            display.querySelector(".head_title").textContent = post.acf.title;
            display.querySelector(".head_kollektion").textContent = post.acf.kollektion;
            display.querySelector(".head_dial").textContent = post.acf.dial;


            //MAIN IMAGE
            display.querySelector(".image_1").src = post.acf.image_prime.url;
            display.querySelector(".image_2").src = post.acf.image_2.url;
            display.querySelector(".image_3").src = post.acf.image_3.url;
            display.querySelector(".image_4").src = post.acf.image_4.url;
            display.querySelector(".image_5").src = post.acf.image_5.url;
            display.querySelector(".image_6").src = post.acf.image_6.url;
            display.querySelector(".image_7").src = post.acf.image_7.url;

            //IMAGE KNAPPER
            display.querySelector(".but_1").src = post.acf.image_prime.url;
            display.querySelector(".but_2").src = post.acf.image_2.url;
            display.querySelector(".but_3").src = post.acf.image_3.url;
            display.querySelector(".but_4").src = post.acf.image_4.url;
            display.querySelector(".but_5").src = post.acf.image_5.url;
            display.querySelector(".but_6").src = post.acf.image_6.url;
            display.querySelector(".but_7").src = post.acf.image_7.url;

            //CTA KOB KNAP
            display.querySelector(".cta_dial").textContent = post.acf.dial;
            display.querySelector(".cta_pris").textContent = post.acf.pris + " " + "kr";
            display.querySelector(".cta_rem").textContent = post.acf.rem;

            //BEKSRIVELSE
            display.querySelector(".bskr_text").innerHTML = post.content.rendered;

            //SPEC
            display.querySelector(".s_1").textContent = post.acf.varenummer;
            display.querySelector(".s_2").textContent = post.acf.tykkelse;
            display.querySelector(".s_3").textContent = post.acf.case;
            display.querySelector(".s_4").textContent = post.acf.urskive_farve;
            display.querySelector(".s_5").textContent = post.acf.urets_viser;
            display.querySelector(".s_6").textContent = post.acf.rem;
            display.querySelector(".s_7").textContent = post.acf.vandafvisende;



              console.log(post.acf.dial);





//            display.querySelector(".single_prod_rem").textContent = post.acf.rem;
//            display.querySelector(".single_prod_pris").textContent = post.acf.pris + "kr.";


                }
            });

        //TILBAGE TIL ure.html knap
          document.querySelector(".tilbage_til_ure").addEventListener("click",() =>{

                 window.location.href = "ure.html";


            });

        }


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
