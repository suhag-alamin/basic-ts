class Counter {
  static counter: number = 0;

  static increment() {
    return (Counter.counter += 1);
  }
  static decrement() {
    return (Counter.counter -= 1);
  }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.decrement());
