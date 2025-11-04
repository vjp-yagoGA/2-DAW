<?php
session_start();
session_destroy();
header('Location: 410index.php');
exit;