let result = "";

function appendToResult(value) {
    result += value;
    document.getElementById("result").value = result;
}

function clearResult() {
    result = "";
    document.getElementById("result").value = "";
}

function operate(operator) {
    appendToResult(operator);
}

function calculate() {
    try {
        result = eval(result).toString();
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}