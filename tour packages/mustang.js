// Mobile nav toggle
document.getElementById("menuToggle")?.addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Gallery slideshow — auto-advance every 2s, swipeable
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
  slider.addEventListener("mouseenter", stopAuto);
  slider.addEventListener("mouseleave", startAuto);

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
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 40) goTo(current - 1);
    else if (diff < -40) goTo(current + 1);
    startAuto();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      stopAuto();
      goTo(i);
      startAuto();
    });
  });
})();

// Itinerary day tabs
(function () {
  const tabs = document.querySelectorAll(".day-tab");
  const panels = document.querySelectorAll(".day-panel");
  const progressFill = document.getElementById("dayProgressFill");
  const totalDays = tabs.length;
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const day = tab.getAttribute("data-day");
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      panels.forEach((p) => {
        p.classList.toggle("active", p.getAttribute("data-panel") === day);
      });
      progressFill.style.width = (day / totalDays) * 100 + "%";
    });
  });
})();
