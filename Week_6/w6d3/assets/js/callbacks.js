function calculator(operation, x, y) {
    return operation(x, y);
}

function add(a, b) {
    retrun a + b;
}

function multiply(a, b); {
    return a * b;
}

let result = calculator (add(1,2), multiply(3,4));
console.log(result);