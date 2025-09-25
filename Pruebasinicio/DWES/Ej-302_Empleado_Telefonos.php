<?php
class Empleado {
    private string $nombre;
    private string $apellidos;
    private float $sueldo;
    private array $telefonos;

    public function __construct(string $nombre = "", string $apellidos = "", float $sueldo = 0.0) {
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->sueldo = $sueldo;
        $this->telefonos = [];
    }

    public function getNombre(): string {
        return $this->nombre;
    }

    public function getApellidos(): string {
        return $this->apellidos;
    }

    public function getSueldo(): float {
        return $this->sueldo;
    }

    public function setNombre(string $nombre): void {
        $this->nombre = $nombre;
    }

    public function setApellidos(string $apellidos): void {
        $this->apellidos = $apellidos;
    }

    public function setSueldo(float $sueldo): void {
        $this->sueldo = $sueldo;
    }

    public function getNombreCompleto(): string {
        return $this->nombre . " " . $this->apellidos;
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
echo "Empleado:" . $empleado->getNombreCompleto() . "<br>";
echo "Sueldo:" . $empleado->getSueldo() . " €<br>";
echo "¿Debe pagar impuestos?" . ($empleado->debePagarImpuestos() ? "Sí" : "No") . "<br>";
echo "Teléfonos:" . $empleado->listarTelefonos() . "<br>";
$empleado->vaciarTelefonos();
echo "Teléfonos tras vaciar:" . $empleado->listarTelefonos();
