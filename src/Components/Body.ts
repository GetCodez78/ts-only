
export class Body {
    constructor(func?:()=>void) {
        this.newFunction(func);
    }
    render() {
        let content = document.body.innerHTML = `<h1>This is from the Body</h1>`;
        return content;
    }

    private newFunction(func: () => void) {
        func();
    }
}

