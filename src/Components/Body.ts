import Closure from './Closure';

export class Body {
    constructor(func?: () => void) {
        func();
        this.render();
    }

    render() {

        let closure = new Closure();
        closure.test();

        let elem = document.createElement('h1');
        let content = document.createTextNode('This is from the Body!!!');

        elem.appendChild(content);

        let mainElem = document.getElementById('App');
        mainElem.appendChild(elem);
    }

}

