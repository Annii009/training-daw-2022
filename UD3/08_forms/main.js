window.onload = function () {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue

    const submitButton = document.getElementById('submit');
    submitButton.disabled = true;

    checkCombo();

    document.getElementById('condiciones').onchange = checkSubmit;
    document.getElementById('privacidad').onchange = checkSubmit;

}

function changeValue(e) {
    console.log('changed' + e.target.value)
}


function checkSubmit() {
    const submitButton = document.getElementById('submit');
    submitButton.disabled = true;

    if (document.getElementById('condiciones').checked &&
        document.getElementById('privacidad').checked) {
        submitButton.disabled = false;
    }
}

function checkCombo(){
    const combo = document.getElementById('opciones');
    combo.disabled = true;

    document.getElementById('pregunta_si').onchange = function(e){
        if(e.target.checked){
            combo.disabled = false;
        }
        else{
            combo.disabled = true;
        }
    }

    
}
