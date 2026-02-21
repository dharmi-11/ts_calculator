// Day 3: Union Types
type Operator = "+" | "-" | "*" | "/";

function startApp(): void {
    // Adding || "" ensures we always have a string to convert to a number
    const n1: number = Number(prompt("Enter first number:") || "0");
    const opInput = prompt("Enter operator (+, -, *, /):") || "+";
    const op = opInput as Operator;
    const n2: number = Number(prompt("Enter second number:") || "0");

    let result: number | string;

    if (op === "+") {
        result = n1 + n2;
    } else if (op === "-") {
        result = n1 - n2;
    } else if (op === "*") {
        result = n1 * n2;
    } else if (op === "/") {
        result = n2 !== 0 ? n1 / n2 : "Error: Can't divide by 0";
    } else {
        result = "Invalid operator!";
    }

    alert("Result: " + result);
}