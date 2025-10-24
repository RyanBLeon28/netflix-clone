const carousels = document.querySelectorAll('.carrossel');
const scrollStep = 200 + 10;

const menuIcon = document.querySelector('.menu-icon');

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

    const movieImages = carousel.querySelectorAll('.movies img');
    movieImages.forEach(image => {
        image.addEventListener('click', () => {
            window.location.href = 'netflix.html';
        })
    })

    setInterval(() => {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 10) {
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scrollContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
        }
    }, 4000); 
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100px";
  document.getElementById("main").style.marginLeft = "250px";
  menuIcon.style.display = 'none';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  menuIcon.style.display = 'block';
  document.body.style.backgroundColor = "white";
}