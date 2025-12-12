'use strict';

// Valores constantes
const nombreDB = 'Productos';
const versionDB = 1;
const almacenProductos = 'AlmacenProductos';
let db = null; // Objeto de la base de datos (se mantiene abierto si es posible)

// Clase ManejadorDB para gestionar la persistencia (PARTE 2)
class ManejadorDB {
    
    // Devuelve una Promise para abrir/crear la BD
    static abrirDB() {
        return new Promise((resolve, reject) => {
            // Si la conexión ya existe, la devolvemos
            if (db) {
                resolve(db);
                return;
            }

            let request = indexedDB.open(nombreDB, versionDB);

            request.onerror = (e) => {
                console.error("Error al abrir/crear la BD:", e);
                reject(e.target.error);
            };

            request.onsuccess = (e) => {
                db = e.target.result;
                resolve(db);
            };

            // Se ejecuta solo si la versión de la BD es nueva o mayor
            request.onupgradeneeded = (e) => {
                db = e.target.result;
                // Creamos el almacén de objetos si no existe
                if (!db.objectStoreNames.contains(almacenProductos)) {
                    // Usamos 'id' como keyPath con autoincremento para asegurar claves únicas
                    db.createObjectStore(almacenProductos, { keyPath: 'id', autoIncrement: true });
                }
            };
        });
    }

    // Devuelve una Promise para insertar un producto
    static insertarProducto(producto) {
        return new Promise((resolve, reject) => {
            ManejadorDB.abrirDB().then(db => {
                // 'readwrite' es necesario para modificar la BD
                let transaction = db.transaction([almacenProductos], 'readwrite');
                let store = transaction.objectStore(almacenProductos);
                
                // El objeto producto se añade, IndexedDB asignará el ID autoincremental
                let request = store.add(producto);

                request.onsuccess = (e) => {
                    // Opcionalmente, se puede adjuntar el ID generado al objeto JS
                    producto.id = e.target.result;
                    resolve(producto);
                };

                request.onerror = (e) => {
                    reject(e.target.error);
                };
            }).catch(reject);
        });
    }

    // Devuelve una Promise para obtener todos los productos
    static obtenerTodosLosProductos() {
        return new Promise((resolve, reject) => {
            ManejadorDB.abrirDB().then(db => {
                // 'readonly' para solo lectura
                let transaction = db.transaction([almacenProductos], 'readonly');
                let store = transaction.objectStore(almacenProductos);

                let request = store.getAll();

                request.onsuccess = (e) => {
                    resolve(e.target.result); // Array de objetos producto
                };

                request.onerror = (e) => {
                    reject(e.target.error);
                };
            }).catch(reject);
        });
    }
    
    // Aquí se podrían añadir métodos como limpiarAlmacen o eliminarProducto
}