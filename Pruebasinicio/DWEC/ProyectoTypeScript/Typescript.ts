class Punto2D {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  getX(): number {
    return this._x;
  }

  setX(value: number): void {
    this._x = value;
  }

  getY(): number {
    return this._y;
  }

  setY(value: number): void {
    this._y = value;
  }

  toString(): string {
    return `(${this._x}, ${this._y})`;
  }
}

const punto1 = new Punto2D(2, 3);
const punto2 = new Punto2D(5, 8);

let distancia: (p1: Punto2D, p2: Punto2D) => number;

distancia = (p1: Punto2D, p2: Punto2D): number => {
  const dx = p2.getX() - p1.getX();
  const dy = p2.getY() - p1.getY();
  return Math.sqrt(dx ** 2 + dy ** 2);
};

alert(`La distancia entre ${punto1.toString()} y ${punto2.toString()} es ${distancia(punto1, punto2)}`);



  



