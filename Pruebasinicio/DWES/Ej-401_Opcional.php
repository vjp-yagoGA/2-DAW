<?php
ob_start();

$get_params = !empty($_GET) ? $_GET : null;
$post_params = !empty($_POST) ? $_POST : null;
$server_data = $_SERVER;


include 'Ej-401_Opcional.html';

ob_end_flush();
?>






  

   