
var box=document.getElementById("input");

function displayValue(val){
    box.value=box.value+val;
}

function clearDisplay(){
    box.value="";
}

function calculate(val){
    var input=box.value;
    var result=eval(input);
    box.value=result;
}