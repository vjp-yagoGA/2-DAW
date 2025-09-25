<?php
class Empleado {

    private float $sueldo;
    private array $telefonos;

    public function __construct(string $nombre = "", string $apellidos = "", float $sueldo = 0.0) {
        $this->sueldo = $sueldo;
        $this->telefonos = [];
    }

    public function getSueldo(): float {
        return $this->sueldo;
    }

    public function setSueldo(float $sueldo): void {
        $this->sueldo = $sueldo;
    }

    public function debePagarImpuestos(): bool {
        return $this->sueldo > 3333;
    }

    public function anyadirTelefono(int $telefono): void {
        $this->telefonos[] = $telefono;
    }

    public function listarTelefonos(): string {
        return implode(",", $this->telefonos);
    }

    public function vaciarTelefonos(): void {
        $this->telefonos = [];
    }
}

$empleado = new Empleado("Yago", "García Alonso", 2800);
$empleado->anyadirTelefono(6443451628);
$empleado->anyadirTelefono(6348265832);
$empleado->anyadirTelefono(6442267032);
echo "Sueldo:" . $empleado->getSueldo() . " €<br>";
echo "¿Debe pagar impuestos?" . ($empleado->debePagarImpuestos() ? "Sí" : "No") . "<br>";
echo "Teléfonos:" . $empleado->listarTelefonos() . "<br>";
$empleado->vaciarTelefonos();
echo "Teléfonos tras vaciar:" . $empleado->listarTelefonos();