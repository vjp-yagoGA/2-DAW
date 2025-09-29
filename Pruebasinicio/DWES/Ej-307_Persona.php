<?php
class Persona
{
    protected string $nombre;
    protected string $apellidos;

    public function __construct(string $nombre, string $apellidos)
    {
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
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
}

class Empleado extends Persona
{
    private float $sueldo;
    private array $telefonos = [];

    public function __construct(string $nombre, string $apellidos, float $sueldo)
    {
        parent::__construct($nombre, $apellidos);
        $this->sueldo = $sueldo;
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

    public static function toHtml(Empleado $emp): string
    {
        $nombre = htmlspecialchars($emp->getNombre());
        $apellidos = htmlspecialchars($emp->getApellidos());
        $sueldo = number_format($emp->getSueldo(), 2, ',', '.');

        $html  = "<p><b>Nombre:</b> {$nombre} {$apellidos}<br>";
        $html .= "<b>Sueldo:</b> {$sueldo} &euro;</p>";

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

$empleado = new Empleado("Yago", "Garcia", 1800.50);
$empleado->anyadirTelefono("600123456");
$empleado->anyadirTelefono("611987654");
echo Empleado::toHtml($empleado);
?>
