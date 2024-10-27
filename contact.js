function enviarCorreo() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("textarea").value;

    // Codifica el mensaje para incluirlo en el correo electrónico
    const subject = "Consulta desde la Página Web";
    const mailtoLink = `mailto:javichav1.jp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Email: ${email}\n\nMensaje: ${message}`)}`;

    // Redirige al cliente de correo
    window.open(mailtoLink, "_blank");
}

function compartirMensaje(event) {
    event.preventDefault(); // Previene el envío normal del formulario

    const email = document.getElementById("email").value;
    const message = document.getElementById("textarea").value;

    // Texto que se compartirá
    const shareText = `Email: ${email}\n\nMensaje: ${message}`;

    // Verifica si el navegador soporta la API de Web Share
    if (navigator.share) {
        navigator.share({
            title: "Consulta desde la Página Web",
            text: shareText
        })
        .then(() => console.log("Mensaje compartido con éxito"))
        .catch(error => console.error("Error al compartir:", error));
    } else {
        alert("La funcionalidad de compartir no está disponible en este navegador.");
    }
}