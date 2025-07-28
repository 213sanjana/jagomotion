// js/carousel.js
// Two independent carousels: desktop (3 per slide), mobile (1 per slide), each with its own navigation and looping

document.addEventListener('DOMContentLoaded', function () {
    // Desktop Carousel
    (function () {
        const track = document.getElementById('carouselDesktop');
        const nextBtn = document.getElementById('nextBtnDesktop');
        const prevBtn = document.getElementById('prevBtnDesktop');
        let currentSlide = 0;
        const slides = track.querySelectorAll('.carousel-slide');
        const realSlideCount = slides.length - 1; // last is clone

        function updateCarousel() {
            const slideWidth = slides[0].offsetWidth;
            track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            // Loop forward
            if (currentSlide >= realSlideCount) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlide = 0;
                    track.style.transform = `translateX(0)`;
                }, 800);
            }
            // Loop backward
            if (currentSlide < 0) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlide = realSlideCount - 1;
                    const slideWidth = slides[0].offsetWidth;
                    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                }, 800);
            }
        }

        function goToNextSlide() {
            currentSlide++;
            updateCarousel();
        }
        function goToPrevSlide() {
            if (currentSlide === 0) {
                const slideWidth = slides[0].offsetWidth;
                track.style.transition = 'none';
                currentSlide = realSlideCount;
                track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                void track.offsetWidth;
                setTimeout(() => {
                    track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    currentSlide = realSlideCount - 1;
                    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                }, 20);
            } else {
                currentSlide--;
                updateCarousel();
            }
        }

        let autoplay = setInterval(goToNextSlide, 8000);
        const carouselContainer = track.parentElement;
        carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplay));
        carouselContainer.addEventListener('mouseleave', () => { autoplay = setInterval(goToNextSlide, 8000); });
        nextBtn.addEventListener('click', () => { clearInterval(autoplay); goToNextSlide(); autoplay = setInterval(goToNextSlide, 8000); });
        prevBtn.addEventListener('click', () => { clearInterval(autoplay); goToPrevSlide(); autoplay = setInterval(goToNextSlide, 8000); });
        updateCarousel();
    })();

    // Mobile Carousel
    (function () {
        const track = document.getElementById('carouselMobile');
        const nextBtn = document.getElementById('nextBtnMobile');
        const prevBtn = document.getElementById('prevBtnMobile');
        let currentSlide = 0;
        const slides = track.querySelectorAll('.carousel-slide');
        const realSlideCount = slides.length - 1; // last is clone

        function updateCarousel() {
            const slideWidth = slides[0].offsetWidth;
            track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
            // Loop forward
            if (currentSlide >= realSlideCount) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlide = 0;
                    track.style.transform = `translateX(0)`;
                }, 800);
            }
            // Loop backward
            if (currentSlide < 0) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentSlide = realSlideCount - 1;
                    const slideWidth = slides[0].offsetWidth;
                    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                }, 800);
            }
        }

        function goToNextSlide() {
            currentSlide++;
            updateCarousel();
        }
        function goToPrevSlide() {
            if (currentSlide === 0) {
                const slideWidth = slides[0].offsetWidth;
                track.style.transition = 'none';
                currentSlide = realSlideCount;
                track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                void track.offsetWidth;
                setTimeout(() => {
                    track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    currentSlide = realSlideCount - 1;
                    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                }, 20);
            } else {
                currentSlide--;
                updateCarousel();
            }
        }

        let autoplay = setInterval(goToNextSlide, 8000);
        const carouselContainer = track.parentElement;
        carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplay));
        carouselContainer.addEventListener('mouseleave', () => { autoplay = setInterval(goToNextSlide, 8000); });
        nextBtn.addEventListener('click', () => { clearInterval(autoplay); goToNextSlide(); autoplay = setInterval(goToNextSlide, 8000); });
        prevBtn.addEventListener('click', () => { clearInterval(autoplay); goToPrevSlide(); autoplay = setInterval(goToNextSlide, 8000); });
        updateCarousel();
    })();
}); 