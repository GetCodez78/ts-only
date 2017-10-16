class Closure {

    test() {

        let shows: string[] = ['attack on titan', 'gotham', 'arrow', 
        'thirteen reasons why', 'stranger things','game of thrones', 
        'riverdale', 'true blood', 'family guy', 'simpsons'];

        for(let show in shows) {
        document.writeln('<div> <p>' + shows[show]);
        }
    }

}

export default Closure;