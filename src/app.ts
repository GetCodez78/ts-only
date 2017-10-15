import header from "./Components/Header"
import { FixUP } from "./Components/Header"
import * as content from "./Components/Body";
import { Footer } from "./Components/Footer";
import *  as gn from "./Components/Generic";
import Closure from "./Components/Closure";

let word = new header();

var footer = new Footer();

let fixup = new FixUP('Log this');

function genColor(num: number): string {
    let arr = ['red', 'blue', 'green', 'orange', 'brown', 'black', 'purple', 'white', 'grey',
        'orange', 'white', 'red', 'green'];
    
    return arr[num];
}

let demo: () => void = () => {
    console.log(`this works like a charm`);
};

footer.yinyang('Mario', 'Luigi', () => {
    let Cexe = genColor(8);
    fixup.nColor(Cexe);
});

let body = new content.Body(demo);  // load dem from the constructor


word.BuildMsg('This is from the Header');

gn.inSpace('This is form the Generic File');


let obj = {
    firstname: 'mario', lastname: 'li', job: 'trader', skills: {
        1: 'coding', 2: 'trading', 3: 'selling'
    }
}

function Person(list: {}) {
    console.log(list);
}

Person(obj.skills);






