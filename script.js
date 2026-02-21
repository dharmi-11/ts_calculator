function startApp() {
    // Adding || "" ensures we always have a string to convert to a number
    var n1 = Number(prompt("Enter first number:") || "0");
    var opInput = prompt("Enter operator (+, -, *, /):") || "+";
    var op = opInput;
    var n2 = Number(prompt("Enter second number:") || "0");
    var result;
    if (op === "+") {
        result = n1 + n2;
    }
    else if (op === "-") {
        result = n1 - n2;
    }
    else if (op === "*") {
        result = n1 * n2;
    }
    else if (op === "/") {
        result = n2 !== 0 ? n1 / n2 : "Error: Can't divide by 0";
    }
    else {
        result = "Invalid operator!";
    }
    alert("Result: " + result);
}
