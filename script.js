function celsiusToFahrenheit()
{
    const number=document.getElementById("temperatureInput").value;
    if(number==="")
        document.getElementById("result").textContent="Please enter a temperature value.";
    else
    {
        const result=(number*9/5)+32;
        document.getElementById("result").textContent=`${parseFloat(number).toFixed(2)}°C = ${result.toFixed(2)}°F`;
    }
}
function fahrenheitToCelsius()
{
    const number=document.getElementById("temperatureInput").value;
    if(number==="")
        document.getElementById("result").textContent="Please enter a temperature value.";
    else
    {
        const result=(number-32)*5/9;
        document.getElementById("result").textContent=`${parseFloat(number).toFixed(2)}°F = ${result.toFixed(2)}°C`;
    }
}
function convert()
{
    const celsiusToFahrenheitRadio=document.getElementById("celsiusToFahrenheit").checked;
    const fahrenheitToCelsiusRadio=document.getElementById("fahrenheitToCelsius").checked;
    if(celsiusToFahrenheitRadio)
        celsiusToFahrenheit();
    else if(fahrenheitToCelsiusRadio)
        fahrenheitToCelsius();
    else
        document.getElementById("result").textContent="Please select a conversion type.";
}
function reset()
{
    document.getElementById("temperatureInput").value="";
    document.getElementById("result").textContent="";
    document.getElementById("celsiusToFahrenheit").checked=false;
    document.getElementById("fahrenheitToCelsius").checked=false;
}