<?php

function obtenerCaracteresImpares(string $frase): string {
    $resultado = "";

    for ($i = 0; $i < strlen($frase); $i++) {
        if ($i % 2 !== 0) {
            $resultado .= $frase[$i];
        }
    }

    return $resultado;
}


$fraseOriginal = "Ornitorrinco";
$fraseImpares = obtenerCaracteresImpares($fraseOriginal);

echo "Frase original: $fraseOriginal<br>";
echo "Frase con caracteres en posiciones impares: $fraseImpares<br>";
?>
