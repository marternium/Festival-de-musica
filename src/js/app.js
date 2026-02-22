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
        image.onclick = () => {
            showImage(i);
        }
        gallery.appendChild(image);
    }
}

function showImage(i){
    const image = document.createElement('img');
    image.src = `src/img/gallery/full/${i}.jpg`;
    image.alt = `Imagen de galería ${i}`;

    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.onclick = closeModal;

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'X';
    closeBtn.classList.add('btn-close');
    closeBtn.onclick = closeModal;

    modal.appendChild(image);
    modal.appendChild(closeBtn);
    document.body.classList.add('overflow-hidden');
    document.body.appendChild(modal);
}

function closeModal(){
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();
        document.body.classList.remove('overflow-hidden');
    }, 500);
}