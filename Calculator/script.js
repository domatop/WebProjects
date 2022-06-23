"use strict";
var input = document.getElementById("Input"),
number = document.querySelectorAll(".numbers div"),
operator = document.querySelectorAll(".operators div"),
result = document.getElementById("result"),
clear = document.getElementById("clear"),
resultDisplayed = false;

for (var i = 0; i < number.length; i++){
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if(resultDisplayed === false) {
        input.innerHTML += e.target.innerHTML;
    } else if(resultDisplayed === true && lastChar === "+" |  lastChar === "-"| 
    lastChar === "x" | lastchar === "÷"){
        resultDisplayed = false;
        input.innerHTML += e.target.innerHTML;
    } else{
        resultDisplayed = false;
        input.innerHTML = "";
        input.innerHTML += e.target.innerHTML; 
    }
}
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener=("click", function(e)  
    {
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];
        if (lastChar === "+" | lastChar === "-" | lastChar === "x" |
        lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            
            input.innerHTML = newString;
        }
        else if (currentString.length === 0){
            console.log("enter a number first")
        }
        else {
            input.innerHTML += e.target.innerHTML; 
        }
    }
    )
}
result.addEventListener=("click", function (){
    var inputString = input.innerHTML;
    var numbers = inputString.split(/\+|\-|\x|\÷/g);
    

var operators = inputString.replace(/[0-9]\./g, "").split("");
console.log(inputString);
console.log(operators)
console.log(numbers);
console.log("-------------------------------------------")
}
)