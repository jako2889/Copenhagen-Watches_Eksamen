document.addEventListener("DOMContentLoaded", getJson);

//GLOBALE VARIABLER -------------------------

let allPost;

let postTarget = document.querySelector(".product_template");

let postOutput = document.querySelector(".product_wrapper");


let knap_kollektion = "alle ure";

let urlParams = new URLSearchParams(window.location.search);

let sPost = urlParams.get("data");

console.log(sPost);


//Hentf ---------------------------------------------------------------------------------------------------------------------------------------------------------
async function getJson() {

    let jsonObject = await fetch("https://magnusvjensen.dk/2_semester/eksamen/wordpress/wp-json/wp/v2/product/?per_page=100");

    allPost = await jsonObject.json();


    document.querySelectorAll(".filter_knap").forEach(knap =>{

        knap.addEventListener("click", filter)

    });

    knap_kollektion = sPost;
    visPost();
}


function filter() {



    knap_kollektion = this.getAttribute("data-knap_kollektion");


    console.log(knap_kollektion);



    postOutput.textContent ="";

    visPost();

}



//visPost ---------------------
function visPost() {

    //Gennemgår alle posts
    allPost.forEach(post => {
   console.log("FEST");


    document.querySelector(".fitler_header").textContent = knap_kollektion ;

          //SPLASH

         if(knap_kollektion == "alle ure"){

                document.querySelector(".ure_splash_wrapper").style.backgroundImage = "url(ASSETS/splash_2.jpg)";

            }

            if(knap_kollektion == "Frederiksberg"){

                document.querySelector(".ure_splash_wrapper").style.backgroundImage = "url(ASSETS/splash_fred.jpg)";

            }

         if(knap_kollektion == "Copenhagen"){

                document.querySelector(".ure_splash_wrapper").style.backgroundImage = "url(ASSETS/splash_cop.jpg)";

            }

         if(knap_kollektion == "Christiania"){

                document.querySelector(".ure_splash_wrapper").style.backgroundImage = "url(ASSETS/splash_chris.jpg)";



            }

         if(knap_kollektion == "Nyhavn"){

                document.querySelector(".ure_splash_wrapper").style.backgroundImage = "url(ASSETS/splash_ny.jpg)";

            }




        if(knap_kollektion == "alle ure"){

                    udSkrivPost(post);

        };

        if(knap_kollektion == post.acf.kollektion){

                    udSkrivPost(post);
            console.log("hej");

        };


        //Udskriver fra template til dokument
        function udSkrivPost(post) {





            //Kloner template elementerne
            let klon = postTarget.cloneNode(true).content;

            klon.querySelector(".prod_image").src = post.acf.image_prime.url;

            klon.querySelector(".prod_title").textContent = post.acf.title;
            klon.querySelector(".prod_kollektion").textContent = post.acf.kollektion;
            klon.querySelector(".prod_dial").textContent = post.acf.dial;
            klon.querySelector(".prod_rem").textContent = post.acf.rem;
            klon.querySelector(".prod_pris").textContent = post.acf.pris + " " + "kr.";



            klon.querySelector(".product_container").addEventListener("click",() =>{

                 window.location.href = "ure_single_page.html?id=" + post.id;


            });


            console.log(post.acf.pris);
            //Udskriver
            postOutput.appendChild(klon);

        }


    })
}
