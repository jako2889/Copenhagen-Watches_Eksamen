document.addEventListener("DOMContentLoaded", getJson);

//GLOBALE VARIABLER -------------------------

let allPost;

let postTarget = document.querySelector(".product_template");

let postOutput = document.querySelector(".product_wrapper");


//Hentf ---------------------------------------------------------------------------------------------------------------------------------------------------------
async function getJson() {

    let jsonObject = await fetch("https://magnusvjensen.dk/2_semester/eksamen/wordpress/wp-json/wp/v2/product");

    allPost = await jsonObject.json();


    visPost();
}

//visPost ---------------------
function visPost() {

    //Gennemgår alle posts
    allPost.forEach(post => {
   console.log("FEST");

        udSkrivPost(post);

        //Udskriver fra template til dokument
        function udSkrivPost(post) {

            //Kloner template elementerne
            let klon = postTarget.cloneNode(true).content;

            klon.querySelector(".prod_image").src = post.acf.image_prime.url;

            klon.querySelector(".prod_title").textContent = post.acf.title;
            klon.querySelector(".prod_kollektion").textContent = post.acf.kollektion;
            klon.querySelector(".prod_dial").textContent = post.acf.dial;
            klon.querySelector(".prod_rem").textContent = post.acf.rem;
            klon.querySelector(".prod_pris").textContent = post.acf.pris + "kr.";


            klon.querySelector(".product_container").addEventListener("click",() =>{

                 window.location.href = "ure_single_page.html?id=" + post.id;


            });


            console.log(post.acf.pris);
            //Udskriver
            postOutput.appendChild(klon);

        }


    })
}
