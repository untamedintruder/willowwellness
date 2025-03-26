document.addEventListener("DOMContentLoaded", function () {
    const slidesWrapper = document.querySelector(".slides-wrapper");
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    // Clone first and last slides for infinite loop effect
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    slidesWrapper.appendChild(firstClone);
    slidesWrapper.insertBefore(lastClone, slidesWrapper.firstChild);

    function slideImages() {
        index++;
        slidesWrapper.style.transition = "transform 1.5s ease-in-out";
        slidesWrapper.style.transform = `translateX(-${index * 16.66}%)`;

        if (index === slides.length) {
            setTimeout(() => {
                slidesWrapper.style.transition = "none";
                slidesWrapper.style.transform = "translateX(-16.66%)"; 
                index = 1;
            }, 1500);
        }
    }

    setInterval(slideImages, 3000); // Change slide every 3 seconds
});

