 export function editContact(i, contacts, form, addbtn,editIndex) {
   const c = contacts[i];
   form.username.value = c.username;
   form.email.value = c.email;
   form.phone.value = c.phone;
    editIndex = i
   addbtn.innerText = "Update contact";
}
 
export function deleteContact(i) {
  deleteIndex = i; // store which contact to delete
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
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