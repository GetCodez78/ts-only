class Closure {

    test() {

        let shows: string[] = ['attack on titan', 'gotham', 'arrow',
            'thirteen reasons why', 'stranger things', 'game of thrones',
            'riverdale', 'true blood', 'family guy', 'simpsons'];



        for (let show in shows) {

            let text = document.createElement('p');

            let node = document.createTextNode(shows[show]);

            text.appendChild(node);

            let app = document.getElementById('App');

            app.appendChild(text);

        }



    }

}

export default Closure;