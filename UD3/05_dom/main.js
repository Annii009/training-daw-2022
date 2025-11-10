//listar todos los divs
//listar todos los elementos con style == 'buttons'
//listar 1 div con class == buttons
//listar todos los divs con class == buttons



window.onload = () => {
    console.log("start");


    const divs = document.getElementsByTagName("div");
    console.log(`divs ${divs.length}`);
    
    for (const node of divs) {
        console.log(node);
    }


    const buttonsByClassName = document.getElementsByClassName("buttons");
    console.log(`button con className ${buttonsByClassName.length}`);

    for (const node of buttonsByClassName) {
        console.log(node);
    }  

    const buttonByClass = document.querySelectorAll(".buttons");
    console.log(`button con class ${buttonByClass.length}`);

    for (const node of buttonByClass) {
        console.log(node);
    }

    const divsByClass = document.querySelectorAll("div.buttons");
    console.log(`divs con class ${divsByClass.length}`);

    for (const node of divsByClass) {
        console.log(node); 
    }
}