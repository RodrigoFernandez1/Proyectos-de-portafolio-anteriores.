// Obtener elementos
var menu = document.getElementById("menu");
var dropdownMenu = document.getElementById("dropdownMenu");

// Agregar evento de clic al menú
menu.addEventListener("click", function() {
    // Alternar clase "active" en el menú desplegable
    dropdownMenu.classList.toggle("active");
});
