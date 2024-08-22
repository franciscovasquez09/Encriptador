const encriptaciones = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const desencriptaciones = Object.fromEntries(
    Object.entries(encriptaciones).map(([key, value]) => [value, key])
);

let resultadoGenerado = false;

function encriptar() {
    let texto = document.getElementById("inputText").value;
    if (texto) {
        let textoEncriptado = texto.split('').map(char => {
            return encriptaciones[char] || char;
        }).join('');
        document.getElementById("outputText").value = textoEncriptado;
        resultadoGenerado = true; 
        document.getElementById("inputText").value = ''; 
    }
}

function desencriptar() {
    let texto = document.getElementById("outputText").value;
    if (texto) {
        let textoDesencriptado = texto;
        for (const [key, value] of Object.entries(desencriptaciones)) {
            textoDesencriptado = textoDesencriptado.split(key).join(value);
        }
        document.getElementById("outputText").value = textoDesencriptado;
        resultadoGenerado = true; 
    }
}

function copiarTexto() {
    let texto = document.getElementById("outputText").value;
    if (texto && resultadoGenerado) {
        navigator.clipboard.writeText(texto).then(() => {
            document.getElementById("outputText").select(); 
            console.log("Texto copiado al portapapeles.");
        }).catch(err => {
            console.error("Error al copiar: ", err);
        });
    }
}

document.getElementById("inputText").addEventListener("input", function() {
    this.value = this.value.replace(/[^a-z]/g, ''); 
    resultadoGenerado = false; 
});
