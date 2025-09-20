// import { deleteContact, editContact } from "./updatedelete.js";
import validateInput from "./validateInput.js";

const form = document.getElementById("contactForm");
const tableBody = document.querySelector("table tbody");
const addbtn = document.querySelector(".add-btn");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editIndex = null;

function save() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function renderDatatoTable() {
  tableBody.innerHTML = "";
  contacts.forEach((c, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${c.id}</td>
      <td>${c.username}</td>
      <td>${c.email}</td>
      <td>${c.phone}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn" >Delete</button>
      </td>
    `;

    row
      .querySelector(".edit-btn")
      .addEventListener("click", () => editContact(i));
    row
      .querySelector(".delete-btn")
      .addEventListener("click", () => deleteContact(i));
    tableBody.appendChild(row);
  });
}

// function validateInput() {
//   let valid = true;

//   const username = form.username.value.trim();
//   const email = form.email.value.trim();
//   const phone = form.phone.value.trim();

//   const usernameError = document.getElementById("usernameError");
//   const emailError = document.getElementById("emailError");
//   const phoneError = document.getElementById("phoneError");

//   usernameError.textContent = "";
//   emailError.textContent = "";
//   phoneError.textContent = "";

//   if (username.length < 3) {
//     usernameError.textContent = "Username must be at least 3 characters.";
//     valid = false;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     emailError.textContent = "Please enter a valid email.";
//     valid = false;
//   }

//   const phonePattern = /^\d{10}$/;
//   if (!phonePattern.test(phone)) {
//     phoneError.textContent = "Phone must be 10 digits.";
//     valid = false;
//   }

//   return valid;
// }

// handel form summit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateInput()) return;

  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();

  if (editIndex === null) {
    const newContact = {
      id: Date.now(),
      username,
      email,
      phone,
    };
    contacts.push(newContact);
  } else {
    contacts[editIndex] = { ...contacts[editIndex], username, email, phone };
    editIndex = null;
  }

  save();
  renderDatatoTable();
  form.reset();
});

export function editContact(i) {
  const c = contacts[i];
  form.username.value = c.username;
  form.email.value = c.email;
  form.phone.value = c.phone;
  editIndex = i;
  addbtn.innerText = "Update contact";
}

export function deleteContact(i) {
  contacts.splice(i, 1);
  save();
  renderDatatoTable();
}

renderDatatoTable();
