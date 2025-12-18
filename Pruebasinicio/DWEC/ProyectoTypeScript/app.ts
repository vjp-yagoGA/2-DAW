function mostrarMensaje(): void {
    const elemento = document.getElementById('mensaje');
    if (elemento) {
        elemento.innerText = 'Hola Mundo';
    } else {
        console.error('Elemento no encontrado');
    }
}


window.addEventListener('DOMContentLoaded', mostrarMensaje);