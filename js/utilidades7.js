function generarContrato() {
    const nombreCliente = document.getElementById("nombreCliente").value;
    const fechaInicio = document.getElementById("fechaInicio").value;
    const terminos = document.getElementById("terminos").value;

    const contrato = `CONTRATO LEGAL

    Entre las partes:
    - [Nombre de la Empresa], en adelante referida como "la Empresa", representada por [Nombre del Representante Legal].
    - ${nombreCliente}, en adelante referido como "el Cliente".

    Fecha de Inicio: ${fechaInicio}

    Términos y Condiciones:
    ${terminos}

    Este contrato tiene efecto desde la fecha de inicio mencionada anteriormente.

    Firma de la Empresa: __________________________
    Firma del Cliente: ___________________________

    Fecha: _____________________`;

    document.getElementById("contrato").textContent = contrato;
}   