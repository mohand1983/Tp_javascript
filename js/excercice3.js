
onchange = () => {
    const selectElmt = document.getElementById("selection_pays");
    const valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;
    //const textselectionne = selectElmt.options[selectElmt.selectedIndex].text;
    //alert(valeurselectionnee);
    if (valeurselectionnee == "france") {
        fetch("http://universities.hipolabs.com/search?country=France")
            .then(response => {
                console.log(`response.status`, response.status);
                return response.json();
            })
            .then(data => {
                console.log(`donnée récupérée : `, data);
                renderUniversities(data);
            })
            .catch(error => {
                console.log(`Erreur catchée dans fetch :`, error);
            });





    } else if (valeurselectionnee == "allemagne") {
        fetch("http://universities.hipolabs.com/search?country=Germany")
            .then(response => {
                console.log(`response.status`, response.status);
                return response.json();
            })
            .then(data => {
                console.log(`donnée récupérée : `, data);
                renderUniversities(data);
            })
            .catch(error => {
                console.log(`Erreur catchée dans fetch :`, error);
            });



    } else if (valeurselectionnee == "andorre") {
        fetch("http://universities.hipolabs.com/search?country=Andorra")
            .then(response => {
                console.log(`response.status`, response.status);
                return response.json();
            })
            .then(data => {
                console.log(`donnée récupérée : `, data);
                renderUniversities(data);
            })
            .catch(error => {
                console.log(`Erreur catchée dans fetch :`, error);
            });



    }
};


/**
* Crée un élément du DOM et le retourne
* @param {String} markupname 
* @param {String} text 
* @param {DomElement} parent 
* @param {Array} attributes
* @return {DomElement}
*/
function createDOMElement(markupname, text, parent, attributes = []) {
    const dom_element = document.createElement(markupname);
    dom_element.textContent = text;
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
function renderUniversities(data) {
    const section = createDOMElement("section", "", document.body, [{ name: "style", value: "display:flex; justify-content: space-evenly; flex-wrap: wrap;" }]);
    data.forEach(universitie => {
        const article = createDOMElement("article", "", section, [{ name: "style", value: "border: 1px solid blue; padding: 20px; margin: 30px 0; flex-basis: 28%;" }]);
        const title = createDOMElement("h2", universitie.name, article);

    })
}
