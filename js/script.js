const carousels = document.querySelectorAll('.carrossel');
const scrollStep = 200 + 10;

carousels.forEach(carousel => {
    
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    const scrollContainer = carousel.querySelector('.carrossel-container'); 

    if (!prevButton || !nextButton || !scrollContainer) {
        return; 
    }

    nextButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scrollContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    }, 4000); 
});