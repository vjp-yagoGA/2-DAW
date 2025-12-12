'use strict';

// Clase Producto (PARTE 1)
class Producto {
    // Constructor que recibe y guarda los parámetros como atributos [cite: 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
    constructor(item, cantidad, precioUnidad, marca) {
        this.item = item;
        this.cantidad = cantidad;
        this.precioUnidad = precioUnidad;
        this.marca = marca;
    }

    /**
     * Devuelve un elemento <tr> con la información del producto.
     * @param {Object} producto El objeto producto a mostrar (incluye campos de IndexedDB como 'id').
     * @returns {HTMLElement} El elemento <tr> para la tabla.
     */
    static devolverTRProducto(producto) {
        let tr = document.createElement('tr');
        
        // Función auxiliar para obtener el valor o "-" si está vacío/nulo, según requisito [cite: 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71]
        const getValue = (value) => (value === null || value === undefined || value === '' || (typeof value === 'number' && isNaN(value))) ? "-" : value;

        tr.innerHTML = `
            <td>${getValue(producto.item)}</td>
            <td>${getValue(producto.cantidad)}</td>
            <td>${getValue(producto.precioUnidad)}</td>
            <td>${getValue(producto.marca)}</td>
        `;

        // Se guarda el ID de IndexedDB en el dataset para una posible manipulación posterior
        if (producto.id) {
            tr.dataset.id = producto.id;
        }
        
        return tr;
    }
}