const kilogram = document.getElementById('kilogram');
const gram = document.getElementById('gram');
const pound = document.getElementById('pound');
const ounce = document.getElementById('ounce');



// error checking
const setError = (element,message)=> {
    let selected = element.parentElement;
    let elementMessage = selected.querySelector('.error');

    elementMessage.innerText = message;
    selected.classList.add('error');
    selected.classList.remove('success');
}


//success checking
const setSuccess = (element)=> {
    let selected = element.parentElement;
    let elementMessage = selected.querySelector('.error');

    elementMessage.innerText = "";
    selected.classList.add('success');
    selected.classList.remove('error');
}



//kilogram section
const kilograms = ()=> {
    let kilogramValue = kilogram.value;

    if(kilogramValue < 0) {
        setError(kilogram, "No negative value or zero or empty!");

    } else if(isNaN(kilogramValue)) {
        setError(kilogram, "Sorry not a number!");
    } 
    else {
        setSuccess(kilogram);
        gram.value = (kilogramValue * 1000).toFixed(3);
        pound.value = (kilogramValue * 2.205).toFixed(3);
        ounce.value = (kilogramValue * 35.274).toFixed(3);
    }
}


//gram section
const grams = ()=> {
    let gramValue = gram.value;

    if(gramValue < 0) {
        setError(gram, "No negative value or zero or empty!");

    } else if(isNaN(gramValue)) {
        setError(gram, "Sorry not a number!");
    } 
    else {
        setSuccess(gram);
        kilogram.value = (gramValue /1000).toFixed(3);
        pound.value = (gramValue /454).toFixed(3);
        ounce.value = (gramValue /28.35).toFixed(3);
    }
}




//pounds section
const pounds = ()=> {
    let poundValue = pound.value;

    if(poundValue < 0) {
        setError(pound, "No negative value or zero or empty!");

    } else if(isNaN(poundValue)) {
        setError(pound, "Sorry not a number!");
    } 
    else {
        setSuccess(pound);
        kilogram.value = (poundValue /2.205).toFixed(3);
        gram.value = (poundValue * 454).toFixed(3);
        ounce.value = (poundValue * 16).toFixed(3);
    }
}


//ounce section
const ounces = ()=> {
    let ounceValue = ounce.value;

    if(ounceValue < 0) {
        setError(ounce, "No negative value or zero or empty!");

    } else if(isNaN(ounceValue)) {
        setError(ounce, "Sorry not a number!");
    } 
    else {
        setSuccess(ounce);
        kilogram.value = (ounceValue /35.274).toFixed(3);
        gram.value = (ounceValue * 28.35).toFixed(3);
        pound.value = (ounceValue / 16).toFixed(3);
    }
}






//addEventListeners
kilogram.addEventListener('input',kilograms);
gram.addEventListener('input',grams);
pound.addEventListener("input",pounds);
ounce.addEventListener('input',ounces);
