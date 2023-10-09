document.addEventListener("DOMContentLoaded", function () {
    const inventario = {};

    const agregarForm = document.getElementById("agregar-form");
    const ventaForm = document.getElementById("venta-form");
    const resultado = document.getElementById("resultado");

    agregarForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const precio = parseFloat(document.getElementById("precio").value);
        const cantidad = parseInt(document.getElementById("cantidad").value);

        if (!nombre || isNaN(precio) || isNaN(cantidad)) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }

        if (nombre in inventario) {
            alert("El producto ya existe en el inventario.");
        } else {
            inventario[nombre] = { precio, cantidad };
            alert(`Producto '${nombre}' agregado al inventario.`);
            agregarForm.reset();
        }
    });

    ventaForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const producto = document.getElementById("producto").value;
        const cantidadVenta = parseInt(document.getElementById("cantidad-venta").value);

        if (!producto || isNaN(cantidadVenta)) {
            alert("Por favor, complete todos los campos correctamente.");
            return;
        }

        if (producto in inventario) {
            if (inventario[producto].cantidad >= cantidadVenta) {
                const totalVenta = inventario[producto].precio * cantidadVenta;
                inventario[producto].cantidad -= cantidadVenta;
                resultado.innerHTML = `Venta exitosa. Total de ventas: $${totalVenta}. Stock actual: ${inventario[producto].cantidad} unidades.`;
                ventaForm.reset();
            } else {
                alert("No hay suficiente stock para realizar esta venta.");
            }
        } else {
            alert("El producto no existe en el inventario.");
        }
    });
});

