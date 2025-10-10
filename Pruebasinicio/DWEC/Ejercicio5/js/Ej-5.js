const div = document.querySelector('#ContenedorGeneral');
if (div) {
    div.style.boxSizing = "border-box";
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.border = "1px solid red";
    div.style.color = "blue";
    div.style.background = "#9e9e9e";
}

document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('ContenedorGeneral');
    function actualizarDimensiones() {
        div.textContent = `${window.innerWidth} - ${window.innerHeight}`;
    }

    actualizarDimensiones();

    window.addEventListener('resize', actualizarDimensiones);
});
