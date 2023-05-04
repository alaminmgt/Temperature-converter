const calculateTemp = () => {
    const numbers = document.getElementById("temp").value;
    const tempSelect = document.getElementById("temp-deff");
    const valueTemps = tempSelect.options[tempSelect.selectedIndex].value;
    
    const celtoFer = (cel) => {
        let fahrenheit = Math.round (cel * (9/5) + 32);
        return fahrenheit;
    }
    const fertoCel = (fer) => {
        let celcius = Math.round ((fer - 32) * 5/9 );
        return celcius;
    }

    let result;
    if (valueTemps == "cel") {
        result = celtoFer(numbers);
        document.getElementById("result").innerHTML = `= ${result}°Fahrenheit`;
    } else {
        result = fertoCel(numbers);
        document.getElementById("result").innerHTML = `= ${result}°Celcius`;
    }
}