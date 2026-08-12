# JavaScript — Math & Number

`Number` is used for working with numbers, while `Math` provides mathematical functions and constants.

## 1. Number Conversion

### `Number()`
Converts a value to a number.

```js
Number("10");      // 10
Number("10.5");    // 10.5
Number(true);      // 1
Number(false);     // 0
Number("hello");   // NaN
```

### `parseInt()`
Parses an integer from a string.

```js
parseInt("25");       // 25
parseInt("25.5");     // 25
parseInt("25px");     // 25
```

### `parseFloat()`
Parses a decimal number.

```js
parseFloat("25.5");   // 25.5
parseFloat("25px");   // 25
```

**Important:**

```js
Number("25px");  // NaN
parseInt("25px"); // 25
```

---

## 2. Checking Numbers

### `Number.isInteger()`

```js
Number.isInteger(10);   // true
Number.isInteger(10.5); // false
Number.isInteger("10"); // false
```

### `Number.isNaN()`

```js
Number.isNaN(NaN);     // true
Number.isNaN("hello"); // false
```

### `Number.isFinite()`

```js
Number.isFinite(10);       // true
Number.isFinite(Infinity); // false
Number.isFinite("10");     // false
```

### `Number.isSafeInteger()`

Checks whether an integer can be represented safely.

```js
Number.isSafeInteger(100); // true
```

Safe range:

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

---

## 3. Important Number Constants

```js
Number.MAX_VALUE
Number.MIN_VALUE
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
Number.NaN
Number.EPSILON
```

---

## 4. Number Formatting

### `toFixed()`

Controls decimal places.

```js
let price = 10.5678;

price.toFixed(2);
// "10.57"
```

**Important:** `toFixed()` returns a string.

```js
typeof price.toFixed(2);
// "string"
```

### `toPrecision()`

Controls total significant digits.

```js
let num = 123.456;

num.toPrecision(4);
// "123.5"
```

### `toString()`

Converts a number to a string.

```js
let num = 100;

num.toString();
// "100"
```

It can also convert to another number base:

```js
(10).toString(2);  // "1010"
(10).toString(16); // "a"
```

---

# Math

`Math` provides mathematical functions and constants.

## 5. Rounding

### `Math.round()`

Rounds to the nearest integer.

```js
Math.round(4.4); // 4
Math.round(4.6); // 5
```

### `Math.floor()`

Rounds toward negative infinity.

```js
Math.floor(4.9);  // 4
Math.floor(-4.9); // -5
```

### `Math.ceil()`

Rounds toward positive infinity.

```js
Math.ceil(4.1);  // 5
Math.ceil(-4.1); // -4
```

### `Math.trunc()`

Removes the decimal part.

```js
Math.trunc(4.9);  // 4
Math.trunc(-4.9); // -4
```

Remember:

```text
round → nearest
floor → down
ceil  → up
trunc → remove decimal
```

---

## 6. Random Numbers

### `Math.random()`

Returns a number from `0` inclusive to `1` exclusive.

```js
Math.random();
```

Random integer from `0` to `9`:

```js
Math.floor(Math.random() * 10);
```

Random integer from `1` to `10`:

```js
Math.floor(Math.random() * 10) + 1;
```

General formula:

```js
Math.floor(Math.random() * (max - min + 1)) + min;
```

---

## 7. Maximum and Minimum

### `Math.max()`

```js
Math.max(10, 20, 5);
// 20
```

### `Math.min()`

```js
Math.min(10, 20, 5);
// 5
```

With an array:

```js
let numbers = [10, 20, 5];

Math.max(...numbers); // 20
Math.min(...numbers); // 5
```

---

## 8. Absolute Value

### `Math.abs()`

```js
Math.abs(-10); // 10
Math.abs(10);  // 10
```

---

## 9. Powers and Roots

### `Math.pow()`

```js
Math.pow(2, 3);
// 8
```

Modern alternative:

```js
2 ** 3;
// 8
```

### `Math.sqrt()`

Square root.

```js
Math.sqrt(25);
// 5
```

### `Math.cbrt()`

Cube root.

```js
Math.cbrt(27);
// 3
```

---

## 10. `Math.sign()`

Returns the sign of a number.

```js
Math.sign(10);  // 1
Math.sign(-10); // -1
Math.sign(0);   // 0
```

---

## 11. Logarithms and Exponents

```js
Math.log(10);     // Natural logarithm
Math.log10(100);  // 2
Math.log2(8);     // 3
Math.exp(1);      // e¹
```

---

## 12. Trigonometry

```js
Math.sin()
Math.cos()
Math.tan()

Math.asin()
Math.acos()
Math.atan()
Math.atan2()
```

Example:

```js
Math.sin(Math.PI / 2);
// 1
```

Useful for graphics, games, physics, geometry, and animations.

---

## 13. Other Useful Math Methods

### `Math.hypot()`

Calculates the square root of the sum of squares.

```js
Math.hypot(3, 4);
// 5
```

### `Math.clz32()`

Counts leading zero bits in a 32-bit representation.

```js
Math.clz32(1);
// 31
```

This is mainly relevant to low-level/bitwise programming.

---

## 14. Math Constants

```js
Math.PI
// 3.141592653589793

Math.E
// 2.718281828459045

Math.SQRT2
Math.SQRT1_2
Math.LN2
Math.LN10
```

Most important:

```js
Math.PI
Math.E
```

---

# Number vs Math

| `Number` | `Math` |
|---|---|
| Convert values | Perform calculations |
| Check numbers | Round numbers |
| Number constants | Generate random numbers |
| Format numbers | Find min/max |
| Check `NaN`/finite/integer | Roots, powers, trigonometry |

Example:

```js
Number("100");
Number.isInteger(10);

Math.sqrt(25);
Math.round(4.6);
```

---

# Interview Questions

### Q1. Difference between `Math.floor()` and `Math.trunc()`?

```js
Math.floor(-4.9); // -5
Math.trunc(-4.9); // -4
```

`floor()` goes toward negative infinity; `trunc()` removes the decimal part.

### Q2. What does `Math.random()` return?

A number where:

```text
0 <= result < 1
```

### Q3. What does `toFixed()` return?

A **string**.

```js
let x = 10.25;

typeof x.toFixed(1);
// "string"
```

### Q4. Difference between `Number()` and `parseInt()`?

```js
Number("10.5");  // 10.5
parseInt("10.5"); // 10
```

`Number()` converts the whole value; `parseInt()` parses an integer.

### Q5. What is `NaN`?

`NaN` means **Not-a-Number** and represents an invalid numeric result.

```js
Number("hello");
// NaN
```

Check it with:

```js
Number.isNaN(value);
```

---

# Most Important Methods ⭐

Master these first:

```text
Number()
Number.isNaN()
Number.isFinite()
Number.isInteger()
parseInt()
parseFloat()

Math.round()
Math.floor()
Math.ceil()
Math.trunc()
Math.random()
Math.max()
Math.min()
Math.abs()
Math.sqrt()
Math.pow()
Math.sign()

toFixed()
toPrecision()
toString()

Math.PI
Math.E
```

## Mental Model

```text
Number
 ├── Convert
 ├── Check
 ├── Constants
 └── Format

Math
 ├── Round
 ├── Random
 ├── Min / Max
 ├── Absolute
 ├── Powers / Roots
 ├── Trigonometry
 └── Logarithms
```
