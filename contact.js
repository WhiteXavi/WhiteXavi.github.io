function enviarCorreo() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("textarea").value;

    // Codifica el mensaje para incluirlo en el correo electrónico
    const subject = "Consulta desde la Página Web";
    const mailtoLink = `mailto:javichav1.jp@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Email: ${email}\n\nMensaje: ${message}`)}`;

    // Redirige al cliente de correo
    window.open(mailtoLink, "_blank");
}