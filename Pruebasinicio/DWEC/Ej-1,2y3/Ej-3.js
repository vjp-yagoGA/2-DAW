function Ciclomotor(marca, velocidadMax, aceleracion, desaceleracion) {
    this.marca = marca;
    this.numRuedas = 2;
    this.velocidadMax = velocidadMax;
    this.velocidadActual = 0;
    this.aceleracion = aceleracion;
    this.desaceleracion = desaceleracion;
    this.encendida = false;

    this.mostrarInfo = function () {
        console.log("---- " + this.marca + " ----");
        console.log("Número de ruedas: " + this.numRuedas);
        console.log("Velocidad máxima: " + this.velocidadMax);
        console.log("Velocidad actual: " + this.velocidadActual);
        console.log("Aceleración: " + this.aceleracion);
        console.log("Desaceleración: " + this.desaceleracion);
        console.log("Encendida: " + (this.encendida ? "Sí" : "No"));
        console.log("-----------------------------");
    };

    this.arrancar = function () {
        if (!this.encendida) {
            console.log("Se introduce la llave y se gira, la moto arranca.");
            this.encendida = true;
        } else {
            console.log("La moto ya estaba encendida.");
        }
    };

    this.acelerar = function () {
        if (!this.encendida) {
            console.log("No se puede acelerar, la moto está apagada.");
            return;
        }
        this.velocidadActual += this.aceleracion;
        if (this.velocidadActual > this.velocidadMax) {
            this.velocidadActual = this.velocidadMax;
        }
        console.log("La moto ha acelerado.");
    };

    this.frenar = function () {
        this.velocidadActual -= this.desaceleracion;
        if (this.velocidadActual < 0) {
            this.velocidadActual = 0;
        }
        console.log("La moto ha frenado.");
    };
}

let ciclomotor = new Ciclomotor("Kawasaki", 120, 70, 20);
console.log("La moto inicialmente:");
ciclomotor.mostrarInfo();
console.log("La moto tras acelerar:");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("La moto tras arrancarla y acelerar:");
ciclomotor.arrancar();
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("Volvemos a acelerar:");
ciclomotor.acelerar();
ciclomotor.mostrarInfo();
console.log("Frenamos la moto:");
ciclomotor.frenar();
ciclomotor.mostrarInfo();

function MotoCross(marca) {
 
    Ciclomotor.call(this, marca, 90, 70, 20); 
    this.marchaActual = 0;

    this.arrancar = function () {
        if (!this.encendida) {
            console.log("Se levanta la pata de cabra.");
            Ciclomotor.prototype.arrancar.call(this);
        } else {
            console.log("La moto ya estaba encendida.");
        }
    };

    this.ajustarMarcha = function () {
        if (this.velocidadActual >= 30) {
            this.marchaActual = 3;
        } else if (this.velocidadActual >= 10) {
            this.marchaActual = 2;
        } else if (this.velocidadActual >= 0) {
            this.marchaActual = 1;
        } else {
            this.marchaActual = 0;
        }
    };
}