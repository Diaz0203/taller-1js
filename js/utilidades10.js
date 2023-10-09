function calcularLongitudes() {
    const inputArray = document.getElementById("inputArray").value;
    const matrizOriginal = inputArray.split(',');

    const longitudes = matrizOriginal.map(palabra => palabra.trim().length);

    document.getElementById("longitudes").textContent = longitudes.toString();
}