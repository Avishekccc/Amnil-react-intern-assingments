// import { deleteContact, editContact } from "./updatedelete.js";
import { editContact } from "./updatedelete.js";
import validateInput from "./validateInput.js";

const form = document.getElementById("contactForm");
const tableBody = document.querySelector("table tbody");
const addbtn = document.querySelector(".add-btn");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
let editIndex = null;
let deleteIndex = null;

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
      .addEventListener("click", () => editContact(i,contacts,form,addbtn,editIndex));
    row
      .querySelector(".delete-btn")
      .addEventListener("click", () => deleteContact(i ));
    tableBody.appendChild(row);
  });
}

// handel form summit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateInput(form)) return;

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
  addbtn.innerText = "Add contact";
});




function deleteContact(i) {
  deleteIndex = i; // store which contact to delete
  const modal = document.getElementById("modal");
  modal.style.display = "flex"; // open modal
}

// Handle confirm
document.getElementById("confirmDelete").addEventListener("click", () => {
  if (deleteIndex !== null) {
    contacts.splice(deleteIndex, 1);
    save();
    renderDatatoTable();
    deleteIndex = null;
  }
  document.getElementById("modal").style.display = "none";
});

// Handle cancel
document.getElementById("cancelDelete").addEventListener("click", () => {
  deleteIndex = null;
  document.getElementById("modal").style.display = "none";
});

renderDatatoTable();
