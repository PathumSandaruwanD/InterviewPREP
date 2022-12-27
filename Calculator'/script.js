//clear screen
function clear() {
    document.getElementById("result").value = " ";
}

//display
function display(value) {
    document.getElementById("result").value += value;
}

//calculate
function calculate() {
    let num1 = document.getElementById("result").value;
    let num2 = eval(num1);
    document.getElementById("result").value = num2;
}