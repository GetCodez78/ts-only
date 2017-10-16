import Closure from './Closure';

export class Body {
    constructor(func?: () => void) {
        this.render();
    }

    render() {
        
        let content = document.body.innerHTML = `<h1>This is from the Body</h1>`;
        let closure = new Closure();
        closure.test();

        return content;
    }

    private newFunction(func: () => void) {
        func();
    }
}

