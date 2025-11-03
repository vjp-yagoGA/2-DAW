<?php
if (isset($_POST['color'])) {
    $color = $_POST['color'];
    setcookie('fondo', $color, time() + 3600 * 24);
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

$bgcolor = isset($_COOKIE['fondo']) ? $_COOKIE['fondo'] : 'white';


include 'Ej-407.html';
?>