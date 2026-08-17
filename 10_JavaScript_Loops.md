# JavaScript — Loops

A **loop** repeatedly executes code while a condition is true or while iterating over data.

```text
for
while
do...while
for...of
for...in
```

## 1. `for` Loop ⭐

Use it when you need an index or a controlled iteration.

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Output:

```text
0
1
2
3
4
```

Structure:

```js
for (initialization; condition; update) {
    // code
}
```

## 2. Loop Through an Array

```js
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Useful when you need the **index**.

## 3. `while` Loop

Runs while the condition is true.

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

Make sure the condition can eventually become false.

## 4. `do...while`

Runs the code **at least once**, then checks the condition.

```js
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

Difference:

```text
while      → condition first
do...while → code first
```

## 5. `for...of` ⭐

Iterates over **values** of iterables such as arrays and strings.

```js
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Banana
Mango
```

## 6. `for...in` ⭐

Iterates over **enumerable property keys** of an object.

```js
const user = {
    name: "Anwar",
    age: 20,
    city: "Karachi"
};

for (const key in user) {
    console.log(key, user[key]);
}
```

Remember:

```text
for...of → values
for...in → keys
```

For normal array iteration, prefer `for...of` rather than `for...in`.

## 7. `break` ⭐

Stops the loop completely.

```js
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
0
1
2
3
4
```

## 8. `continue` ⭐

Skips the current iteration.

```js
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
0
1
3
4
```

```text
break    → stop loop
continue → skip current iteration
```

## 9. Nested Loops

A loop inside another loop.

```js
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}
```

Common for:

- 2D arrays
- matrices
- grids
- combinations

## 10. 2D Arrays

```js
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

for (const row of matrix) {
    for (const value of row) {
        console.log(value);
    }
}
```

## 11. Infinite Loops

An infinite loop never becomes false.

```js
while (true) {
    console.log("Running");
}
```

Avoid this unless you intentionally need an endless loop.

## 12. Array Methods ⭐

These are not loop statements, but they are important ways to iterate over arrays.

### `forEach()`

```js
const nums = [1, 2, 3];

nums.forEach(num => {
    console.log(num);
});
```

### `map()`

Creates a new array.

```js
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);

// [2, 4, 6]
```

### `filter()`

Returns matching elements.

```js
const nums = [1, 2, 3, 4];

const even = nums.filter(num => num % 2 === 0);

// [2, 4]
```

### `find()`

Returns the first matching element.

```js
const nums = [5, 10, 15];

const result = nums.find(num => num > 8);

// 10
```

## 13. Which Should I Use? ⭐

| Situation | Choice |
|---|---|
| Need index / general loop | `for` |
| Condition-based repetition | `while` |
| Must run at least once | `do...while` |
| Array/string values | `for...of` |
| Object keys | `for...in` |
| Transform array | `map()` |
| Select items | `filter()` |
| Find one item | `find()` |
| Perform action for each item | `forEach()` |

## 14. Basic Complexity

A loop over `n` elements is usually:

```text
O(n)
```

```js
for (let i = 0; i < n; i++) {
    console.log(i);
}
```

Nested loops often result in:

```text
O(n²)
```

```js
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

This is important for coding interviews.

# Interview Questions

### Q1. What is a loop?

A control structure that repeatedly executes code based on a condition or iterable.

### Q2. `for` vs `while`?

```text
for   → commonly used for controlled/index-based iteration
while → commonly used when repetition depends on a condition
```

### Q3. `while` vs `do...while`?

```text
while      → condition checked before execution
do...while → condition checked after execution
```

### Q4. `break` vs `continue`?

```text
break    → terminates the loop
continue → skips the current iteration
```

### Q5. `for...in` vs `for...of`?

```text
for...in → enumerable keys
for...of → iterable values
```

### Q6. Why avoid `for...in` for arrays?

Because it iterates property keys rather than array values, and enumerable/inherited properties can make it unsuitable for normal array iteration.

### Q7. What is the difference between `map()` and `forEach()`?

```text
map     → creates and returns a new array
forEach → performs an action for each item and returns undefined
```

Example:

```js
const result = [1, 2, 3].map(x => x * 2);
// [2, 4, 6]

[1, 2, 3].forEach(x => console.log(x));
// no new array returned
```

# Most Important to Master ⭐

```text
for
while
do...while

for...of
for...in

break
continue
nested loops

map()
filter()
find()
forEach()

O(n)
O(n²)
```

## Mental Model

```text
Loops
├── Counter
│   └── for
│
├── Condition
│   ├── while
│   └── do...while
│
├── Iteration
│   ├── for...of → values
│   └── for...in → keys
│
├── Control
│   ├── break
│   └── continue
│
└── Array iteration
    ├── forEach
    ├── map
    ├── filter
    └── find
```
