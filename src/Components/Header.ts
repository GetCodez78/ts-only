
class Header {

    BuildMsg(msg: string) {
        let arr = [];
        let str = 'item';
        for (var n = 0; n < 10; n++) {
            arr.push(`${'<p>' + msg + [n]}`);
        }

        for (var i in arr) {
            document.write(arr[i]);
        }

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