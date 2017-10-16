interface iFace {
    firstname: string;
    lastname: string;
    job: string;
    skills: string[];
    forEachObj: (x:any[]) => void;
    countObj: (x:any[]) => void;
}

export default iFace;