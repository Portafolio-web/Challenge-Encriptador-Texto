document.getElementById('encrypt-btn').addEventListener('click', function() {
    const textarea = document.getElementById('my-textarea').value;
    if (validateInput(textarea)) {
        const result = encrypt(textarea);
        document.getElementById('result').innerText = result;
        document.getElementById('copy-btn').style.display = 'inline'; // Muestra el botón de copiar

        // Ocultar el encabezado, imagen y párrafo
        document.getElementById('header-text').style.display = 'none';
        document.getElementById('header-image').style.display = 'none';
        document.getElementById('result').style.display = 'block'; // Asegúrate de mostrar el resultado
    }
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
    const textarea = document.getElementById('my-textarea').value;
    if (validateInput(textarea)) {
        const result = decrypt(textarea);
        document.getElementById('result').innerText = result;
        document.getElementById('copy-btn').style.display = 'none'; // Oculta el botón de copiar

        // Mostrar el encabezado, imagen y párrafo
        document.getElementById('header-text').style.display = 'none'; // Oculta el encabezado
        document.getElementById('header-image').style.display = 'none'; // Oculta la imagen
        document.getElementById('result').style.display = 'block'; // Asegúrate de mostrar el resultado
    }
});

document.getElementById('my-textarea').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita el comportamiento por defecto del Enter (como un salto de línea)
        document.getElementById('encrypt-btn').click(); // Simula un clic en el botón "Encriptar"
    }
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText)
});

function validateInput(text) {
    // Verifica si el texto contiene solo letras minúsculas, espacios y sin acentos ni caracteres especiales
    const regex = /^[a-z\s]+$/;
    if (!regex.test(text)) {
        alert('El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
        return false;
    }
    return true;
}

function encrypt(text) {
    let encrypted = text;
    encrypted = encrypted.replace(/e/g, "enter");
    encrypted = encrypted.replace(/i/g, "imes");
    encrypted = encrypted.replace(/a/g, "ai");
    encrypted = encrypted.replace(/o/g, "ober");
    encrypted = encrypted.replace(/u/g, "ufat");
    return encrypted;
}

function decrypt(text) {
    let decrypted = text;
    decrypted = decrypted.replace(/enter/g, "e");
    decrypted = decrypted.replace(/imes/g, "i");
    decrypted = decrypted.replace(/ai/g, "a");
    decrypted = decrypted.replace(/ober/g, "o");
    decrypted = decrypted.replace(/ufat/g, "u");
    return decrypted;
}