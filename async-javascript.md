# Asynchronous JavaScript

**Asynchronous (async)** JavaScript means JavaScript can start a task that takes time and **continue executing other code instead of waiting for that task to finish**.

Typical async tasks:

* API/network requests 🌐
* `fetch()`
* Timers like `setTimeout()`
* Reading files in Node.js
* Database operations

### 1. Synchronous vs Asynchronous

**Synchronous:**

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

Each statement waits for the previous one.

**Asynchronous:**

```js
console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

console.log("C");
```

Output:

```text
A
C
B
```

JavaScript doesn't sit there doing nothing for 2 seconds. It continues with `"C"` and comes back to `"B"` later.

---

# Promises

A **Promise** represents the eventual result of an asynchronous operation.

Think:

> "I don't have the result yet, but I promise I'll give you either a result or an error later."

A Promise has three states:

```text
pending
   ↓
fulfilled
```

or

```text
pending
   ↓
rejected
```

Example:

```js
const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data received");
    } else {
        reject("Something went wrong");
    }
});
```

### Consuming a Promise

```js
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

* `.then()` → runs when Promise succeeds
* `.catch()` → runs when Promise fails
* `.finally()` → runs regardless of success/failure

```js
promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Finished"));
```

---

# `fetch()`

`fetch()` is used to make HTTP requests, commonly to APIs.

```js
fetch("https://api.example.com/users")
```

`fetch()` returns a **Promise**.

So:

```js
fetch(url)
```

means:

> "Start the network request. I'll give you a Promise for the response."

### Basic example

```js
fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

Important detail:

```js
response.json()
```

also returns a **Promise**.

That's why we have another `.then()`.

The flow is:

```text
fetch()
  ↓
Promise<Response>
  ↓
response.json()
  ↓
Promise<data>
  ↓
data
```

---

# `async` / `await`

`async` and `await` provide a cleaner way to work with Promises.

### `async`

When you put `async` before a function, that function **always returns a Promise**.

```js
async function hello() {
    return "Hello";
}
```

Even though we return a string:

```js
hello()
```

returns a Promise.

You can consume it:

```js
hello().then(result => {
    console.log(result);
});
```

---

### `await`

`await` waits for a Promise to settle **inside an async function**.

```js
async function getUsers() {
    const response = await fetch("https://api.example.com/users");

    const data = await response.json();

    console.log(data);
}
```

This is easier to read than:

```js
fetch("https://api.example.com/users")
    .then(response => response.json())
    .then(data => console.log(data));
```

### Error handling with `try/catch`

```js
async function getUsers() {
    try {
        const response = await fetch("https://api.example.com/users");

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

---

# Important: `await` does NOT block JavaScript completely

This is a common interview trap.

```js
async function test() {
    console.log("A");

    await somePromise();

    console.log("B");
}

console.log("C");
test();
console.log("D");
```

`await` pauses **that async function**, not the entire JavaScript program/event loop.

Think:

```text
async function
     |
     | await
     ↓
pause this function
     |
     ↓
other JavaScript can continue
     |
     ↓
Promise finishes
     |
     ↓
resume async function
```

---

# Promise chaining

Promises can be chained:

```js
fetch(url)
    .then(response => response.json())
    .then(data => processData(data))
    .then(result => saveData(result))
    .catch(error => console.log(error));
```

Each `.then()` can return another Promise.

This is one reason Promises are useful for sequential async operations.

---

# `Promise.all()`

When several independent async operations can run simultaneously:

```js
const [users, products] = await Promise.all([
    fetch("/users"),
    fetch("/products")
]);
```

Instead of:

```js
const users = await fetch("/users");
const products = await fetch("/products");
```

The second version waits for the first request before starting the second.

`Promise.all()` allows them to run concurrently.

---

# The mental model

Remember this chain:

```text
Asynchronous operation
        ↓
     Promise
        ↓
   .then / .catch
        ↓
   async / await
        ↓
      fetch()
```

More precisely:

```text
fetch()
  └── returns Promise
          ├── .then()
          ├── .catch()
          └── await
```

`async/await` **doesn't replace Promises**.

It is syntax built around Promises.

---

# Interview Questions

### Beginner

**1. What is asynchronous JavaScript?**

JavaScript can start a time-consuming operation and continue executing other code without waiting for that operation to finish.

**2. What is a Promise?**

An object representing the eventual success or failure of an asynchronous operation.

**3. What are the states of a Promise?**

```text
pending
fulfilled
rejected
```

**4. What does `fetch()` return?**

A Promise that resolves to a `Response` object.

**5. What is `async`?**

It makes a function return a Promise.

**6. What is `await`?**

It pauses execution of the current async function until a Promise settles.

**7. Can `await` be used outside an async function?**

Traditionally, it could only be used inside `async` functions. Modern JavaScript also supports **top-level `await`** in ES modules.

---

### Intermediate

**8. Does `async/await` eliminate Promises?**

No. `async/await` is a cleaner syntax for working with Promises.

**9. What's the difference between `.then()` and `await`?**

Both consume Promises, but `await` generally makes asynchronous code look more like synchronous code.

**10. How do you handle errors with `async/await`?**

```js
try {
    const data = await fetchData();
} catch (error) {
    console.log(error);
}
```

**11. What is Promise chaining?**

Using the result of one Promise operation as the input to another:

```js
doSomething()
    .then(result => doSomethingElse(result))
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

**12. What is `Promise.all()` used for?**

Running multiple independent Promises concurrently and waiting for all of them to fulfill.

---

### Very important interview question

**Q: Is JavaScript asynchronous?**

The best answer:

> JavaScript itself is single-threaded, but it supports asynchronous programming through mechanisms such as the event loop, Web APIs/host APIs, callbacks, Promises, and `async/await`.

That's the important distinction:

```text
JavaScript execution → single-threaded
Asynchronous behavior → event loop + host environment
```

The next concept you should learn after this is **Event Loop → Call Stack → Web APIs → Callback Queue → Microtask Queue**, because that explains *why* Promises, `fetch`, and `async/await` actually behave the way they do.
