"use strict";
function fibonacciNumber(Num1 = 0, Num2 = 1, sum = 0) {
    console.log(Num2);
    sum += Num2;
    let temp = Num2;
    Num2 = Num1 + Num2;
    Num1 = temp;
    if (Num2 < 500) {
        return fibonacciNumber(Num1, Num2, sum);
    }
    return sum;
}
console.log(fibonacciNumber());
