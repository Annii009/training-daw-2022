window.onload = function(e) {
    console.log('documento cargado')

    document.getElementsByTagName('h1')[0].innerText = 'Cambiadito con js!!'

    // Cambiar el título del segundo h2
    const h2 = document.getElementsByTagName('h2');
    h2[1].innerText = 'Segundo titulito cambiado con js!!';

    // Seleccionar el elemento con id == username
    const username = document.getElementById('username');
    console.log(username);

    // Cambiar el color de todos los .first que estén dentro de un artículo
    const firstInArticle = document.querySelectorAll('article .first');
    firstInArticle.forEach(Element => {
        Element.style.color = 'pink';
    });

    // Seleccionar todos lo elementos li con class == item
    const liItems = document.querySelectorAll('li.item');
    console.log(liItems);


    // Seleccionar todos lo buttons dentro de class == buttons
    const buttonsInButtonsClass = document.querySelectorAll('.buttons button');
    console.log(buttonsInButtonsClass);

    // Cambiar el color de fondo del primer párrafo
    const firstParagraph = document.querySelectorAll('.first');
    firstParagraph[0].style.backgroundColor = 'blue';
    

    // Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    const buttonsInButtons = document.querySelectorAll('.buttons button');
    buttonsInButtons.forEach(Element => {
        Element.style.color = 'pink';
    });
}












