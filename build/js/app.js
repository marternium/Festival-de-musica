document.addEventListener('DOMContentLoaded', () => {
    createGallery();
});

function createGallery(){
    const imageQuantity = 16;
    const gallery = document.querySelector('.gallery-images');

    for(let i = 1; i <= imageQuantity; i++){
        const image = document.createElement('img');
        image.src = `src/img/gallery/full/${i}.jpg`;
        image.alt = `Imagen de galería ${i}`;
        gallery.appendChild(image);
    }
}