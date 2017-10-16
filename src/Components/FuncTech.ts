class FuncTech {
    constructor(elem:any) {
        elem();
    }
}

export let cE = function createElem() {
    let elem = document.createElement('div'); 
    let text = document.createTextNode('Helo World');
    elem.appendChild(text);

    let mainElem = document.getElementById('App');
    mainElem.appendChild(elem);
}

export let bE = function createElem() {
    let elem = document.createElement('h1'); 
    let text = document.createTextNode('Helo Universe');
    elem.appendChild(text);

    let mainElem = document.getElementById('App');
    mainElem.appendChild(elem);
}

export default FuncTech;