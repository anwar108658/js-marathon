# JavaScript — Functions

A **function** is a reusable block of code designed to perform a task.

```js
function greet() {
    console.log("Hello");
}

greet();
```

## 1. Function Declaration

```js
function add(a, b) {
    return a + b;
}

add(10, 20); // 30
```

- `a`, `b` → parameters
- `10`, `20` → arguments
- `return` → sends a value back

## 2. Parameters vs Arguments ⭐

```js
function greet(name) { // parameter
    console.log(name);
}

greet("Anwar"); // argument
```

## 3. `return` ⭐

`return` sends a value back and stops the function.

```js
function multiply(a, b) {
    return a * b;
}

const result = multiply(5, 4);
// 20
```

Without `return`, a function normally returns `undefined`.

## 4. Function Expression

A function can be stored in a variable.

```js
const add = function(a, b) {
    return a + b;
};

add(10, 20);
```

## 5. Arrow Functions ⭐

```js
const add = (a, b) => {
    return a + b;
};
```

Implicit return:

```js
const add = (a, b) => a + b;
```

One parameter:

```js
const square = x => x * x;
```

No parameters:

```js
const greet = () => "Hello";
```

## 6. Default Parameters

```js
function greet(name = "Guest") {
    return `Hello ${name}`;
}

greet();        // "Hello Guest"
greet("Anwar"); // "Hello Anwar"
```

## 7. Rest Parameters `...` ⭐

Collect multiple arguments into an array.

```js
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4); // 10
```

## 8. Spread vs Rest

Spread expands:

```js
const nums = [1, 2, 3];

console.log(...nums);
// 1 2 3
```

Rest collects:

```js
function test(...nums) {
    console.log(nums);
}

test(1, 2, 3);
// [1, 2, 3]
```

## 9. Scope ⭐

Variables declared inside a function are local.

```js
function test() {
    const message = "Hello";
}

console.log(message);
// ReferenceError
```

A function can access variables from its outer scope:

```js
const name = "Anwar";

function greet() {
    console.log(name);
}
```

## 10. Callback Functions ⭐

A function passed to another function is a callback.

```js
function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    callback("Anwar");
}

processUser(greet);
```

Common examples:

```js
numbers.map(x => x * 2);
numbers.filter(x => x > 10);
numbers.forEach(x => console.log(x));
```

## 11. Higher-Order Functions

A function that accepts a function or returns a function.

```js
function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;

calculate(10, 20, add);
// 30
```

## 12. Closures ⭐

A closure occurs when an inner function remembers variables from its outer scope.

```js
function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3
```

Closures are important for callbacks, private state, event handlers, and frameworks such as React.

## 13. IIFE

Immediately Invoked Function Expression:

```js
(function() {
    console.log("Runs immediately");
})();
```

## 14. `this` in Functions ⭐

`this` depends on how a regular function is called.

```js
const user = {
    name: "Anwar",

    greet() {
        console.log(this.name);
    }
};

user.greet();
// "Anwar"
```

Arrow functions do **not** create their own `this`; they inherit it from the surrounding scope.

## 15. `call()`, `apply()`, `bind()`

```js
function greet(city) {
    console.log(this.name, city);
}

const user = { name: "Anwar" };

greet.call(user, "Karachi");
greet.apply(user, ["Karachi"]);

const boundGreet = greet.bind(user);
boundGreet("Karachi");
```

Remember:

```text
call  → invokes immediately; arguments individually
apply → invokes immediately; arguments as array
bind  → returns a new function
```

## 16. Recursion

A function calling itself.

```js
function countdown(n) {
    if (n <= 0) return;

    console.log(n);
    countdown(n - 1);
}

countdown(3);
```

A recursive function needs a **base case**.

## 17. Function Hoisting ⭐

Function declarations are hoisted:

```js
greet();

function greet() {
    console.log("Hello");
}
```

Function expressions assigned to `let`/`const` cannot be used before initialization:

```js
greet();

const greet = function() {
    console.log("Hello");
};
```

## 18. Pure Functions

A pure function gives the same output for the same inputs and does not modify external state.

```js
function add(a, b) {
    return a + b;
}
```

Pure functions are easier to test and reason about.

---

# Interview Questions

### Q1. Parameter vs argument?

```text
Parameter → variable in function definition
Argument  → value passed during function call
```

### Q2. Function declaration vs expression?

```js
function add() {}
```

Declaration.

```js
const add = function() {};
```

Expression.

Function declarations are hoisted; expressions follow their variable's initialization rules.

### Q3. What is an arrow function?

A shorter function syntax:

```js
const add = (a, b) => a + b;
```

Arrow functions also have lexical `this`.

### Q4. What is a callback?

A function passed to another function.

```js
setTimeout(() => {
    console.log("Done");
}, 1000);
```

### Q5. What is a closure?

A function that retains access to variables from its outer lexical scope.

### Q6. What is a higher-order function?

A function that accepts functions as arguments or returns a function.

### Q7. `call()` vs `apply()` vs `bind()`?

```text
call  → immediate call, arguments separately
apply → immediate call, arguments as array
bind  → returns a new bound function
```

---

# Most Important to Master ⭐

```text
Function declaration
Function expression
Arrow functions

Parameters / arguments
return
Default parameters
Rest parameters

Scope
Callbacks
Higher-order functions
Closures

this
call()
apply()
bind()

Recursion
Hoisting
Pure functions
```

## Mental Model

```text
Functions
├── Create
│   ├── Declaration
│   ├── Expression
│   └── Arrow
│
├── Inputs / Outputs
│   ├── Parameters
│   ├── Arguments
│   ├── return
│   ├── Defaults
│   └── Rest
│
├── Behavior
│   ├── Callback
│   ├── Higher-order
│   ├── Closure
│   └── Recursion
│
└── Advanced
    ├── this
    ├── call
    ├── apply
    ├── bind
    └── Hoisting
```
