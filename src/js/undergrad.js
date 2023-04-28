const editModal = document.getElementById("editModal");
const moduleEditBtn = document.getElementById("editModule");
const modalDiscardBtn = document.getElementById("emDiscardBtn");

const addModal = document.getElementById("addModal");
const createModBtn = document.getElementById("addModuleBtn");
const modalCancelBtn = document.getElementById("amCancelBtn");

moduleEditBtn.onclick = function() {
    editModal.classList.replace("hidden", "block");
}

modalDiscardBtn.onclick = function() {
    editModal.classList.replace("block", "hidden");
}

createModBtn.onclick = function() {
    addModal.classList.replace("hidden", "block");
}

modalCancelBtn.onclick = function() {
    addModal.classList.replace("block", "hidden");
}

/*
TODO: Add a function to handle multiple modals
provide trigger button, modal and action
*/