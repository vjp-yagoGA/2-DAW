<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $nombre = htmlspecialchars($_POST['nombre']);
    $primer_apellido = htmlspecialchars($_POST['primer_apellido']);
    $segundo_apellido = isset($_POST['segundo_apellido']) ? htmlspecialchars($_POST['segundo_apellido']) : ''; 
    $email = htmlspecialchars($_POST['email']);
    $ano_nacimiento = htmlspecialchars($_POST['ano_nacimiento']);
    $telefono = isset($_POST['telefono']) ? htmlspecialchars($_POST['telefono']) : ''; 

    echo "<div class='container datos-mostrados'>";
    echo "<h2>Datos Introducidos:</h2>";
    echo "<p><strong>Nombre:</strong> " . $nombre . "</p>";
    echo "<p><strong>Primer Apellido:</strong> " . $primer_apellido . "</p>";
    
    if (!empty($segundo_apellido)) {
        echo "<p><strong>Segundo Apellido:</strong> " . $segundo_apellido . "</p>";
    }
    
    echo "<p><strong>Email:</strong> " . $email . "</p>";
    echo "<p><strong>Año de Nacimiento:</strong> " . $ano_nacimiento . "</p>";
    
    if (!empty($telefono)) {
        echo "<p><strong>Teléfono:</strong> " . $telefono . "</p>";
    }
    echo "</div>";
}
?>