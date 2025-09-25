<?php
function contarVocales(string $frase): array {
 
    $frase = mb_strtolower($frase, 'UTF-8');

  
    $vocales = [
        'a' => 0,
        'e' => 0,
        'i' => 0,
        'o' => 0,
        'u' => 0
    ];


    for ($i = 0; $i < mb_strlen($frase, 'UTF-8'); $i++) {
        $caracter = mb_substr($frase, $i, 1, 'UTF-8');
        if (array_key_exists($caracter, $vocales)) {
            $vocales[$caracter]++;
        }
    }

   
    $total = array_sum($vocales);


    $vocales['total'] = $total;

    return $vocales;
}

$fraseDePrueba = "Me esta dando mucha pereza esto.";
$resultado = contarVocales($fraseDePrueba);

echo "Frase analizada: $fraseDePrueba<br><br>";
echo "<strong>Cantidad de cada vocal:</strong><br>";
foreach (['a', 'e', 'i', 'o', 'u'] as $vocal) {
    echo strtoupper($vocal) . ": " . $resultado[$vocal] . "<br>";
}
echo "<br><strong>Total de vocales:</strong> " . $resultado['total'];
?>
