// const add = function (a, b) {
//     return a + b;
// };
  
// const subtract = function (a, b) {
//     return a - b;
// };
  

  
// const multiply = function(a, b) {
//     return a * b;
// };

// const divide = function(a, b){
//     return a / b
// };

// console.log(divide(10, 2));

const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
};

function calculate(){

    try{
        display.value = eval(display.value);
    }

    catch{
        display.value = "Error"
    };

};

function clearDisplay(){
    display.value = ""
};