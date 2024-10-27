{
    let currentCarouselItem = 0;
    const allCarouselItems = document.querySelectorAll('#page-3 .one-bilet-block');
    
    const leftArrow = document.querySelector('.bilets-left-arrow');
    const rightArrow = document.querySelector('.bilets-right-arrow');

    leftArrow.onclick = function() {
        if (currentCarouselItem > 0) {
            document.querySelector('.bilets-current-carousel-block').classList.remove('bilets-current-carousel-block');
            currentCarouselItem--;
            allCarouselItems[currentCarouselItem].classList.add('bilets-current-carousel-block');

            if (currentCarouselItem === 0) {
                document.querySelector("#page-3 .bilets-left-arrow .arrow-img").src = 'images/CarouselElements/Ellipse1B.svg';
            }

            if (currentCarouselItem === allCarouselItems.length - 2) {
                document.querySelector("#page-3 .bilets-right-arrow .arrow-img").src = 'images/CarouselElements/Ellipse1.svg';
            }
        }
    }

    rightArrow.onclick = function() {
        if (currentCarouselItem < allCarouselItems.length - 1) {
            document.querySelector('.bilets-current-carousel-block').classList.remove('bilets-current-carousel-block');
            currentCarouselItem++;
            allCarouselItems[currentCarouselItem].classList.add('bilets-current-carousel-block');

            if (currentCarouselItem === 1) {
                document.querySelector("#page-3 .bilets-left-arrow .arrow-img").src = 'images/CarouselElements/Ellipse1.svg';
            }

            if (currentCarouselItem === allCarouselItems.length - 1) {
                document.querySelector("#page-3 .bilets-right-arrow .arrow-img").src = 'images/CarouselElements/Ellipse1B.svg';
            }
        }
    }
}