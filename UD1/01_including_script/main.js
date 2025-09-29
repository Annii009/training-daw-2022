
/*
function test(){
    let nombre = "Ana";
    let apelido = "Almudí";
    let edad = 27;

    console.log("Hola, Mi nombre es " + nombre + " " + apelido + " y tengo " + edad + " años.");
}
test();
*/

function hello (name, lastName, age){
    return "Hola, Mi nombre es " + name + " " + lastName + " y tengo " + age + " años.";
}


let result = hello("Ana", "Almudí", 27);
if (result != "Hola, Mi nombre es Ana Almudí y tengo 27 años."){
    console.log("test failed :(");
    return;
}

result = hello("Ana", "Almudí", 27);
if (result != "Hola, Mi nombre es Ana Almudí y tengo 27 años."){
    console.log("test failed :(");
    return;
}

console.log("test passed :)");