function convert() {
    var firstOption = document.getElementById("firstOption");
    var value = firstOption.options[firstOption.selectedIndex].value;

    var secondOption = document.getElementById("secondOption");
    var convertedValue = secondOption.options[secondOption.selectedIndex].value;

    var input = document.getElementById("input").value;
    console.log(input);
    var numValue = parseFloat(input);


    if(value === "1" && convertedValue === "1") {
        var answer = numValue;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°C"
    } else if(value === "1" && convertedValue === "2") {
        var answer = (numValue * 1.8) + 32;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°F"
    } else if(value === "1" && convertedValue === "3") {
        var answer = numValue + 273.15;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "K"
    } else if(value === "1" && convertedValue === "4") {
        var answer = (numValue * 1.8) + 491.67;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°R"



    } else if(value === "2" && convertedValue === "1") {
        var answer = (numValue - 32) * (5/9);
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°C"
    } else if(value === "2" && convertedValue === "2") {
        var answer = numValue;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°F"
    } else if(value === "2" && convertedValue === "3") {
        var answer = (numValue - 32) * (5/9) + 273.15;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "K"
    } else if(value === "2" && convertedValue === "4") {
        var answer = numValue + 459.67;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°R"



    } else if(value === "3" && convertedValue === "1") {
        var answer = numValue - 273.15;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°C"
    } else if(value === "3" && convertedValue === "2") {
        var answer = (numValue - 273.15) * 1.8 + 32;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°F"
    } else if(value === "3" && convertedValue === "3") {
        var answer = numValue;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "K"
    } else if(value === "3" && convertedValue === "4") {
        var answer = (numValue * 9) / 5
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°R"


    } else if(value === "4" && convertedValue === "1") {
        var answer = (numValue * (5/9) - 273.15);
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°C"
    } else if(value === "4" && convertedValue === "2") {
        var answer = numValue - 459.67;
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°F"
    } else if(value === "4" && convertedValue === "3") {
        var answer = numValue * (5/9);
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "K"
    } else if(value === "4" && convertedValue === "4") {
        var answer = numValue
        var formatNum = Math.floor(answer * 100)/100;
        document.getElementById("output").innerHTML = formatNum + "°R"
    }
}