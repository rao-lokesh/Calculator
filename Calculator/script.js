
window.addEventListener('load',bindEvents);
let output;
let buttons;

function bindEvents(){
 output = document.getElementById('input-box');
 buttons = document.querySelectorAll('.btn');
buttons.forEach((button) =>button.addEventListener('click',()=>buttonClick(button)));
}
function buttonClick(button){
    if(button.innerText == "="){
       evaluateExpression();
       return;
    }
    else if(button.innerText =="AC"){
        allClear();
        return;
    }
    else if(button.innerText =="C"){
        backSpace();
        return;
    }
    printOutput(button.innerText);
}

function printOutput(value){
    console.log(value);
    console.log(output);
    output.value += value;
}
function evaluateExpression(expression){
    let result = eval(output.value);

    output.value = result;
}

function allClear(){
    output.value="";
}

function backSpace(){
    output.value= output.value.substring(0,output.value.length-1);
}

