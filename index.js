let gauche = document.getElementById("gauche");
let droite = document.getElementById("droite");
let texteGauche = document.getElementById("texteGauche")
let texteDroite = document.getElementById("texteDroite")
const slide = [
    {"img1" : "c'est l'image 1"},
    {"img2":"c'est l'image 2"}
]

function clickGauche() {
    texteGauche.innerHTML = "Ta cliquer sur la Gauche";
    console.log("Le gauche fonctionne")   
}

function clickDroite() {
    texteDroite.innerHTML = "Ta cliquer sur la Droite";
    console.log("Le droite fonctionne")   
}


let functionGauche = gauche.addEventListener("click", clickGauche);
let functionDroite =droite.addEventListener("click", clickDroite);


