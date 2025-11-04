<?php
session_start();

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if ($username === 'usuario' && $password === 'usuario') {
    $_SESSION['logged_in'] = true;
    $_SESSION['peliculas'] = ['Película 1', 'Película 2', 'Película 3'];
    $_SESSION['series'] = ['Serie 1', 'Serie 2', 'Serie 3'];
    header('Location: 412peliculas.php');
    exit;
} else {
    header('Location: 410index.php');
    exit;
}