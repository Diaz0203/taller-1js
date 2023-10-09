
function generarGrafico() {
    const datosStr = document.getElementById("datos").value;
    const datos = datosStr.split(",").map(Number);

    const grafico = generarGraficoTexto(datos);

    document.getElementById("output").textContent = grafico;
    document.getElementById("grafico").style.display = "block";
}

function generarGraficoTexto(datos) {
    let grafico = "";

    for (let i = 0; i < datos.length; i++) {
        grafico += `${i + 1}: ${"*".repeat(datos[i])}\n`;
    }

    return grafico;
}
