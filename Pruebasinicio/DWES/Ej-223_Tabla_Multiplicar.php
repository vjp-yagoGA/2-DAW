<?php
$numero = isset($_GET['numero']) ? intval($_GET['numero']) : 7;
?>
<!DOCTYPE html>
<html>
<head>
    <title>Tabla de multiplicar del <?php echo $numero; ?></title>
    <style>
        table { border-collapse: collapse; }
        th, td { border: 1px solid #333; padding: 8px; text-align: center; }
        th { background-color: #eee; }
    </style>
</head>
<body>
    <h2>Tabla de multiplicar del <?php echo $numero; ?></h2>
    <table>
        <thead>
            <tr>
                <th>a</th>
                <th>*</th>
                <th>b</th>
                <th>=</th>
                <th>a*b</th>
            </tr>
        </thead>
        <tbody>
            <?php
            for ($i = 1; $i <= 10; $i++) {
                echo "<tr>";
                echo "<td>$numero</td>";
                echo "<td>*</td>";
                echo "<td>$i</td>";
                echo "<td>=</td>";
                echo "<td>" . ($numero * $i) . "</td>";
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>