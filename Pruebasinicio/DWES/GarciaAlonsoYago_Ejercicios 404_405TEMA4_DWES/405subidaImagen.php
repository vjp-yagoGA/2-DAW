<?php
$error = '';
$showForm = true;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['width']) && isset($_POST['height']) && is_numeric($_POST['width']) && is_numeric($_POST['height'])) {
        $width = htmlspecialchars($_POST['width']);
        $height = htmlspecialchars($_POST['height']);

        if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
            $type = $_FILES['file']['type'];

            if (strpos($type, 'image/') === 0) {
   
                $data = file_get_contents($_FILES['file']['tmp_name']);
                $base64 = 'data:' . $type . ';base64,' . base64_encode(
                    $data);

                echo "<h1>Imagen Subida Correctamente</h1>";
                echo "<img src=\"$base64\" width=\"$width\" height=\"$height\" alt=\"Imagen subida\">";
                $showForm = false;
            } else {
                $error = "Error: El archivo no es una imagen (tipo: $type). Por favor, sube solo imágenes (jpg, png, etc.).";
            }
        } else {
            $error = "Error al subir el archivo. Código: " . $_FILES['file']['error'];
        }
    } else {
        $error = "Error: Anchura y altura deben ser números válidos.";
    }
}

if ($showForm) {
    if ($error) {
        echo "<p style=\"color: red;\">$error</p>";
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Subida de Imagen</title>
</head>
<body>
    <h1>Subir Imagen</h1>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post" enctype="multipart/form-data">
        <label for="file">Selecciona una imagen:</label>
        <input type="file" id="file" name="file" accept="image/*"><br><br>
        
        <label for="width">Anchura (en píxeles):</label>
        <input type="number" id="width" name="width" min="1" required><br><br>
        
        <label for="height">Altura (en píxeles):</label>
        <input type="number" id="height" name="height" min="1" required><br><br>
        
        <input type="submit" value="Subir">
    </form>
</body>
</html>
<?php
}
?>