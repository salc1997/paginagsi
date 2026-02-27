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

//menu desplegable

// Manejo del menú móvil y dropdown
document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');

    if (window.innerWidth <= 768) {
        dropbtn.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que salte a la página de servicios de inmediato
            dropdown.classList.toggle('show');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');

    dropbtn.addEventListener('click', function(e) {
        // SI ES MÓVIL (pantalla menor a 769px)
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Evita que salte a la página de servicios
            dropdown.classList.toggle('active-mobile'); // Abre/Cierra el menú
        } 
        // SI ES PC, el clic normal funcionará y te llevará a servicios.html
    });
});