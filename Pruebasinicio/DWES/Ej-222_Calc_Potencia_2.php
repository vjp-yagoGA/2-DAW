<?php
$base = 3; 
$exponente = 4; 

$resultado = 1;
$contador = 1;
while ($contador <= $exponente) {
    $resultado *= $base;
    $contador++;
}
echo "$base elevado a la $exponente es: $resultado";