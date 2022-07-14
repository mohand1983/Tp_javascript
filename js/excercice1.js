//Recupération de l'élement  P
let p = document.querySelector("p");
//Téléchargement de la page html
window.onload = function charger() {
    //cacher le paragraphe p 
    //p.hidden = true;
    p.style.visibility = "hidden"; // hide
    const page_dialogue = prompt("Voulez-vous voir le contenu de cette page o ou n?");
    if (page_dialogue == 'o' || page_dialogue == 'O') {
        p.style.visibility = "visible";
    } else if (page_dialogue == "n" || page_dialogue == "N")
        p.style.visibility = "hidden";

}


