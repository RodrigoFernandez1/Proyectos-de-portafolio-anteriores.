// JavaScript para manejar el envío del formulario de contacto
document
  .getElementById("formularioContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    var formData = new FormData(this); // Obtener datos del formulario

    // Enviar datos del formulario mediante AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "enviar_email.php", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert("El mensaje ha sido enviado correctamente.");
        document.getElementById("formularioContacto").reset(); // Limpiar formulario
      } else {
        alert(
          "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
        );
      }
    };
    xhr.onerror = function () {
      alert("Error de conexión. Por favor, inténtalo de nuevo más tarde.");
    };
    xhr.send(formData);
  });
