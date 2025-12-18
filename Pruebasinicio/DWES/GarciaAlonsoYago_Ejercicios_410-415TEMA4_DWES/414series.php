<?php
session_start();
if (!isset($_SESSION['logged_in']) || !$_SESSION['logged_in']) {
    header('Location: 410index.php');
    exit;
}

$series = $_SESSION['series'] ?? [];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Series</title>
</head>
<body>
    <h2>Listado de Series</h2>
    <ul>
        <?php foreach ($series as $serie): ?>
            <li><?php echo htmlspecialchars($serie); ?></li>
        <?php endforeach; ?>
    </ul>
    <nav>
        <a href="412peliculas.php">Ver Películas</a> |
        <a href="414series.php">Ver Series</a> |
        <a href="413logout.php">Cerrar Sesión</a>
    </nav>
</body>
</html>