const editModal = document.getElementById("editModal");
const moduleEditBtn = document.getElementById("moduleEditBtn");
const modalDiscardBtn = document.getElementById("editModalDiscardBtn");

const addModal = document.getElementById("addModal");
const createModuleBtn = document.getElementById("addModuleBtn");
const modalCancelBtn = document.getElementById("addModalCancelBtn");

moduleEditBtn.onclick = function() {
    editModal.classList.replace("hidden", "block");
}

modalDiscardBtn.onclick = function() {
    editModal.classList.replace("block", "hidden");
}

createModuleBtn.onclick = function() {
    addModal.classList.replace("hidden", "block");
}

modalCancelBtn.onclick = function() {
    addModal.classList.replace("block", "hidden");
}

/*
TODO: Add a function to handle multiple modals
provide trigger button, modal and action
*/