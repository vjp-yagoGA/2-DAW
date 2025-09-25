<?php
$inicio = 10; 
$fin = 40;    

echo "<ul>";
for ($i = $inicio; $i <= $fin; $i++) {
    if ($i % 2 == 0) {
        echo "<li>$i</li>";
    }
}
echo "</ul>";
?>