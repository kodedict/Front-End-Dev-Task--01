

let modal = document.getElementById("invoiceModal")

function activateModal() { 
    modal.style.display = "inline";
}
 
function closeModal() { 
    modal.style.display = "none";
}
 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}