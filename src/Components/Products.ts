
class Products {

    private photos: string[] = ['ghs.jpg', 'kakashi_baby_c.jpg', 'kakashi_baby.jpg', 'mgs4.jpg'];
    
    PhotoList() {

        let frame = document.createElement('div');
        frame.style.backgroundColor = 'white';

        for (let item in this.photos) {

            let photo = document.createElement('img');
            photo.src = './src/images/' + this.photos[item];
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
        for (let photo in this.photos) {
            let ckphoto = document.getElementById('Photo' + photo);
            ckphoto.onclick = () => confirm(this.photos[photo] + ' was clicked...');
        }

    }

}


export default Products;