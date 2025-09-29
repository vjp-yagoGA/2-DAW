<?php
class Empleado
{
    private string $nombre;
    private string $apellidos;
    private float $sueldo;
    private array $telefonos = [];

    public const SUELDO_TOPE = 3333.0;

    public function __construct(string $nombre, string $apellidos, float $sueldo)
    {
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->sueldo = $sueldo;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }

    public function getApellidos(): string
    {
        return $this->apellidos;
    }

    public function setApellidos(string $apellidos): void
    {
        $this->apellidos = $apellidos;
    }

    public function getSueldo(): float
    {
        return $this->sueldo;
    }

    public function setSueldo(float $sueldo): void
    {
        $this->sueldo = $sueldo;
    }

    public function anyadirTelefono(string $telefono): void
    {
        $this->telefonos[] = $telefono;
    }

    public function vaciarTelefonos(): void
    {
        $this->telefonos = [];
    }

    public function getTelefonos(): array
    {
        return $this->telefonos;
    }

 
    public function debePagarImpuestos(): bool
    {
        return $this->sueldo > self::SUELDO_TOPE;
    }

    public static function toHtml(Empleado $emp): string
    {
        $nombre = htmlspecialchars($emp->getNombre());
        $apellidos = htmlspecialchars($emp->getApellidos());
        $sueldo = number_format($emp->getSueldo(), 2, ',', '.');
        $paga = $emp->debePagarImpuestos() ? "Sí" : "No";

        $html  = "<p><b>Nombre:</b> {$nombre} {$apellidos}<br>";
        $html .= "<b>Sueldo:</b> {$sueldo} &euro;<br>";
        $html .= "<b>¿Paga impuestos?</b> {$paga}</p>";

        if (!empty($emp->getTelefonos())) {
            $html .= "<ol>";
            foreach ($emp->getTelefonos() as $telefono) {
                $html .= "<li>" . htmlspecialchars($telefono) . "</li>";
            }
            $html .= "</ol>";
        } else {
            $html .= "<p><i>No tiene teléfonos registrados</i></p>";
        }

        return $html;
    }
}

$empleado = new Empleado("Yago", "Garcia", 4000.00);
$empleado->anyadirTelefono("600123456");
$empleado->anyadirTelefono("611987654");

echo Empleado::toHtml($empleado);
?>