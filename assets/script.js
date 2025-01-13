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

const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateBanner(currentSlide);
};

// Gestionnaire de clic pour la flèche gauche
function handleArrowLeftClick() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    updateBanner(currentSlide);
}

// Gestionnaire de clic pour la flèche droite
function handleArrowRightClick() {
    nextSlide();
}

// Gestionnaire de clic pour les points
function handleDotClick(index) {
    return () => {
        currentSlide = index;
        updateBanner(currentSlide);
        console.log(`Dot ${index + 1} clicked`);
    };
}

// Gestionnaire de pression de touche
function handleKeydown(event) {
    if (event.key === "ArrowRight") {
        nextSlide();
        console.log("Flèche droite pressée !");
    } else if (event.key === "ArrowLeft") {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = slides.length - 1;
        }
        updateBanner(currentSlide);
    }
}

// Initialisation des événements
function initEventListeners() {
    if (arrowLeft && arrowRight) {
        arrowLeft.addEventListener('click', handleArrowLeftClick);
        arrowRight.addEventListener('click', handleArrowRightClick);
    } else {
        console.error('Arrows not found');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', handleDotClick(index));
    });

    document.addEventListener("keydown", handleKeydown);
}

// Initialisation de l'intervalle pour le changement de slide automatique
function initAutoSlide() {
    setInterval(nextSlide, 3000);
}

// Appel des fonctions d'initialisation
initEventListeners();
initAutoSlide();