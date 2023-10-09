
        function generarTarjeta() {
            var nombre = document.getElementById("nombre").value;
            var cargo = document.getElementById("cargo").value;
            var empresa = document.getElementById("empresa").value;
            var contacto = document.getElementById("contacto").value;

            document.getElementById("nombreTarjeta").innerText = nombre;
            document.getElementById("cargoTarjeta").innerText = cargo;
            document.getElementById("empresaTarjeta").innerText = empresa;
            document.getElementById("contactoTarjeta").innerText = contacto;

            document.getElementById("tarjeta").style.display = "block";
        }
  