<?php
session_start();

if (isset($_POST['color'])) {
    $_SESSION['fondo'] = $_POST['color'];
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

$bgcolor = isset($_SESSION['fondo']) ? $_SESSION['fondo'] : 'white';


include 'Ej-408.html';
?>