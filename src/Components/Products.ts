
class Products {

    PhotoList() {

        let frame = document.createElement('div');
        frame.style.backgroundColor = 'white';

        for (let item in photos) {

            let photo = document.createElement('img');
            photo.src = './src/images/' + photos[item];
            photo.style.width = '30rem';
            photo.style.padding = '5px';
            photo.id = 'Photo' + item;
            frame.appendChild(photo);
            let mainElem = document.getElementById('App');
            mainElem.appendChild(frame);

        }

        this.onClickPhoto();

    }

    onClickPhoto() {
        for (let photo in photos) {
            let ckphoto = document.getElementById('Photo' + photo);
            ckphoto.onclick = () => confirm(photos[photo] + ' was clicked...');
        }

    }

}

let photos: string[] = ['ghs.jpg', 'kakashi_baby_c.jpg', 'kakashi_baby.jpg', 'mgs4.jpg'];

export default Products;