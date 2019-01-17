const slider = (function () {

    let slideIndex = 1;
    showSlides(slideIndex);

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide = (n) => {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides"),
            dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
    }

    const nextBtn = document.querySelector(".nextSlide");
    const prevBtn = document.querySelector(".prevSlide");

    nextBtn.addEventListener('click', () => {
        plusSlides(1);
    });

    prevBtn.addEventListener('click', () => {
        plusSlides(-1);
    });

    const dots = [...document.querySelectorAll('.dot')];
    dots.forEach((box, i) => box.addEventListener('click', () => {
        currentSlide(i + 1)
    }));

})()
