const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  menuToggle.textContent = mainNav.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

const modal = document.getElementById("tripModal");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".view-trip").forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.trip;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// for more button
function nextCards() {
  const cards = document.getElementById("expeditions");

  const card = cards.querySelector(".trip-link");

  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 10;

  cards.scrollBy({
    left: cardWidth + gap,
    behavior: "smooth",
  });
}
//for previous button
function previousCards() {
  const cards = document.getElementById("expeditions");
  const card = cards.querySelector(".trip-link");

  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 10;

  cards.scrollBy({
    left: -(cardWidth + gap),
    behavior: "smooth",
  });
}
//for trek buttons
function nextTrekCards() {
  const cards = document.getElementById("trek-expeditions");
  const card = cards.querySelector(".trip-link");

  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 10;

  cards.scrollBy({
    left: cardWidth + gap,
    behavior: "smooth",
  });
}

function previousTrekCards() {
  const cards = document.getElementById("trek-expeditions");
  const card = cards.querySelector(".trip-link");

  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = 10;

  cards.scrollBy({
    left: -(cardWidth + gap),
    behavior: "smooth",
  });
}
//auto scroll
// ======================================
// INFINITE AUTO-SCROLL - TOUR PACKAGES
// ======================================

const tourContainer = document.getElementById("expeditions");

const tourCards = Array.from(tourContainer.querySelectorAll(".trip-link"));

// Duplicate the cards
tourCards.forEach((card) => {
  tourContainer.appendChild(card.cloneNode(true));
});

let tourAutoSlide;

function startTourAutoScroll() {
  tourAutoSlide = setInterval(() => {
    const card = tourContainer.querySelector(".trip-link");
    const gap = 10;
    const cardWidth = card.offsetWidth;

    tourContainer.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });

    // Reset after reaching the duplicated cards
    setTimeout(() => {
      if (tourContainer.scrollLeft >= tourContainer.scrollWidth / 2) {
        tourContainer.style.scrollBehavior = "auto";
        tourContainer.scrollLeft = 0;
        tourContainer.style.scrollBehavior = "smooth";
      }
    }, 700);
  }, 4000);
}

// ======================================
// INFINITE AUTO-SCROLL - TREK PACKAGES
// ======================================

const trekContainer = document.getElementById("trek-expeditions");

const trekCards = Array.from(trekContainer.querySelectorAll(".trip-link"));

// Duplicate the cards
trekCards.forEach((card) => {
  trekContainer.appendChild(card.cloneNode(true));
});

let trekAutoSlide;

function startTrekAutoScroll() {
  trekAutoSlide = setInterval(() => {
    const card = trekContainer.querySelector(".trip-link");
    const gap = 10;
    const cardWidth = card.offsetWidth;

    trekContainer.scrollBy({
      left: cardWidth + gap,
      behavior: "smooth",
    });

    // Reset after reaching the duplicated cards
    setTimeout(() => {
      if (trekContainer.scrollLeft >= trekContainer.scrollWidth / 2) {
        trekContainer.style.scrollBehavior = "auto";
        trekContainer.scrollLeft = 0;
        trekContainer.style.scrollBehavior = "smooth";
      }
    }, 700);
  }, 7000);
}
startTourAutoScroll();
startTrekAutoScroll();
