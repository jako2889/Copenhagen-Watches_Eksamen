document.addEventListener("DOMContentLoaded", getJson);



let urlParams = new URLSearchParams(window.location.search);

let sPost = urlParams.get("id");

console.log(sPost);


async function getJson() {

    let jsonObject = await fetch("https://magnusvjensen.dk/2_semester/eksamen/wordpress/wp-json/wp/v2/product");

    allPost = await jsonObject.json();


    visProduct();
}

    function visProduct() {


            let display = document.querySelector(".single_product_container");

        allPost.forEach(post => {
                if (post.id == sPost) {

                 console.log("HESTE FEST")

            display.querySelector(".single_prod_image").src = post.acf.image_prime.url;

            display.querySelector(".single_prod_title").textContent = post.acf.title;
            display.querySelector(".single_prod_kollektion").textContent = post.acf.kollektion;
            display.querySelector(".single_prod_dial").textContent = post.acf.dial;
            display.querySelector(".single_prod_rem").textContent = post.acf.rem;
            display.querySelector(".single_prod_pris").textContent = post.acf.pris + "kr.";


                }
            });

        //TILBAGE TIL ure.html knap
          document.querySelector(".tilbage_til_ure").addEventListener("click",() =>{

                 window.location.href = "ure.html";


            });

        }
