function calculator(a, b, operator) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "unknown value";
    }

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : Infinity; 
        default:
            return "unknown value";
    }
}