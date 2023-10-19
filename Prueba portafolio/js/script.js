// Cambiar entre los archivos HTML de español e inglés
function toggleLanguage() {
    // Verificar la URL actual para determinar el idioma actual
    const isSpanish = window.location.href.includes('index.html');

    // Redirigir al otro idioma
    if (isSpanish) {
        window.location.href = 'index_ingles.html'; // Cambiar a la versión en inglés
    } else {
        window.location.href = 'index.html'; // Cambiar a la versión en español
    }
}

// Agregar un evento de clic al botón de cambio de idioma
const translateButton = document.getElementById('translate-button');
translateButton.addEventListener('click', toggleLanguage);



document.addEventListener("DOMContentLoaded", function () {
    var downloadPDFButton = document.getElementById("downloadPDFButton");

    downloadPDFButton.addEventListener("click", function () {
        // Ruta al archivo PDF que deseas descargar
        var pdfUrl = "CV-JefteManuelBeltranPineda_.pdf";

        // Crea un enlace temporal
        var link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV-JefteManuelBeltranPineda_.pdf"; // Nombre que tendrá el archivo descargado

        // Simula un clic en el enlace para iniciar la descarga
        link.click();
    });
});
