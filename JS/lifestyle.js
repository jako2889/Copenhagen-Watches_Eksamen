document.addEventListener("DOMContentLoaded", getJson);

//GLOBALE VARIABLER -------------------------


let postTarget = document.querySelector(".insta_feed_template");

let postOutput = document.querySelector(".insta_feed_con");


//Hentf ---------------------------------------------------------------------------------------------------------------------------------------------------------
async function getJson() {

    let jsonObject = await fetch("https://magnusvjensen.dk/2_semester/eksamen/wordpress/wp-json/wp/v2/lifestyle/?per_page=100");

    allPost = await jsonObject.json();


    visPost();
}


//visPost ---------------------
function visPost() {

    //Gennemgår alle posts
    allPost.forEach(post => {

        //Udskriver fra template til dokument



            //Kloner template elementerne
            let klon = postTarget.cloneNode(true).content;

            klon.querySelector(".feed_img").src = post.acf.image.url;
            //Udskriver
            postOutput.appendChild(klon);

        console.log(post.acf.image.url);


    })
}
