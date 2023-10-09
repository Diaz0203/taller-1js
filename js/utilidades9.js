function capitalizarPrimerasLetras() {
    const inputString = document.getElementById("inputString").value;

    const palabras = inputString.split(" ");
    const palabrasCapitalizadas = palabras.map(palabra => {
        if (palabra.length > 0) {
            return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
        }
        return "";
    });

    const resultado = palabrasCapitalizadas.join(" ");
    document.getElementById("resultado").textContent = resultado;
}