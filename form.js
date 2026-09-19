// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");

  menuToggle.textContent = mainNav.classList.contains("open") ? "×" : "☰";
});

// Close menu after clicking a link

document.querySelectorAll("#mainNav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");

    menuToggle.textContent = "☰";
  });
});

// =========================
// INQUIRY FORM
// =========================

const form = document.getElementById("inquiryForm");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Disable button while sending
  submitBtn.disabled = true;

  submitBtn.textContent = "SENDING...";

  result.textContent = "";

  // Collect form information
  const formData = new FormData(form);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      result.textContent =
        "Your inquiry has been sent successfully! We will get back to you soon.";

      form.reset();
    } else {
      result.textContent = "Something went wrong. Please try again.";
    }
  } catch (error) {
    result.textContent = "Unable to send your inquiry. Please try again later.";
  }

  // Enable button again
  submitBtn.disabled = false;

  submitBtn.textContent = "SEND INQUIRY";
});
