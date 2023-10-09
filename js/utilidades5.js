const palabras = ["manzana", "pera", "uva", "fresa", "kiwi"];
        let palabraSecreta = elegirPalabraAleatoria(palabras);
        let letrasAdivinadas = [];
        let intentosRestantes = 6;

        function elegirPalabraAleatoria(lista) {
            const indice = Math.floor(Math.random() * lista.length);
            return lista[indice];
        }

        function mostrarPalabra() {
            let palabraMostrada = "";
            for (let letra of palabraSecreta) {
                if (letrasAdivinadas.includes(letra)) {
                    palabraMostrada += letra;
                } else {
                    palabraMostrada += "_";
                }
                palabraMostrada += " ";
            }
            document.getElementById("palabra").textContent = palabraMostrada;
        }

        function adivinarLetra() {
            const letraAdivinada = document.getElementById("adivinanza").value.toLowerCase();
            if (letraAdivinada.length !== 1 || !/^[a-zA-Z]$/.test(letraAdivinada)) {
                document.getElementById("mensaje").textContent = "Ingresa una letra válida.";
                return;
            }

            if (letrasAdivinadas.includes(letraAdivinada)) {
                document.getElementById("mensaje").textContent = "Ya adivinaste esa letra.";
                return;
            }

            letrasAdivinadas.push(letraAdivinada);

            if (!palabraSecreta.includes(letraAdivinada)) {
                intentosRestantes--;
            }

            mostrarPalabra();
            document.getElementById("numIntentos").textContent = intentosRestantes;

            if (intentosRestantes === 0) {
                document.getElementById("mensaje").textContent = "¡Perdiste! La palabra era " + palabraSecreta;
                document.getElementById("adivinanza").disabled = true;
            } else if (!document.getElementById("palabra").textContent.includes("_")) {
                document.getElementById("mensaje").textContent = "¡Ganaste!";
                document.getElementById("adivinanza").disabled = true;
            } else {
                document.getElementById("mensaje").textContent = "";
            }
        }

        window.onload = function () {
            mostrarPalabra();
            document.getElementById("numIntentos").textContent = intentosRestantes;
        };