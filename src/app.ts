import header from "./Components/Header"
import { FixUP } from "./Components/Header"
import * as content from "./Components/Body";
import { Footer } from "./Components/Footer";
import *  as gn from "./Components/Generic";

let word = new header();

var footer = new Footer();

let fixup = new FixUP('Log this');

function genColor(num: number): string {
    let arr = ['red', 'blue', 'green', 'orange', 'brown', 'black', 'purple', 'white', 'grey'];

    return arr[num];
}

var test = () => {
    console.log(`this works like a charm`);
};

footer.yinyang('Mario', 'Luigi', () => {
    let Cexe = genColor(8);
    fixup.nColor(Cexe);
});

function createBody() {
    var body = new content.Body(test);
    body.render();
}

createBody();

word.BuildMsg('This is from the Header');

gn.inSpace('This is form the Generic File');






