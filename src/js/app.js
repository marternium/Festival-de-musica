document.addEventListener('DOMContentLoaded', () => {
    fixedNav();
    createGallery();
    linkHighlight();
    scrollNav();
});

function fixedNav(){
    const header = document.querySelector(".header");
    const festival = document.querySelector(".festival");

    document.addEventListener('scroll', () => {
        if(festival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}

function createGallery(){
    const imageQuantity = 16;
    const gallery = document.querySelector('.gallery-images');

    for(let i = 1; i <= imageQuantity; i++){
        const image = document.createElement('picture');
        image.innerHTML = `
            <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
        `;
        image.onclick = () => {
            showImage(i);
        }
        gallery.appendChild(image);
    }
}

function showImage(i){
    const image = document.createElement('picture');
    image.innerHTML = `
        <source srcset="build/img/gallery/full/${i}.avif" type="image/avif">
        <source srcset="build/img/gallery/full/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${i}.jpg" alt="imagen galeria">
    `;

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

function linkHighlight() {
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navigation-main a');

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navigation-main a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const section = document.querySelector(e.target.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}