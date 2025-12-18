<?php
session_start();
$bgcolor = isset($_SESSION['bgcolor']) ? $_SESSION['bgcolor'] : 'white';

if (isset($_GET['vaciar']) && $_GET['vaciar'] == 'true') {
    session_destroy();
    header('Location: 408fondoSesion1.php');
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cambio de Fondo con Sesión (Página 2)</title>
</head>
<body bgcolor="<?php echo htmlspecialchars($bgcolor); ?>">
    <p>El color de fondo actual es: <?php echo ucfirst($bgcolor); ?></p>
    <a href="408fondoSesion1.php">Volver a la página anterior</a>
    <br>
    <a href="?vaciar=true">Vaciar sesión y volver</a>
</body>
</html>