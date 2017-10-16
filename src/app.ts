import header, { FixUP } from "./Components/Header"
import * as content from "./Components/Body";
import { Footer } from "./Components/Footer";
import *  as gn from "./Components/Generic";
import Closure from "./Components/Closure";
import ConsoleDemo from "./Components/ConsoleDemo";
import Products from "./Components/Products";
import * as functech from "./Components/FuncTech";
import * as gC from "./Components/GenColor";

let word = new header();

var footer = new Footer();

let fixup = new FixUP('Log this');

footer.yinyang('Mario', 'Luigi', () => {
    let Cexe = gC.genColor(9);
    fixup.nColor(Cexe['winter']);
});


let demo: () => void = () => {
    console.log(`this works like a charm`);
};

let body = new content.Body(demo);  // load dem from the constructor

word.BuildMsg('This is from the Header');

gn.inSpace('This is form the Generic File');

let obj = {
    firstname: 'mario', lastname: 'li', job: 'trader', skills: {
        1: 'coding', 2: 'trading', 3: 'selling'
    }
}

function Person(list: any) {
    console.log(list);
}

Person(obj.skills);

let gl = gC.genClr();

let ctrigger = new ConsoleDemo();

let cDemo = function callDemos() {
    ctrigger.countObj(gl); ctrigger.forEachObj(gl);
}

cDemo();

let products = new Products();

products.PhotoList();

let ft = new functech.default(functech.bE);








