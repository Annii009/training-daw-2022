class Coche {
    constructor(marca, modelo, consumoPor100 ){
        this.marca = marca;
        this.modelo = modelo;
        this.consumoPor100 = consumoPor100;
        this.litros = 0;
    }

    reposta(litros){
        this.total += litros;
        console.log('Has repostado ' + litros + ' litros.');
    }

    move(distancia){
        const litrosGastados = (this.consumoPor100 * distancia) /100;
        console.log('Has recorrido ' + distancia + ' km y has gastado ' + litrosGastados + ' litros.');
        this.litros = this.litros - litrosGastados;
    }

    restante(){
        console.log('quedan ' + this.litros + ' litros en el deposito.');
    }
}

let coche1 = new Coche('Kia', 'Stonic', 5.7);
let coche2 = new Coche('Ford', 'fiesta', 5.5);

coche1.reposta(10);
coche2.reposta(20);
coche1.move(100);
coche2.move(300);
coche1.restante();
coche2.restante();