# JavaScript — Arrays

An **array** stores multiple values in one variable.

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits[0]; // "Apple"
fruits[1]; // "Banana"
```

Arrays are **zero-indexed**.

## 1. Basics

### `length`

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.length; // 3
fruits[fruits.length - 1]; // "Mango"
```

---

# 2. Add / Remove Elements

### `push()`

Adds to the end and returns the new length.

```js
const fruits = ["Apple", "Banana"];

fruits.push("Mango");
// ["Apple", "Banana", "Mango"]
```

### `pop()`

Removes the last element and returns it.

```js
fruits.pop();
```

### `unshift()`

Adds to the beginning.

```js
fruits.unshift("Orange");
```

### `shift()`

Removes the first element.

```js
fruits.shift();
```

Remember:

```text
push()    → add end
pop()     → remove end
unshift() → add beginning
shift()   → remove beginning
```

---

# 3. Search

### `includes()`

```js
[10, 20, 30].includes(20);
// true
```

### `indexOf()`

Returns the first matching index or `-1`.

```js
[10, 20, 30].indexOf(20);
// 1
```

### `lastIndexOf()`

Returns the last matching index.

```js
[10, 20, 10].lastIndexOf(10);
// 2
```

---

# 4. `slice()` vs `splice()` ⭐

### `slice()`

Extracts part of an array **without changing the original**.

```js
const nums = [10, 20, 30, 40];

nums.slice(1, 3);
// [20, 30]

console.log(nums);
// [10, 20, 30, 40]
```

### `splice()`

Adds/removes elements and **changes the original**.

```js
const nums = [10, 20, 30, 40];

nums.splice(1, 2);

console.log(nums);
// [10, 40]
```

Syntax:

```js
array.splice(start, deleteCount, item1, item2);
```

Interview rule:

```text
slice()  → non-mutating
splice() → mutating
```

---

# 5. `forEach()`

Runs a function for every element.

```js
const nums = [10, 20, 30];

nums.forEach((num) => {
    console.log(num);
});
```

It does **not** create a transformed array.

---

# 6. `map()` ⭐

Creates a new array by transforming every element.

```js
const nums = [1, 2, 3];

const doubled = nums.map(num => num * 2);

console.log(doubled);
// [2, 4, 6]
```

---

# 7. `filter()` ⭐

Creates a new array containing elements that pass a condition.

```js
const nums = [1, 2, 3, 4, 5];

const even = nums.filter(num => num % 2 === 0);

// [2, 4]
```

---

# 8. `find()`

Returns the **first matching element**.

```js
const nums = [10, 20, 30];

nums.find(num => num > 15);
// 20
```

If nothing matches:

```js
// undefined
```

### `findIndex()`

Returns the index of the first match.

```js
nums.findIndex(num => num > 15);
// 1
```

---

# 9. `some()` and `every()`

### `some()`

Returns `true` if **at least one** element passes.

```js
[1, 3, 4].some(num => num % 2 === 0);
// true
```

### `every()`

Returns `true` if **all** elements pass.

```js
[2, 4, 6].every(num => num % 2 === 0);
// true
```

Remember:

```text
some()  → ONE or more
every() → ALL
```

---

# 10. `reduce()` ⭐

Reduces an array to a single value.

```js
const nums = [10, 20, 30];

const total = nums.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);
// 60
```

Common uses:

- Sum
- Average
- Counting
- Grouping
- Creating objects

---

# 11. Sorting

### `sort()`

Sorts the original array.

```js
const fruits = ["Mango", "Apple", "Banana"];

fruits.sort();
// ["Apple", "Banana", "Mango"]
```

### Important number trap ⭐

Default sorting compares values as strings:

```js
[10, 2, 5, 1].sort();
// [1, 10, 2, 5]
```

For ascending numbers:

```js
[10, 2, 5, 1].sort((a, b) => a - b);
// [1, 2, 5, 10]
```

Descending:

```js
numbers.sort((a, b) => b - a);
```

### `toSorted()`

Modern non-mutating version:

```js
const sorted = numbers.toSorted((a, b) => a - b);
```

---

# 12. `reverse()`

Reverses the original array.

```js
const nums = [1, 2, 3];

nums.reverse();
// [3, 2, 1]
```

### `toReversed()`

Non-mutating version:

```js
const reversed = nums.toReversed();
```

---

# 13. Joining / Combining

### `join()`

Array → string.

```js
["Apple", "Banana", "Mango"].join(", ");
// "Apple, Banana, Mango"
```

### `concat()`

Combines arrays and returns a new array.

```js
const a = [1, 2];
const b = [3, 4];

a.concat(b);
// [1, 2, 3, 4]
```

Modern alternative:

```js
const result = [...a, ...b];
```

---

# 14. `flat()`

Flattens nested arrays.

```js
const nums = [1, [2, 3], [4, 5]];

nums.flat();
// [1, 2, 3, 4, 5]
```

For deeper nesting:

```js
[1, [2, [3, 4]]].flat(2);
// [1, 2, 3, 4]
```

### `flatMap()`

Maps and then flattens one level.

```js
[1, 2, 3].flatMap(num => [num, num * 2]);

// [1, 2, 2, 4, 3, 6]
```

---

# 15. Other Useful Methods

### `at()`

Gets an element and supports negative indexes.

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.at(0);  // "Apple"
fruits.at(-1); // "Mango"
```

### `Array.isArray()`

Checks whether a value is an array.

```js
Array.isArray([1, 2, 3]);
// true

Array.isArray("hello");
// false
```

### `fill()`

Replaces elements.

```js
const nums = [1, 2, 3, 4];

nums.fill(0);
// [0, 0, 0, 0]
```

`fill()` mutates the original array.

### `with()`

Returns a new array with one element replaced.

```js
const nums = [10, 20, 30];

const updated = nums.with(1, 99);

console.log(nums);
// [10, 20, 30]

console.log(updated);
// [10, 99, 30]
```

---

# 16. Mutating vs Non-Mutating ⭐

### Mutates the original array

```text
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()
copyWithin()
```

### Does not mutate the original

```text
map()
filter()
slice()
concat()
flat()
flatMap()
toSorted()
toReversed()
with()
```

This distinction is particularly important when working with **React state**.

---

# Interview Questions

### Q1. `map()` vs `forEach()`?

`map()` returns a new array.

```js
const result = nums.map(x => x * 2);
```

`forEach()` is mainly for performing an action on each element.

```js
nums.forEach(x => console.log(x));
```

### Q2. `filter()` vs `find()`?

```text
filter() → ALL matching elements → array
find()   → FIRST matching element → value
```

```js
[10, 20, 30, 40].filter(x => x > 20);
// [30, 40]

[10, 20, 30, 40].find(x => x > 20);
// 30
```

### Q3. How do you check if a value is an array?

```js
Array.isArray(value);
```

### Q4. Why does numeric `sort()` behave unexpectedly?

Because default `sort()` compares values as strings.

```js
[10, 2, 5].sort();
// [10, 2, 5]
```

Use:

```js
[10, 2, 5].sort((a, b) => a - b);
// [2, 5, 10]
```

---

# Most Important Methods ⭐

Master these first:

```text
push()
pop()
shift()
unshift()

slice()
splice()

includes()
indexOf()

forEach()
map()
filter()
find()
findIndex()
some()
every()
reduce()

sort()
reverse()

join()
concat()

flat()
flatMap()

Array.isArray()
at()
```

## Mental Model

```text
Array
├── Add / Remove
│   ├── push
│   ├── pop
│   ├── shift
│   └── unshift
│
├── Search
│   ├── includes
│   ├── indexOf
│   └── find
│
├── Transform
│   ├── map
│   ├── filter
│   └── reduce
│
├── Modify
│   ├── splice
│   ├── sort
│   └── reverse
│
└── Combine / Extract
    ├── slice
    ├── concat
    ├── flat
    └── spread (...)
```
