function initCarousel() {
  let carouselInner = document.querySelector('.carousel__inner');
  let carouselInnerWidth = carouselInner.offsetWidth;
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let step = 0;
  let offset = 0;

  arrowLeft.style.display = 'none';

  document.addEventListener('click', function(event) {
    let arrow = event.target;

    if (arrow.closest('.carousel__arrow_right')) { 
      step++;  
      offset = -carouselInnerWidth * step;
      carouselInner.style.transform = `translateX(${offset}px)`;
    } else if (arrow.closest('.carousel__arrow_left')) {
      step--;
      offset = -carouselInnerWidth * step;
      carouselInner.style.transform = `translateX(${offset}px)`;
    } else {
      return;
    }

    switch (step) {
      case 0:
        arrowLeft.style.display = 'none';
        break;
      case (carouselInner.children.length - 1):
        arrowRight.style.display = 'none';
        break;
      default:
        arrowLeft.style.display = ''
        arrowRight.style.display = ''
    }

  }); 
}
