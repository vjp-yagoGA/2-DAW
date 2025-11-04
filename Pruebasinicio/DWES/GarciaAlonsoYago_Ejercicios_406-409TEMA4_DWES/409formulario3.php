<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $convivientes = $_POST['convivientes'] ?? 0;
    $aficiones = implode(', ', $_POST['aficiones'] ?? []);
    $menu = implode(', ', $_POST['menu'] ?? []);
} else {
    $convivientes = 0;
    $aficiones = '';
    $menu = '';
}

$nombre = $_SESSION['nombre'] ?? '';
$apellidos = $_SESSION['apellidos'] ?? '';
$email = $_SESSION['email'] ?? '';
$url = $_SESSION['url'] ?? '';
$sexo = $_SESSION['sexo'] ?? '';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario Completo</title>
</head>
<body>
    <h2>Datos Completos:</h2>
    <ul>
        <li>Nombre: <?php echo htmlspecialchars($nombre); ?></li>
        <li>Apellidos: <?php echo htmlspecialchars($apellidos); ?></li>
        <li>Email: <?php echo htmlspecialchars($email); ?></li>
        <li>URL: <?php echo htmlspecialchars($url); ?></li>
        <li>Sexo: <?php echo htmlspecialchars($sexo); ?></li>
        <li>Convivientes: <?php echo htmlspecialchars($convivientes); ?></li>
        <li>Aficiones: <?php echo htmlspecialchars($aficiones); ?></li>
        <li>Menú: <?php echo htmlspecialchars($menu); ?></li>
    </ul>
</body>
</html>