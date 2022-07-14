/**
 * Crée un élément du DOM et le retourner
 * @param {String} markupname 
 * @param {String} text 
 * @param {DomElement} parent 
 * @param {Array} attributes
 * @return {DomElement}
 */
function createDOMElement(markupname, text, parent, attributes = []) {
    const dom_element = document.createElement(markupname);
    dom_element.innerHTML = text;
    parent.appendChild(dom_element);

    if (attributes.length) {
        attributes.forEach((attribute => {
            if (attribute.name && attribute.value) {
                dom_element.setAttribute(attribute.name, attribute.value);
            }
        }))
    }
    return dom_element;
}

// Création d'une balise header
const header = createDOMElement("header", "", document.body);


// Création des 3 boutons 


const boutonCompetences = createDOMElement("button", "Compétences", header, [{ name: "id", value: "btn-skills" }]);
const boutonExperience= createDOMElement("button", "Expérience", header, [{ name: "id", value: "btn-experience" }]);
const boutonFormation = createDOMElement("button", "Formation", header, [{ name: "id", value: "btn-training" }]);

//création d'une balise h1 après un clic sur le premier bouton 

boutonCompetences.onclick = function () {

    const h1 = createDOMElement("h1", "Compétences :", document.body);

    const Longtext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis tempora pariatur sint doloribus. Animi possimus, nulla corporis commodi explicabo id aspernatur placeat sapiente excepturi perferendis rerum ipsa cumque corrupti. Dolorem numquam veniam cum nulla est id ex quisquam, sit fugiat dicta nostrum quo, inventore reiciendis quia suscipit tenetur fugit repudiandae expedita totam voluptas.Blanditiis beatae praesentium in deserunt error.Consequuntur aliquam fuga veritatis dolor atque! Perferendisvoluptatum quod ipsa nulla consequatur esse quaerat unde nesciunt. Quam tenetur quia blanditiis voluptatibus, ipsam deleniti minuslaboriosam, animi ipsum, dicta similique quis ?Soluta facilis minus, quam unde excepturi fugiat quisquam eos cumque!Beatae similique rem facere consectetur! Nemo magni aliquam, corrupti maxime voluptatum odio quam aliquid mollitia ex vero excepturi maiores quis."

    const p = createDOMElement("p", Longtext, document.body);
    
    //(p.style.visibility = "hidden") && (h1.style.visibility = "hidden");
    
}

//création de la balise main et et un titre de niveau h1  ayant pour intitulé Expériences

    const main = createDOMElement("main", "", document.body);
boutonExperience.onclick = function () {

    const h1 = createDOMElement("h1", "Expérience :", main);
    const Longtext2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis tempora pariatur sint doloribus. Animi possimus, nulla corporis commodi explicabo id aspernatur placeat sapiente excepturi perferendis rerum ipsa cumque corrupti. Dolorem numquam veniam cum nulla est id ex quisquam, sit fugiat dicta nostrum quo, inventore reiciendis quia suscipit tenetur fugit repudiandae expedita totam voluptas.Blanditiis beatae praesentium in deserunt error.Consequuntur aliquam fuga veritatis dolor atque! Perferendisvoluptatum quod ipsa nulla consequatur esse quaerat unde nesciunt. Quam tenetur quia blanditiis voluptatibus, ipsam deleniti minuslaboriosam, animi ipsum, dicta similique quis ?Soluta facilis minus, quam unde excepturi fugiat quisquam eos cumque!Beatae similique rem facere consectetur! Nemo magni aliquam, corrupti maxime voluptatum odio quam aliquid mollitia ex vero excepturi maiores quis."
    const p = createDOMElement("p", Longtext2, main);
}
//création de la balise lain et et un titre de niveau h1  ayant pour intitulé Expériences


boutonFormation.onclick = function () {

    const h1 = createDOMElement("h1", "Formation :", main);
    const Longtext3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis tempora pariatur sint doloribus. Animi possimus, nulla corporis commodi explicabo id aspernatur placeat sapiente excepturi perferendis rerum ipsa cumque corrupti. Dolorem numquam veniam cum nulla est id ex quisquam, sit fugiat dicta nostrum quo, inventore reiciendis quia suscipit tenetur fugit repudiandae expedita totam voluptas.Blanditiis beatae praesentium in deserunt error.Consequuntur aliquam fuga veritatis dolor atque! Perferendisvoluptatum quod ipsa nulla consequatur esse quaerat unde nesciunt. Quam tenetur quia blanditiis voluptatibus, ipsam deleniti minuslaboriosam, animi ipsum, dicta similique quis ?Soluta facilis minus, quam unde excepturi fugiat quisquam eos cumque!Beatae similique rem facere consectetur! Nemo magni aliquam, corrupti maxime voluptatum odio quam aliquid mollitia ex vero excepturi maiores quis."
    const p = createDOMElement("p", Longtext3, main);
}


