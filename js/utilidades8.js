function filtrarPares() {
    const inputArray = document.getElementById("inputArray").value;
    const matrizOriginal = inputArray.split(',').map(Number);

    const numerosPares = matrizOriginal.filter(numero => numero % 2 === 0);

    document.getElementById("matrizOriginal").textContent = matrizOriginal.toString();
    document.getElementById("numerosPares").textContent = numerosPares.toString();
}