function toggleInfo(box) {
  box.classList.toggle("active");
}
//trip highlight
// Slideshow: auto-advance every 2s, swipeable on touch
(function () {
  const slider = document.getElementById("highlightSlider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".slide");
  const dots = slider.querySelectorAll(".dot");
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  function next() {
    goTo(current + 1);
  }

  function startAuto() {
    timer = setInterval(next, 2000);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  startAuto();

  // pause on hover (desktop)
  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);

  // swipe support
  let startX = 0;

  slider.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      stopAuto();
    },
    { passive: true },
  );

  slider.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 40) {
      goTo(current - 1); // swipe right -> previous
    } else if (diff < -40) {
      goTo(current + 1); // swipe left -> next
    }

    startAuto();
  });

  // dot click
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      stopAuto();
      goTo(i);
      startAuto();
    });
  });
})();
