const editModal = document.getElementById("editModal");
const moduleEditBtn = document.getElementById("editModule");
const modalDiscardBtn = document.getElementById("editModDiscardBtn");

const addModal = document.getElementById("addModal");
const moduleAddBtn = document.getElementById("addModuleBtn");
const modalCancelBtn = document.getElementById("addModCancelBtn");

moduleEditBtn.onclick = function() {
    editModal.classList.replace("hidden", "block");
}

modalDiscardBtn.onclick = function() {
    editModal.classList.replace("block", "hidden");
}

moduleAddBtn.onclick = function() {
    addModal.classList.replace("hidden", "block");
}

modalCancelBtn.onclick = function() {
    addModal.classList.replace("block", "hidden");
}

/*
TODO: Add a function to handle multiple modals
provide trigger button, modal and action
*/