{
    let currentCarouselItem = 0;
    const allCarouselItems = document.querySelectorAll('#page-6 .one-bilet-block');
    
    const leftArrow = document.querySelector('.food-cort-left-arrow');
    const rightArrow = document.querySelector('.food-cort-right-arrow');

    leftArrow.onclick = function() {
        if (currentCarouselItem > 0) {
            document.querySelector('.food-cort-current-carousel-block').classList.remove('food-cort-current-carousel-block');
            currentCarouselItem--;
            allCarouselItems[currentCarouselItem].classList.add('food-cort-current-carousel-block');

            if (currentCarouselItem === 0) {
                document.querySelector("#page-6 .bilets-left-arrow .arrow-img").src = 'images/CarouselElements/Ellipse2B.svg';
            }

            if (currentCarouselItem === allCarouselItems.length - 2) {
                document.querySelector("#page-6 .bilets-right-arrow .arrow-img").src = 'images/CarouselElements/Ellipse2.svg';
            }
        }
    }

    rightArrow.onclick = function() {
        if (currentCarouselItem < allCarouselItems.length - 1) {
            document.querySelector('.food-cort-current-carousel-block').classList.remove('food-cort-current-carousel-block');
            currentCarouselItem++;
            allCarouselItems[currentCarouselItem].classList.add('food-cort-current-carousel-block');

            if (currentCarouselItem === 1) {
                document.querySelector("#page-6 .food-cort-left-arrow .arrow-img").src = 'images/CarouselElements/Ellipse2.svg';
            }

            if (currentCarouselItem === allCarouselItems.length - 1) {
                document.querySelector("#page-6 .food-cort-right-arrow .arrow-img").src = 'images/CarouselElements/Ellipse2B.svg';
            }
        }
    }
}