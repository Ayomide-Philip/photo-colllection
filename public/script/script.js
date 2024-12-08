var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2000, // 2 seconds
    disableOnInteraction: false, // Continue autoplay even after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Event listener to pause autoplay when user interacts (mouse enters)
document
  .querySelector(".swiper-container")
  .addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
  });

// Event listener to restart autoplay when mouse leaves the slider area
document
  .querySelector(".swiper-container")
  .addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });

// Optionally, you can add touchstart and touchend events to handle touch devices
document
  .querySelector(".swiper-container")
  .addEventListener("touchstart", function () {
    swiper.autoplay.stop();
  });

document
  .querySelector(".swiper-container")
  .addEventListener("touchend", function () {
    swiper.autoplay.start();
  });
