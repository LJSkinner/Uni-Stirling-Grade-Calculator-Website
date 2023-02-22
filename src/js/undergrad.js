var modal = document.getElementById("editModal");
var moduleEditBtn = document.getElementById("editModule");
var modalDiscardBtn = document.getElementById("editModDiscardBtn");

moduleEditBtn.onclick = function() {
    modal.classList.replace("hidden", "block");
}

modalDiscardBtn.onclick = function() {
    modal.classList.replace("block", "hidden");
}

/*
TODO: Add a function to handle multiple modals
provide trigger button, modal and action
*/