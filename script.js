// Función para mostrar el modal
function abrirContacto() {
    document.getElementById("modalContacto").style.display = "block";
}

// Función para ocultar el modal
function cerrarContacto() {
    document.getElementById("modalContacto").style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de la caja blanca
window.onclick = function(event) {
    let modal = document.getElementById("modalContacto");
    if (event.target == modal) {
        cerrarContacto();
    }
}

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}
