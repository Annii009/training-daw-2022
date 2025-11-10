// Añadir en el constructor los datos que faltan para que sea un rectángulo
// Añadir un método para calcular el área
// Añadir un método para saber si 2 rectángulos se superponen (overlay)


class Rectangle {

    // add x1, y1
    constructor(x, y, x1, y1) {
        this.x = x;
        this.y = y;
        this.x1 = x1;
        this.y1 = y1;
    }

    area(){
        const base = Math.abs(this.x1 - this.x);
        const altura = Math.abs(this.y1 - this.y);
        return base * altura;
    }

    print() {
        console.log(`[${this.x}, ${this.y}]`)
    }

    // area

    // overlay
    // tenemos que comprobar la siguiente situación
    // .x----------x.....
    // .|..........|.....
    // .|......x---|----x
    // .x------|---x....|
    // ........x--------x
    // Se superponen si alguna de sus coordenadas están dentro de los límites
    // del otro rectángulo
}

let r1 = new Rectangle(1,1, 3, 3);
let r2 = new Rectangle(1, 1, -3, -3);
console.log(r1.area());
console.log(r2.area());

r1.print()
r2.print()

// let area = r1.area();
// console.log(`area ${area}`)

// let isOverlay = r1.overlay(r2)
