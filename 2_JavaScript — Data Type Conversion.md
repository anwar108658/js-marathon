# JavaScript — Data Type Conversion

**Type conversion** means changing a value from one data type to another.

JavaScript has two main types of conversion:

1. **Explicit conversion** — you convert it yourself.
2. **Implicit conversion (coercion)** — JavaScript converts it automatically.

---

## 1. String → Number

```js
let age = "20";

let num = Number(age);

console.log(num);        // 20
console.log(typeof num); // "number"
```

Other useful methods:

```js
Number("10");   // 10
parseInt("10"); // 10
parseFloat("10.5"); // 10.5
```

---

## 2. Number → String

```js
let age = 20;

let text = String(age);

console.log(text);        // "20"
console.log(typeof text); // "string"
```

Or:

```js
let text = age.toString();
```

---

## 3. Boolean Conversion

Use `Boolean()`:

```js
Boolean(1);     // true
Boolean(0);     // false
Boolean("hello"); // true
Boolean("");      // false
```

### Important Falsy Values

Remember these:

```text
false
0
-0
0n
""
null
undefined
NaN
```

Almost everything else is **truthy**.

---

# 4. Implicit Conversion

JavaScript sometimes converts types automatically.

```js
console.log("5" + 2);
```

Output:

```text
"52"
```

Because `+` with a string performs string concatenation.

But:

```js
console.log("5" - 2);
```

Output:

```text
3
```

JavaScript converts `"5"` into a number.

---

## 5. `+` vs `-`

This is a common interview trap:

```js
"10" + 5; // "105"
"10" - 5; // 5
"10" * 2; // 20
"10" / 2; // 5
```

### Rule

`+` can mean **addition OR string concatenation**.

`-`, `*`, `/` generally force numeric conversion.

---

# 6. `==` vs `===`

### `==` performs type conversion

```js
5 == "5"; // true
```

### `===` checks type AND value

```js
5 === "5"; // false
```

**Best practice:** Prefer `===` and `!==` because they avoid unexpected type coercion.

---

# Interview Questions

### Q1. What is type coercion?

**Answer:** Automatic conversion of one data type into another by JavaScript.

### Q2. What is the difference between `==` and `===`?

```js
5 == "5";  // true
5 === "5"; // false
```

`==` allows type conversion; `===` does not.

### Q3. What is the output?

```js
console.log("10" + 5);
console.log("10" - 5);
```

**Answer:**

```text
105
5
```

### Key takeaway

```text
Number()  → convert to number
String()  → convert to string
Boolean() → convert to boolean

==  → type coercion
=== → strict comparison
```