# JavaScript — `let`, `const`, and `var`

## 1. What are `let`, `const`, and `var`?

`let`, `const`, and `var` are JavaScript keywords used to **declare variables**.

```js
let age = 20;
const name = "Anwar";
var city = "Karachi";
```

The important difference between them is how they behave with:

- Scope
- Re-declaration
- Re-assignment
- Hoisting
- Temporal Dead Zone (TDZ)

---

# 2. `let`

`let` is used when a variable's value **may change**.

```js
let age = 20;

age = 21;

console.log(age); // 21
```

### Re-assignment is allowed

```js
let score = 10;

score = 20; // ✅ Allowed
```

### Re-declaration is NOT allowed in the same scope

```js
let score = 10;

let score = 20; // ❌ Error
```

---

# 3. `const`

`const` is used when a variable **should not be reassigned**.

```js
const pi = 3.14159;

console.log(pi);
```

### Re-assignment is NOT allowed

```js
const age = 20;

age = 21; // ❌ TypeError
```

### Re-declaration is NOT allowed

```js
const name = "Anwar";

const name = "Ali"; // ❌ SyntaxError
```

### Important

`const` does **not** mean that the value is completely immutable.

For example:

```js
const user = {
    name: "Anwar",
    age: 20
};

user.age = 21;

console.log(user);
```

This works.

Why?

Because we are not reassigning `user`. We are modifying a property of the object that `user` references.

But this does not work:

```js
const user = {
    name: "Anwar"
};

user = {
    name: "Ali"
}; // ❌ Error
```

### Interview point

> `const` prevents reassignment of the variable binding; it does not make objects or arrays immutable.

---

# 4. `var`

`var` is the older way of declaring variables in JavaScript.

```js
var age = 20;

age = 21;

console.log(age); // 21
```

Unlike `let` and `const`, `var` allows **re-declaration**.

```js
var age = 20;

var age = 30;

console.log(age); // 30
```

This behavior is one reason modern JavaScript generally prefers `let` and `const`.

---

# 5. Scope

This is one of the most important differences.

## `let` and `const` are block-scoped

A block is anything inside `{ }`.

```js
{
    let age = 20;
    const name = "Anwar";

    console.log(age);  // 20
    console.log(name); // Anwar
}

console.log(age);  // ❌ Error
console.log(name); // ❌ Error
```

The variables only exist inside the block.

---

## `var` is function-scoped

```js
{
    var age = 20;
}

console.log(age); // 20
```

The `var` variable is not limited to the block.

However, it is limited to the function in which it is declared.

```js
function test() {
    var age = 20;

    console.log(age); // 20
}

test();

console.log(age); // ❌ Error
```

### Interview definition

> `let` and `const` are block-scoped, while `var` is function-scoped.

---

# 6. Block Scope Example

Consider this:

```js
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c); // 30

console.log(a); // ❌ Error
console.log(b); // ❌ Error
```

Why?

- `let` → block-scoped
- `const` → block-scoped
- `var` → function-scoped

This is a very common interview question.

---

# 7. Re-declaration vs Re-assignment

These two concepts are different.

### Re-assignment

Changing the value of an existing variable:

```js
let age = 20;

age = 25;
```

### Re-declaration

Declaring the same variable again:

```js
let age = 20;

let age = 25; // ❌
```

---

## Comparison

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Re-assignment | ✅ | ✅ | ❌ |
| Re-declaration in same scope | ✅ | ❌ | ❌ |
| Block scoped | ❌ | ✅ | ✅ |
| Function scoped | ✅ | ❌ | ❌ |
| Hoisted | ✅ | ✅* | ✅* |
| TDZ | ❌ | ✅ | ✅ |

`*` `let` and `const` are hoisted, but they cannot be accessed before initialization because of the Temporal Dead Zone.

---

# 8. Hoisting

JavaScript moves declarations to the top of their applicable scope during the creation phase.

Consider:

```js
console.log(age);

var age = 20;
```

Output:

```text
undefined
```

Conceptually, JavaScript behaves approximately like:

```js
var age;

console.log(age);

age = 20;
```

The declaration is hoisted, but the assignment is not.

---

# 9. `let` and `const` Hoisting

Consider:

```js
console.log(age);

let age = 20;
```

This produces an error.

```text
ReferenceError
```

The same happens with `const`:

```js
console.log(age);

const age = 20;
```

### Why?

`let` and `const` are also hoisted, but they remain in the **Temporal Dead Zone (TDZ)** from the beginning of their scope until their declaration is initialized.

---

# 10. Temporal Dead Zone (TDZ)

The Temporal Dead Zone is the period between entering a variable's scope and the point where the variable is initialized.

Example:

```js
{
    // TDZ starts

    console.log(age); // ❌ ReferenceError

    let age = 20;

    // TDZ ends
}
```

The important point is:

> The variable exists in the scope, but accessing it before initialization causes a `ReferenceError`.

---

# 11. `var` vs `let` in Loops

This is a classic interview example.

### With `var`

```js
for (var i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);
```

Output:

```text
0
1
2
3
```

`i` is accessible after the loop because `var` is not block-scoped.

### With `let`

```js
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i); // ❌ ReferenceError
```

`let` creates a block-scoped variable.

---

# 12. Why is `let` usually preferred over `var`?

Modern JavaScript generally uses:

```js
const
```

and

```js
let
```

instead of:

```js
var
```

because `let` and `const` provide more predictable scoping and prevent accidental re-declaration.

A common rule is:

```js
const name = "Anwar";
```

Use `const` by default.

If the value needs to change:

```js
let score = 0;

score++;
```

Use `let`.

Use `var` mainly when working with older JavaScript code or when you specifically need its historical behavior.

---

# 13. Practical Example

```js
const appName = "My App";

let score = 0;

score += 10;

console.log(appName);
console.log(score);
```

Here:

- `appName` does not need reassignment → `const`
- `score` changes → `let`

---

# 14. Interview Questions

## Q1. What is the difference between `var`, `let`, and `const`?

**Answer:**

`var` is function-scoped and allows both re-declaration and reassignment.

`let` is block-scoped and allows reassignment but not re-declaration in the same scope.

`const` is block-scoped and does not allow reassignment or re-declaration.

---

## Q2. Is `let` hoisted?

**Answer:**

Yes.

`let` declarations are hoisted, but they cannot be accessed before initialization because they are in the Temporal Dead Zone.

```js
console.log(x); // ReferenceError

let x = 10;
```

---

## Q3. Is `const` immutable?

**Answer:**

No.

`const` prevents reassignment of the variable binding, but objects and arrays can still be mutated.

```js
const user = {
    name: "Anwar"
};

user.name = "Ali"; // ✅ Allowed
```

But:

```js
user = {}; // ❌ Not allowed
```

---

## Q4. What is the Temporal Dead Zone?

**Answer:**

The Temporal Dead Zone is the period between entering a scope and initializing a `let` or `const` variable.

Accessing the variable during this period causes a `ReferenceError`.

---

## Q5. Which one is block-scoped?

```js
var
let
const
```

**Answer:**

`let` and `const`.

---

## Q6. What will this output?

```js
var x = 10;

{
    var x = 20;
}

console.log(x);
```

**Answer:**

```text
20
```

Because `var` is not block-scoped.

---

## Q7. What will this output?

```js
let x = 10;

{
    let x = 20;
    console.log(x);
}

console.log(x);
```

**Answer:**

```text
20
10
```

The inner `x` and outer `x` are different variables because `let` is block-scoped.

---

## Q8. What happens here?

```js
const x = 10;

x = 20;
```

**Answer:**

```text
TypeError
```

A `const` variable cannot be reassigned.

---

# 15. Quick Interview Cheat Sheet

Remember these five points:

```text
var   → function scoped
let   → block scoped + reassignable
const → block scoped + not reassignable

var   → can redeclare
let   → cannot redeclare in same scope
const → cannot redeclare in same scope
```

### Modern rule

```js
const → default choice
let   → when value needs to change
var   → generally avoid in modern JavaScript
```

---

# 16. One Interview-Level Example

What does this print?

```js
var x = 1;

if (true) {
    var x = 2;
    let y = 3;
    const z = 4;
}

console.log(x);
console.log(y);
console.log(z);
```

### Answer

```text
2
ReferenceError
ReferenceError
```

Why?

`x` is declared with `var`, so the `if` block does not create a separate scope for it.

`y` and `z` are declared with `let` and `const`, so they are limited to the `if` block.

---

# Key Takeaways

1. Prefer `const` by default.
2. Use `let` when reassignment is required.
3. Avoid `var` in new code unless there is a specific reason to use it.
4. `let` and `const` are block-scoped.
5. `var` is function-scoped.
6. `var` can be redeclared; `let` and `const` cannot in the same scope.
7. `let` and `const` have a Temporal Dead Zone.
8. `const` does not make objects and arrays immutable.
9. Understanding scope + hoisting + TDZ is important for JavaScript interviews.