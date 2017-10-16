
class Header {

    BuildMsg(msg: string) {
        let arr = [];
        let str = 'item';
        for (var n = 0; n < 10; n++) {
            arr.push(`${msg + ' ' + [n]}`);
        }

        for (var i in arr) {
            let elem = document.createElement('h3');
            let text = document.createTextNode(arr[i]);
            elem.appendChild(text);
            let mainElem = document.getElementById('App').appendChild(elem);
        }

        let elem = document.createElement('input');
        elem.type = 'text';
        elem.placeholder = 'type your name here';
        let mainElem = document.getElementById('App').appendChild(elem);

    }
}

export class FixUP {
    constructor(msg?: string) {
        console.log(msg);
        this.nColor('red');
    }

    nColor(color: string) {
        document.body.style.backgroundColor = color;
    }
}


export default Header;