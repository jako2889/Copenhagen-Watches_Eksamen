document.addEventListener("DOMContentLoaded", function () {
    runProgram();
})

async function runProgram() {


    let selected;
    let selectedID;
    let color;
    let active;
    let infoboks;

    // Load SVG

    let mySvg = await fetch("../SVG/interaktiv_svg_done-6.svg");
    let svg = await mySvg.text();

    document.querySelector("#blueprint").innerHTML = svg;

    //___________________________________________________________________________

    // FIND INFOBOKSE OG SKJUL DEM

    let info_1 = document.querySelector("#blueprint #info1");
    let info_2 = document.querySelector("#blueprint #info2");
    let info_3 = document.querySelector("#blueprint #info3");
    let info_4 = document.querySelector("#blueprint #info4-2");
    let info_5 = document.querySelector("#blueprint #info5-2");
    let info_6 = document.querySelector("#blueprint #info6");

    info_1.style.visibility = "hidden";
    info_2.style.visibility = "hidden";
    info_3.style.visibility = "hidden";
    info_4.style.visibility = "hidden";
    info_5.style.visibility = "hidden";
    info_6.style.visibility = "hidden";



    //___________________________________________________________________________

    // SKIFT FARVE VED KLIK OG VIS TEKST

    document.querySelector("#blueprint #ur-hel").addEventListener("click", function(event){

        clicked(event);

    });


    //____________________________________________________________


    // FUNKTION CLICKED

    function clicked(event){

        if(infoboks != undefined){
            infoboks.style.visibility = "hidden";

            infoboks.style.opacity = "0";
            infoboks.style.transition = "all 1s";
        }

        console.log(event.target);

        // find det klikkede element

        selected = event.target;

        //____________________________________________________________________

        // find det klikkede elements ID

        selectedID = selected.getAttribute("id");
        console.log(selectedID);

        //______________________________________________________________________


        // find det klikkede elements fillfarve

        color = selected.getAttribute("fill");
        console.log(color);


        //_________________________________________________________________________


        // Vis info bokse

        if(selectedID === "ur-glas-3"){
            info_2.style.visibility = "visible";
            infoboks = info_2;


        }
            if(selectedID === "ur-skive-2"){
            info_4.style.visibility = "visible";
                infoboks = info_4;
        }
            if(selectedID === "ur-stel-2"){
            info_3.style.visibility = "visible";
                infoboks = info_3;
        }
            if(selectedID === "ur-bund-2"){
            info_5.style.visibility = "visible";
                infoboks = info_5;
        }
            if(selectedID === "ur-rem2-2"){
            info_6.style.visibility = "visible";
                infoboks = info_6;
        }
            if(selectedID === "ur-rem1-2"){
            info_1.style.visibility = "visible";
                infoboks = info_1;
        }



        //___________________________________________________________________________




    // Hvis der tidligere har været klikket skal det forige element skifte farve til original

        if(active != undefined) {
            active.setAttribute("fill", color);
            active.style.opacity = "0.14";
        }

    //___________________________________________________________________________________________

    // Gør det klikkede til det aktive

        active = selected;

    //________________________________________________________________________________________________



    // Skift farve på det valgte

    if(color === "#fff"){
        document.querySelector("#"+selectedID).setAttribute("fill","#30403e");
        document.querySelector("#"+selectedID).style.opacity = "0.5";
        document.querySelector("#"+selectedID).style.transition = "all 1s";

        infoboks.style.transition = "all 1s";
        infoboks.style.opacity = "1";

    }

    //___________________________________________________________________________________________________

    // Reset farve og skjul tekst hvis valgt element allerede er aktivt

        else{
            document.querySelector("#"+selectedID).setAttribute("fill","#fff");
            infoboks.style.visibility = "hidden";
            document.querySelector("#"+selectedID).style.opacity = "0.14";

            infoboks.style.opacity = "0";
            infoboks.style.transition = "all 1s";
        }

    //_____________________________________________________________________________________


    //___________________________________________________________________________

            }

};
