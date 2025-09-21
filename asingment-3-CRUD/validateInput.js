// Validation
// const form = document.getElementById("contactForm");
// const tableBody = document.querySelector("table tbody");

export default function validateInput(form) {
  let valid = true;

  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();

  const usernameError = document.getElementById("usernameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");

  usernameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";

  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters.";
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  }

  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    phoneError.textContent = "Phone must be 10 digits.";
    valid = false;
  }

  return valid;
}
