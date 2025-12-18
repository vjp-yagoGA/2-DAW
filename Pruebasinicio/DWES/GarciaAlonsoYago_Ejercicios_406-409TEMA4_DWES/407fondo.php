<?php
$colores = ['white', 'red', 'blue', 'green', 'yellow'];
$bgcolor = 'white'; 

if (isset($_POST['color'])) {
    $bgcolor = $_POST['color'];
    setcookie('bgcolor', $bgcolor, time() + 3600 * 24); 
} elseif (isset($_COOKIE['bgcolor'])) {
    $bgcolor = $_COOKIE['bgcolor'];
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cambio de Fondo con Cookies</title>
</head>
<body bgcolor="<?php echo htmlspecialchars($bgcolor); ?>">
    <form method="post">
        <label for="color">Elige un color de fondo:</label>
        <select name="color" id="color">
            <?php foreach ($colores as $color): ?>
                <option value="<?php echo $color; ?>" <?php if ($color == $bgcolor) echo 'selected'; ?>><?php echo ucfirst($color); ?></option>
            <?php endforeach; ?>
        </select>
        <button type="submit">Cambiar</button>
    </form>
</body>
</html>