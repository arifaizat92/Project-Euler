/*jslint devel: true */
//This is the function to display the answer
function solveProblem(fieldId) {
    'use strict';
    var sum = 0;
    var limitValue = document.getElementById(fieldId).value;
    
   if (limitValue === "") {
    
        alert("Please enter a limit value");
    }
    
    for (var i = 0; i < limitValue; i++){
        if (i % 3 === 0 || i % 5 === 0){
            sum +=i;
        } 
    }
     
    document.getElementById("result").innerHTML = sum;
    
    return false;
}


