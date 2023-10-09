const autores = [
    "Albert Einstein",
    "Isaac Newton",
    "Leonardo da Vinci",
    "Stephen Hawking",
    "Marie Curie"
];

const citas = [
    "La imaginación es más importante que el conocimiento.",
    "Si he visto más lejos, ha sido por estar sentado en hombros de gigantes.",
    "La simplicidad es la máxima sofisticación.",
    "La verdadera discapacidad es una actitud negativa.",
    "La radioactividad no puede ser utilizada para destruir la humanidad."
];

function generarCita() {
    const autorAleatorio = autores[Math.floor(Math.random() * autores.length)];
    const citaAleatoria = citas[Math.floor(Math.random() * citas.length)];

    const citaCompleta = `${autorAleatorio} dijo: '${citaAleatoria}'`;

    document.getElementById("cita").textContent = citaCompleta;
}