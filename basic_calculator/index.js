const display = document.getElementById("display");
let justCalculated = false;
function appendToDisplay(input){
    if (justCalculated ){
        clearDisplay();
        justCalculated =false;
    }
    display.value += input;

}

function calculate(){
    try {
        display.value = eval(display.value)
        justCalculated = true;
    } catch (error) {
        display.value = "Error"
        justCalculated = false;
        
    }

}

function clearDisplay(){
    display.value = "";
    
}

document.addEventListener("keydown", handleKeyPress);

function handleKeyPress(e){
    if (e.key >= '0' && e.key <='9' || e.key === '+' || e.key === '-'|| e.key === '*' || e.key === '/' || e.key === '.'){
        appendToDisplay(e.key);
    }
    else if (e.key === 'Enter' || e.key === '='){
        calculate()
        justCalculated = true;
    }
    else if (e.key === 'Backspace'){
        backspace();
    }
    else if (e.key === 'Delete' || e.key === "Escape"){
        clearDisplay();
    }

}

function backspace(){
    display.value =  display.value.slice(0, -1);
}



function calculateSquare(){
    try{
        const value = parseFloat(display.value)
        if (!isNaN(value)){
            display.value = value ** 2;

        }
        else {
            display.value = "Error";
    }
        }
    catch(error){
        display.value = "Error"  ;
}
}

function calculateSquareRoot(){
    try{
        const value = parseFloat(display.value);
        if (!isNaN(value)){
            display.value = Math.sqrt(value);
        }
        else {
            display.value = "Error";
        }
    }

    catch(error){
        display.value = "Error";

        }
    }

function calculatePercent(){
    try{
        const value = parseFloat(display.value);
        if (!isNaN(value)){
            display.value = value /100;
        }
        else {
            display.value =  "Error";
        }

    }
    catch(error){
        display.value = "Error";

    }
}

function calculateReciprocal(){
    try{
        const value = parseFloat(display.value);
        if (!isNaN(value)){
            display.value = 1 / value
        }
        else {
            display.value = "Error";
        }
    }
    catch(error){
        display.value = "Error";
    }
}
