<?php
session_start();
if (!isset($_SESSION['logged_in']) || !$_SESSION['logged_in']) {
    header('Location: 410index.php');
    exit;
}

$peliculas = $_SESSION['peliculas'] ?? [];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Películas</title>
</head>
<body>
    <h2>Listado de Películas</h2>
    <ul>
        <?php foreach ($peliculas as $pelicula): ?>
            <li><?php echo htmlspecialchars($pelicula); ?></li>
        <?php endforeach; ?>
    </ul>
    <nav>
        <a href="412peliculas.php">Ver Películas</a> |
        <a href="414series.php">Ver Series</a> |
        <a href="413logout.php">Cerrar Sesión</a>
    </nav>
</body>
</html>