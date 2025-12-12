'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const formProducto = document.getElementById('form-producto');
    const listaProductos = document.getElementById('lista-productos');

    // Función para renderizar la lista de productos
    const listarProductos = () => {
        listaProductos.innerHTML = ''; // Limpia la tabla
        
        ManejadorDB.obtenerTodosLosProductos()
            .then(productos => {
                productos.forEach(producto => {
                    // Usa el método estático de Producto para obtener la fila <tr>
                    const tr = Producto.devolverTRProducto(producto);
                    listaProductos.appendChild(tr);
                });
            })
            .catch(error => {
                console.error("Error al obtener y listar productos:", error);
                // Aquí podrías mostrar un mensaje de error en la interfaz
            });
    };

    // Maneja el envío del formulario
    formProducto.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtiene valores del formulario. Se usa .value || null para asegurar que se guarda null/vacío 
        // si el campo es opcional, lo que luego es manejado por getValue() en Producto.js.
        const item = document.getElementById('item').value;
        // Convierte cantidad a número, si no es válido o está vacío, será null
        const cantidadInput = document.getElementById('cantidad').value;
        const cantidad = (cantidadInput === "") ? null : parseInt(cantidadInput); 
        const precioUnidad = document.getElementById('precioUnidad').value;
        const marca = document.getElementById('marca').value;
        
        // Crea una instancia de Producto
        const nuevoProducto = new Producto(item, cantidad, precioUnidad, marca);

        // Inserta en la base de datos
        ManejadorDB.insertarProducto(nuevoProducto)
            .then(() => {
                // Si la inserción es exitosa, se vuelve a listar para actualizar la interfaz
                listarProductos();
            
                document.getElementById('item').value = '';
                document.getElementById('precioUnidad').value = '';
                document.getElementById('marca').value = '';
            })
            .catch(error => {
                console.error("Error al insertar producto:", error);
                alert("Error al guardar el producto. Revisa la consola.");
            });
    });


    listarProductos();
});