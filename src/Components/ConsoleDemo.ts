import iFace from '../Interfaces/iFace';

class ConsoleDemo implements iFace {
    firstname: string;
    lastname: string;
    job: string;
    skills: string[];

    forEachObj(items: any[]) {

        for (let item in items) {
            console.log(items[item]);
        }
    }

    countObj(items: any[]) {

        for (let i: number = 0; i < items.length; i++) {
            typeof items[i] === 'string' ? console.log(items[i]) : console.log('thats it folks');
        }
    }

}

export default ConsoleDemo;