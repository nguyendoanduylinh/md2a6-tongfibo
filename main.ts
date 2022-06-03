function fibonacciNumber(
  Num1: number = 0,
  Num2: number = 1,
  sum: number = 0
): number {
  console.log(Num2);
  sum += Num2;
  let temp: number = Num2;
  Num2 = Num1 + Num2;
  Num1 = temp;
  if (Num2 < 500) {
    return fibonacciNumber(Num1, Num2, sum);
  }
  return sum;
}
console.log(fibonacciNumber());
