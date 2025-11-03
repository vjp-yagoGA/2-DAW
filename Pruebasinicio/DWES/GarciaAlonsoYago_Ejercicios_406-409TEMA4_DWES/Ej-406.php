<?php
if (isset($_POST['reset'])) {
    setcookie('visitas', '', time() - 3600);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

if (!isset($_COOKIE['visitas'])) {
    setcookie('visitas', 1, time() + 3600 * 24);
    $mensaje = "Esta es tu primera visita.";
} else {
    $contador = $_COOKIE['visitas'] + 1;
    setcookie('visitas', $contador, time() + 3600 * 24);
    $mensaje = "Has visitado esta página $contador veces.";
}

include 'Ej-406.html';
?>

