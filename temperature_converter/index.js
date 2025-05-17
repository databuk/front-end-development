const temperatureInput = document.getElementById("inputTemperature")
const fromUnitSelect = document.getElementById("fromUnit")
const toUnitSelect = document.getElementById("toUnit")
const convertButton = document.getElementById("convertBtn")
const convertedResult = document.getElementById("result")

function celsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
function celsiusToKelvin(celsius){
    return celsius + 273.15;
}

function fahrenheitToKelvin(farenheit){
    return ((farenheit - 32) * 5/9) + 273;
}
function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}


function kelvintoCelsius(kelvin){
    return kelvin -273;
}
function kelvintoFahrenheit(kelvin){
    return (kelvin -273.15) * 9/5 + 32;
}

function convertTemperature(){
    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit =  toUnitSelect.value;
    let result;

    if (isNaN(temperature)){
        convertedResult.innerHTML =`<p style = "color:red">Please, enter a temperature<\p>`
        return;

    }
    if (fromUnit === toUnit) {
        result = temperature;
    }
    else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = celsiusToFahrenheit(temperature);
    }
    else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = celsiusToKelvin(temperature);
    }
    else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = fahrenheitToCelsius(temperature);
    }
    else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = fahrenheitToKelvin(temperature);
    }   
    else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = kelvintoCelsius(temperature);
    }
    else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = kelvintoFahrenheit(temperature);
    }
    convertedResult.innerHTML = `<p>${temperature} ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} is ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}</p>`;
                
}

convertButton.addEventListener("click", convertTemperature);
// function displayResult(){

// }
