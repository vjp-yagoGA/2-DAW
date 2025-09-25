<?php
/**
 * Función que determina si un número es par
 * 
 * @param int $num
 * @return bool
 */
function esPar(int $num): bool {
    return $num % 2 === 0;
}

/**
 * Función que devuelve un array de números aleatorios
 * 
 * @param int $tam  Tamaño del array
 * @param int $min  Valor mínimo de los números aleatorios
 * @param int $max  Valor máximo de los números aleatorios
 * @return array
 */
function arrayAleatorio(int $tam, int $min, int $max): array {
    $resultado = [];

    for ($i = 0; $i < $tam; $i++) {
        $resultado[] = rand($min, $max);
    }

    return $resultado;
}

/**
 * Función que cuenta los números pares en un array
 * 
 * @param array &$array  
 * @return int
 */
function arrayPares(array &$array): int {
    $contador = 0;

    foreach ($array as $valor) {
        if (esPar($valor)) {
            $contador++;
        }
    }

    return $contador;
}


$tam = 10;
$min = 1;
$max = 100;

$miArray = arrayAleatorio($tam, $min, $max);
echo "Array generado: " . implode(', ', $miArray) . "\n";
echo "Cantidad de números pares: " . arrayPares($miArray) . "\n";
?>
