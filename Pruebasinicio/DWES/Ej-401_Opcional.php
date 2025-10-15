<?php
$get_params = $_GET ?: null;
$post_params = $_POST ?: null;
$server_data = $_SERVER;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ej-401 Opcional</title>
</head>
<body>
    <h1>Ej-401 Opcional</h1>
    <div class="enlaces">
        <a href="Ej-401_enlace.html">Ir a Enlace</a> |
        <a href="Ej-401_post.html">Ir a Formulario</a>
    </div>

    <?php
    if ($get_params) {
        echo "<h2>Parámetros GET recibidos:</h2>";
        echo "<pre>" . print_r($get_params, true) . "</pre>";
    }

    if ($post_params) {
        echo "<h2>Parámetros POST recibidos:</h2>";
        echo "<pre>" . print_r($post_params, true) . "</pre>";
    }
    echo "<h2>HTTP_REFERER:</h2>";
    echo isset($server_data['HTTP_REFERER']) ? htmlspecialchars($server_data['HTTP_REFERER']) : "No proporcionado";
    echo "<h2>Contenido de \$_SERVER:</h2>";
    echo "<tr><th>Clave</th><th>Valor</th></tr>";
    foreach ($server_data as $key => $value) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($key) . "</td>";
        echo "<td>" . htmlspecialchars(is_array($value) ? print_r($value, true) : $value) . "</td>";
        echo "</tr>";
    }
    ?>
</body>
</html>




  

   