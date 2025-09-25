<?php
/**
 * Devuelve la cantidad de dígitos de un número (sin contar el signo)
 *
 * @param int $num
 * @return int
 */
function digitos(int $num): int {
    return strlen((string) abs($num));
}

/**
 * Devuelve el dígito en la posición $pos (empezando desde 0 por la izquierda)
 *
 * @param int $num
 * @param int $pos
 * @return int
 */
function digitoN(int $num, int $pos): int {
    $str = (string) abs($num);
    if ($pos < 0 || $pos >= strlen($str)) {
        throw new Exception("Posición fuera de rango");
    }
    return (int) $str[$pos];
}

/**
 * Quita $cant dígitos por la derecha (por detrás)
 *
 * @param int $num
 * @param int $cant
 * @return int
 */
function quitaPorDetras(int $num, int $cant): int {
    return (int) (substr((string) abs($num), 0, -$cant) ?: "0");
}

/**
 * Quita $cant dígitos por la izquierda (por delante)
 *
 * @param int $num
 * @param int $cant
 * @return int
 */
function quitaPorDelante(int $num, int $cant): int {
    return (int) (substr((string) abs($num), $cant) ?: "0");
}



$numero = 123456;


echo "Dígitos de $numero: " . digitos($numero) . "\n";            
echo "Dígito en posición 2: " . digitoN($numero, 2) . "\n";        
echo "Quitar 2 por detrás: " . quitaPorDetras($numero, 2) . "\n";  
echo "Quitar 3 por delante: " . quitaPorDelante($numero, 3) . "\n";


echo "Dígito en posición 4: " . digitoN(num: $numero, pos: 4) . "\n";       
echo "Quitar por detrás (3): " . quitaPorDetras(num: $numero, cant: 3) . "\n"; 
echo "Quitar por delante (2): " . quitaPorDelante(num: $numero, cant: 2) . "\n"; 

?>
