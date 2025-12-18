<?php
if (isset($_GET['reset']) && $_GET['reset'] == 'true') {
    setcookie('visitas', '', time() - 3600); // 
    header('Location: ' . $_SERVER['PHP_SELF']);
    exit;
}

$visitas = isset($_COOKIE['visitas']) ? (int)$_COOKIE['visitas'] + 1 : 1;
setcookie('visitas', $visitas, time() + 3600 * 24 * 365); 
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Contador de Visitas</title>
</head>
<body>
    <?php if ($visitas == 1): ?>
        <p>¡Bienvenido! Esta es tu primera visita.</p>
    <?php else: ?>
        <p>Has visitado esta página <?php echo $visitas; ?> veces.</p>
    <?php endif; ?>
    <a href="?reset=true">Reiniciar contador</a>
</body>
</html>
