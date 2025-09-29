<?php


/**
 * Devuelve el mayor de todos los números recibidos como parámetros
 * 
 * @return int
 */
function mayor(): int {
    $numeros = func_get_args(); 
    if (empty($numeros)) {
        throw new Exception("No se han pasado argumentos."); // 
    }

    $mayor = $numeros[0];

    foreach ($numeros as $num) {
        if ($num > $mayor) {
            $mayor = $num;
        }
    }

    return $mayor;
}

/**
 * 
 * 
 * @param mixed 
 * @return string
 */
function concatenar(...$palabras): string {
    return implode(' ', $palabras);
}


echo "Mayor: " . mayor(4, 9, 2, 15, 3) . "\n";  
echo "Concatenación: " . concatenar("Hola", "mundo", "desde", "PHP") . "\n";  
?>
