function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  function* fibonacciGen() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const fib = fibonacciGen();
  console.log(fib.next().value); // 0
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 1
  console.log(fib.next().value); // 2
  console.log(fib.next().value); // 3
  