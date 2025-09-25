<?php
class Empleado {
    private string $nombre;
    private string $apellidos;
    private float $sueldo;

    public function __construct(string $nombre = "", string $apellidos = "", float $sueldo = 0.0) {
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->sueldo = $sueldo;
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
}


$empleado = new Empleado("Yago", "García Alonso", 2500);

echo "Empleado: " . $empleado->getNombreCompleto() . "<br>";
echo "Sueldo: " . $empleado->getSueldo() . " €<br>";
echo "¿Debe pagar impuestos? " . ($empleado->debePagarImpuestos() ? "Sí" : "No") . "<br>";
