const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

let currentSlide = 0;

const updateBanner = (index) => {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
    dots.forEach(d => d.classList.remove('dot_selected'));
    dots[index].classList.add('dot_selected');
};

if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        updateBanner(currentSlide);
    });
    
    arrowRight.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        updateBanner(currentSlide);
    });
} else {
    console.error('Arrows not found');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateBanner(currentSlide);
        console.log(`Dot ${index + 1} clicked`);
    });
});

updateBanner(currentSlide);


