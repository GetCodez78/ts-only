class Generic implements GenContract<string, string[]> {
    constructor(name: string, job: string, skill: string) {

    }
    name: string;
    job: string;
    skills: string[];

    repeater(): () => void {
        throw new Error("Method not implemented.");
    }
    styler(): (style: string) => void {
        throw new Error("Method not implemented.");
    }

}

export function inSpace(msg: string) {

    console.log(msg);
}

interface GenContract<T, AR> {
    name: T;
    job: T;
    skills: AR;

    repeater(): () => void;
    styler(): (style: string) => void;

}

class General extends Generic {
    id: number;

    obj: {} = {'you': 'me'};

    constructor(name: string, job: string, skill: string, id: number) {
        super(name, job, skill);  // name, job and body is the same as in the super class
        this.id = id;    // id is however, this id's id
    }

    repeater() {
        return () => console.log('This is the repeater override.');  // overrided of the repeater method in the base class
    }

    factory(obj: General = new General('chip', 'ninja', 'stealth', 22)) {  // Dependency Injection to the Argument?   
        obj.repeater();  // call this repeater
        super.repeater(); // call base class repeater 
    }

}

export default General;