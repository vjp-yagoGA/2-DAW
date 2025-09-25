<?php 
$nombre= "Yago";
$primerapelido= "García";
$segundoapellido= "Alonso";
$email= "Yagog@gmail.com";
$añodenacimiento= "2001";
$telefono= "647221958";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Datos Personales</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Datos Personales en Tabla</h1>
    <table>
        <tr>
            <th>Nombre</th>
            <td><?php echo $nombre; ?></td>
        </tr>
        <tr>
            <th>Primer Apellido</th>
            <td><?php echo $primerapelido; ?></td>
        </tr>
        <tr>
            <th>Segundo Apellido</th>
            <td><?php echo $segundoapellido; ?></td>
        </tr>
        <tr>
            <th>Email</th>
            <td><?php echo $email; ?></td>
        </tr>
        <tr>
            <th>Año de nacimiento</th>
            <td><?php echo $añodenacimiento; ?></td>
        </tr>
        <tr>
            <th>Teléfono</th>
            <td><?php echo $telefono; ?></td>
        </tr>
    </table>
</body>
</html>