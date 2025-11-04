<?php
session_start();
$colores = ['white', 'red', 'blue', 'green', 'yellow'];
$bgcolor = 'white';

if (isset($_POST['color'])) {
    $_SESSION['bgcolor'] = $_POST['color'];
    $bgcolor = $_SESSION['bgcolor'];
} elseif (isset($_SESSION['bgcolor'])) {
    $bgcolor = $_SESSION['bgcolor'];
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cambio de Fondo con Sesión (Página 1)</title>
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
    <a href="408fondoSesion2.php">Ir a la página 2</a>
</body>
</html>