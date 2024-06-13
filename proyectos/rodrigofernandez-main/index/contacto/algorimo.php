<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];

    // Configura el destinatario y el asunto del correo
    $destinatario = "rodrigoo1.fernandezz@gmail.com";
    $asunto = "Nuevo mensaje de contacto";

    // Construye el cuerpo del correo
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo Electrónico: $correo\n\n";
    $cuerpo .= "Mensaje:\n$mensaje";

    // Envia el correo
    mail($destinatario, $asunto, $cuerpo);

    // Redirige al usuario después de enviar el correo
    header("Location: gracias.html");
    exit();
}
?>
