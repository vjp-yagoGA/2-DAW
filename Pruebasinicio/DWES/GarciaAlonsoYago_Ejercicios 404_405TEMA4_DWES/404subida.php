<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    if (isset($_POST['width']) && isset($_POST['height']) && is_numeric($_POST['width']) && is_numeric($_POST['height'])) {
        echo "<p>Datos recibidos correctamente:</p>";
        echo "<p>Anchura: " . htmlspecialchars($_POST['width']) . "</p>";
        echo "<p>Altura: " . htmlspecialchars($_POST['height']) . "</p>";
    } else {
        echo "<p>Error: Los campos de anchura y altura no se recibieron correctamente o no son numéricos.</p>";
    }

    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        echo "<p>Archivo recibido correctamente:</p>";
        echo "<p>Nombre: " . htmlspecialchars($_FILES['file']['name']) . "</p>";
        echo "<p>Tipo: " . htmlspecialchars($_FILES['file']['type']) . "</p>";
        echo "<p>Tamaño: " . ($_FILES['file']['size'] / 1024) . " KB</p>";
    } else {
        echo "<p>Error al recibir el archivo. Código de error: " . $_FILES['file']['error'] . "</p>";
    }
} else {
    echo "<p>Acceso no válido. Usa el formulario para subir datos.</p>";
}
?>