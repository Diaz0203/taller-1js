function calcularCuota() {
    const monto = parseFloat(document.getElementById("monto").value);
    const tasaAnual = parseFloat(document.getElementById("tasa").value);
    const plazoAnios = parseFloat(document.getElementById("plazo").value);

    const tasaMensual = (tasaAnual / 12) / 100;
    const plazoMeses = plazoAnios * 12;

    const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazoMeses));
    const cuotaFormateada = cuota.toFixed(2);

    document.getElementById("resultado").textContent = `La cuota mensual es de $${cuotaFormateada}`;
}