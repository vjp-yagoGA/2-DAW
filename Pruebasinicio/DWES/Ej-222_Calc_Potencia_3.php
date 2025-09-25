<?php
$base = 3;    
$exponente = 4; 

$resultado = 1;
$contador = 1;
if ($exponente == 0) {
    $resultado = 1;
} else {
    do {
        $resultado *= $base;
        $contador++;
    } while ($contador <= $exponente);
}
echo "$base elevado a la $exponente es: $resultado";