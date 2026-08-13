# JavaScript — How JavaScript Works

JavaScript is a **high-level, dynamically typed, single-threaded language**.

The key execution model:

```text
JavaScript Code
      ↓
JavaScript Engine
      ↓
Execution Context
      ↓
Creation Phase
      ↓
Execution Phase
      ↓
Call Stack
      ↓
Runtime APIs + Queues
      ↓
Event Loop
```

---

# 1. JavaScript Engine

A JavaScript engine executes JavaScript code.

Examples:

```text
Chrome / Node.js → V8
Firefox           → SpiderMonkey
Safari            → JavaScriptCore
```

The engine generally performs:

```text
Source Code
    ↓
Parsing
    ↓
Compilation / Optimization
    ↓
Execution
```

Modern engines use **JIT (Just-In-Time) compilation** to optimize code.

---

# 2. JavaScript Runtime

The engine is only part of the environment.

### Browser

```text
Browser
├── JavaScript Engine
├── DOM
├── fetch()
├── Timers
└── Event System
```

### Node.js

```text
Node.js
├── V8
├── File System APIs
├── Networking
└── Timers
```

Remember:

```text
JavaScript language ≠ Browser
JavaScript language ≠ Node.js
```

---

# 3. Execution Context ⭐

An **execution context** is the environment in which JavaScript code is evaluated and executed.

Main types:

```text
Global Execution Context
Function Execution Context
```

Example:

```js
const name = "Anwar";

function greet() {
    const message = "Hello";
    console.log(message, name);
}

greet();
```

JavaScript creates the global execution context first.

When `greet()` is called, a new function execution context is created.

---

# 4. Creation Phase ⭐

This is an important part of understanding JavaScript execution.

When an execution context is created, JavaScript prepares the environment **before executing the code line by line**.

Conceptually, during the creation phase JavaScript sets up:

```text
Execution Context
├── Variables
├── Functions
├── Scope information
└── this
```

Consider:

```js
var x = 10;

let y = 20;

function greet() {
    console.log("Hello");
}
```

Before normal execution starts, the environment is prepared.

### Simplified idea

```text
Creation Phase

var x        → initialized as undefined
let y        → created but not initialized
greet        → function available
```

Then the execution phase begins.

> Note: modern JavaScript engines have more detailed internal behavior than this simplified model. The creation/execution model is mainly a useful way to understand hoisting and the Temporal Dead Zone.

---

# 5. Execution Phase ⭐

After the environment is prepared, JavaScript executes the code in order.

Example:

```js
var x = 10;

let y = 20;

console.log(x);
console.log(y);
```

Conceptually:

```text
Creation Phase
    ↓
x → undefined
y → uninitialized

Execution Phase
    ↓
x = 10
y = 20
console.log(x)
console.log(y)
```

Output:

```text
10
20
```

---

# 6. `var`, `let`, `const` During Creation

This is important for interviews.

```js
console.log(a);
var a = 10;
```

Output:

```text
undefined
```

Conceptually:

```text
Creation:
a → undefined

Execution:
console.log(a) → undefined
a = 10
```

Now:

```js
console.log(b);
let b = 20;
```

This throws a `ReferenceError`.

Why?

`let` and `const` are created in the lexical environment but remain **uninitialized** until execution reaches their declaration.

This period is called the:

```text
Temporal Dead Zone (TDZ)
```

---

# 7. Temporal Dead Zone ⭐

The TDZ is the period between entering a scope and executing the declaration of a `let`, `const`, or `class`.

```js
console.log(x);

let x = 10;
```

Result:

```text
ReferenceError
```

The variable exists in the environment, but it cannot be accessed before initialization.

---

# 8. Function Hoisting ⭐

Function declarations are available during the creation phase.

```js
greet();

function greet() {
    console.log("Hello");
}
```

Output:

```text
Hello
```

Conceptually:

```text
Creation Phase:
greet → function

Execution Phase:
greet() → runs
```

This differs from:

```js
greet();

const greet = function() {
    console.log("Hello");
};
```

Here, `greet` is not initialized when it is called.

---

# 9. Complete Example: Creation + Execution Phase ⭐⭐⭐

Consider:

```js
var a = 10;
let b = 20;

function add(x, y) {
    var result = x + y;
    return result;
}

console.log(add(a, b));
```

## Step 1 — Global Execution Context Created

Conceptually:

```text
Global Context

Creation Phase:
────────────────────────
a      → undefined
b      → uninitialized
add    → function
```

## Step 2 — Global Execution Phase

```text
a = 10
b = 20
```

Then:

```js
add(a, b)
```

is called.

---

# 10. Function Execution Context

Calling:

```js
add(a, b);
```

creates a new execution context.

```text
Global Execution Context
        │
        ↓
add() Function Context
```

For:

```js
function add(x, y) {
    var result = x + y;
    return result;
}
```

### Function Creation Phase

Conceptually:

```text
x      → argument value
y      → argument value
result → undefined
```

### Function Execution Phase

```text
result = x + y
return result
```

Then the function finishes and its execution context is removed from the call stack.

---

# 11. Execution Context + Call Stack ⭐

Example:

```js
function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();
```

When the program starts:

```text
┌──────────┐
│  Global  │
└──────────┘
```

`first()` is called:

```text
┌──────────┐
│  first   │
├──────────┤
│  Global  │
└──────────┘
```

`second()` is called:

```text
┌──────────┐
│  second  │
├──────────┤
│  first   │
├──────────┤
│  Global  │
└──────────┘
```

`second()` finishes:

```text
┌──────────┐
│  first   │
├──────────┤
│  Global  │
└──────────┘
```

Then `first()` finishes.

---

# 12. Call Stack ⭐

The Call Stack follows:

```text
LIFO
Last In, First Out
```

It stores currently executing function calls.

Example:

```js
function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.log("Hello");
}

a();
```

Stack:

```text
┌─────────┐
│    c    │ ← top
├─────────┤
│    b    │
├─────────┤
│    a    │
├─────────┤
│ Global  │
└─────────┘
```

---

# 13. Stack Overflow

Infinite recursion keeps adding execution contexts to the stack.

```js
function test() {
    test();
}

test();
```

Eventually:

```text
Call Stack
   ↓
Call Stack
   ↓
Call Stack
   ↓
Stack Overflow
```

This is why recursion needs a **base case**.

---

# 14. Memory / Heap ⭐

JavaScript needs memory to store data.

A simplified model:

```text
JavaScript Memory
├── Stack
│   └── execution information
│
└── Heap
    └── objects / dynamically allocated data
```

Example:

```js
const user = {
    name: "Anwar",
    age: 20
};
```

The object is stored in memory managed by the JavaScript runtime.

The exact internal representation is engine-dependent.

---

# 15. Garbage Collection

JavaScript automatically manages memory.

If an object is no longer reachable, it can eventually be garbage collected.

```js
let user = {
    name: "Anwar"
};

user = null;
```

If no other references exist, the original object becomes eligible for garbage collection.

---

# 16. JavaScript Is Single-Threaded ⭐

The main JavaScript execution model uses one call stack.

Therefore:

```text
One main JS thread
        ↓
One piece of JS executes at a time
```

But the surrounding runtime can use additional threads for certain operations.

---

# 17. Synchronous Code

Synchronous code executes sequentially.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

---

# 18. Asynchronous JavaScript ⭐

The runtime can handle asynchronous operations without blocking the main JavaScript execution flow.

```js
console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Timer
```

---

# 19. Runtime APIs

In a browser, APIs such as:

```text
setTimeout()
fetch()
DOM events
WebSocket
```

are provided by the environment.

Simplified:

```text
JavaScript
    ↓
setTimeout()
    ↓
Browser Timer API
    ↓
callback becomes eligible
    ↓
Task Queue
```

---

# 20. Event Loop ⭐

The Event Loop coordinates queued work with the Call Stack.

Simplified:

```text
                 ┌──────────────┐
                 │  Call Stack  │
                 └──────┬───────┘
                        ↑
                        │
                 ┌──────┴───────┐
                 │  Event Loop  │
                 └──────┬───────┘
                        ↑
             ┌──────────┴──────────┐
             ↓                     ↓
       Microtask Queue          Task Queue
```

---

# 21. Task Queue

Many asynchronous callbacks are scheduled as tasks.

Example:

```js
setTimeout(() => {
    console.log("Timer");
}, 0);
```

`0` milliseconds does not mean immediate execution.

The current synchronous work must finish first.

---

# 22. Microtask Queue ⭐

Promise reactions are handled as microtasks.

```js
Promise.resolve().then(() => {
    console.log("Promise");
});
```

Common microtasks:

```text
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()
```

Microtasks are processed before the next ordinary task in the browser event-loop model.

---

# 23. Famous Interview Question ⭐⭐⭐

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

Reason:

```text
1. Synchronous code → A, D
2. Microtask        → C
3. Task             → B
```

---

# 24. Promises

A Promise represents the eventual result of an asynchronous operation.

States:

```text
pending
   ↓
fulfilled

or

pending
   ↓
rejected
```

Example:

```js
Promise.resolve("Success")
    .then(value => {
        console.log(value);
    });
```

---

# 25. `async` / `await`

An `async` function always returns a Promise.

```js
async function getData() {
    return "Hello";
}
```

`await` suspends the current async function until the Promise settles.

```js
async function getData() {
    const response = await fetch("/api/users");
    const data = await response.json();

    return data;
}
```

Important:

```text
await pauses this async function
        ≠
blocks the entire JS thread
```

---

# 26. Full JavaScript Execution Model ⭐⭐⭐

For:

```js
var x = 10;

function test() {
    var y = 20;
    return x + y;
}

console.log(test());
```

Think in this order:

```text
1. JavaScript starts
        ↓
2. Global Execution Context created
        ↓
3. Creation Phase
        ↓
   x → undefined
   test → function
        ↓
4. Execution Phase
        ↓
   x = 10
        ↓
5. test() called
        ↓
6. Function Execution Context created
        ↓
7. Function Creation Phase
        ↓
   y → undefined
        ↓
8. Function Execution Phase
        ↓
   y = 20
   return x + y
        ↓
9. Function context removed
        ↓
10. Global execution continues
```

Output:

```text
30
```

---

# Interview Questions

### Q1. What are the two main phases of execution?

For the common conceptual model:

```text
Creation Phase
Execution Phase
```

Creation prepares the execution environment. Execution runs the code.

### Q2. What happens in the creation phase?

Conceptually, JavaScript prepares variables, function declarations, scope information, and `this` for the execution context.

### Q3. Why is `var` different from `let`?

```js
console.log(a);
var a = 10;
// undefined
```

`var` is initialized to `undefined` during environment setup.

```js
console.log(b);
let b = 10;
// ReferenceError
```

`let` exists but remains uninitialized until its declaration is executed.

### Q4. What is the TDZ?

The period where a `let`, `const`, or `class` binding exists but cannot be accessed before initialization.

### Q5. What happens when a function is called?

A new **Function Execution Context** is created and pushed onto the Call Stack.

### Q6. What is the Call Stack?

A LIFO structure that tracks active execution contexts/function calls.

### Q7. What is the Event Loop?

A mechanism that coordinates queued asynchronous work with the Call Stack.

### Q8. Why does `setTimeout(fn, 0)` not run immediately?

Because the callback must wait until current synchronous code finishes and the runtime schedules the task.

### Q9. Which runs first: Promise or `setTimeout(..., 0)`?

Normally:

```text
Promise callback → Microtask
Timer callback   → Task
```

Microtasks are processed before the next task.

### Q10. Does `await` block JavaScript?

No. It suspends the current async function while other JavaScript work can continue.

---

# Most Important to Master ⭐

Study in this order:

```text
1. JavaScript Engine
2. Runtime
3. Execution Context
4. Creation Phase
5. Execution Phase
6. Hoisting
7. TDZ
8. Call Stack
9. Stack Overflow
10. Heap / Memory
11. Garbage Collection
12. Synchronous vs Asynchronous
13. Runtime APIs
14. Task Queue
15. Microtask Queue
16. Event Loop
17. Promises
18. async / await
```

# Final Mental Model

```text
                 JAVASCRIPT RUNTIME
                        │
                        ↓
              Execution Context
                        │
              ┌─────────┴─────────┐
              ↓                   ↓
        Creation Phase       Execution Phase
              │                   │
              │                   ↓
              │              Call Stack
              │                   │
              └───────────────────┘
                        │
                        ↓
                  Runtime APIs
                 /                          Timers           fetch
                 \             /
                  ↓           ↓
                 Queues
                /                     ↓        ↓
         Microtasks    Tasks
               \        /
                ↓      ↓
                 Event Loop
                     │
                     ↓
                 Call Stack
```

## One Sentence to Remember

> **JavaScript creates an execution context, prepares its environment during the creation phase, executes code during the execution phase, uses the call stack for synchronous execution, and relies on the runtime plus event loop for asynchronous work.**
