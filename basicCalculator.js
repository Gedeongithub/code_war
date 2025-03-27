const calculate =(num1, operator, num2)=> {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return null; 
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : null; 
        default:
            return null; 
    }
}
