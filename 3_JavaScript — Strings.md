# JavaScript — Strings

A **string** is a sequence of characters used to represent text.

```js
let name = "Anwar";
let message = 'Hello World';
let text = `JavaScript`;
```

Strings are **primitive values** and are **immutable** — string methods create a new string instead of changing the original.

---

## 1. `length`

Returns the number of characters.

```js
let str = "Hello";

console.log(str.length); // 5
```

---

## 2. Accessing Characters

### Bracket notation

```js
let str = "Hello";

console.log(str[0]); // H
console.log(str[1]); // e
```

### `charAt()`

```js
str.charAt(0); // "H"
```

### `at()`

Can also use negative indexes.

```js
str.at(0);  // "H"
str.at(-1); // "o"
```

⭐ `at()` is more flexible than `charAt()`.

---

# Searching Strings

## 3. `includes()`

Checks whether a string contains another string.

```js
"Hello World".includes("World"); // true
```

Returns `true` or `false`.

---

## 4. `startsWith()`

Checks the beginning.

```js
"JavaScript".startsWith("Java"); // true
```

## 5. `endsWith()`

Checks the ending.

```js
"JavaScript".endsWith("Script"); // true
```

---

## 6. `indexOf()`

Returns the first position where a value appears.

```js
let str = "Hello World";

str.indexOf("World"); // 6
str.indexOf("x");     // -1
```

## 7. `lastIndexOf()`

Returns the last occurrence.

```js
"hello hello".lastIndexOf("hello"); // 6
```

---

# Extracting Parts

## 8. `slice()`

Extracts part of a string.

```js
let str = "JavaScript";

str.slice(0, 4); // "Java"
str.slice(4);    // "Script"
str.slice(-6);   // "Script"
```

⭐ Very important.

---

## 9. `substring()`

Similar to `slice()`, but handles negative indexes differently.

```js
"JavaScript".substring(0, 4); // "Java"
```

For modern code, `slice()` is generally more useful.

---

# Changing Case

## 10. `toUpperCase()`

```js
"hello".toUpperCase(); // "HELLO"
```

## 11. `toLowerCase()`

```js
"HELLO".toLowerCase(); // "hello"
```

---

# Removing Spaces

## 12. `trim()`

Removes spaces from both sides.

```js
let str = "  Hello  ";

str.trim(); // "Hello"
```

## 13. `trimStart()`

```js
"  Hello".trimStart(); // "Hello"
```

## 14. `trimEnd()`

```js
"Hello  ".trimEnd(); // "Hello"
```

---

# Replacing Text

## 15. `replace()`

Replaces the **first matching occurrence**.

```js
let str = "Hello World World";

str.replace("World", "JS");
// "Hello JS World"
```

## 16. `replaceAll()`

Replaces **all occurrences**.

```js
str.replaceAll("World", "JS");
// "Hello JS JS"
```

---

# Splitting Strings

## 17. `split()`

Converts a string into an array.

```js
let str = "Apple,Banana,Orange";

let fruits = str.split(",");

console.log(fruits);
// ["Apple", "Banana", "Orange"]
```

Very common in real projects.

```js
"Hello World".split(" ");
// ["Hello", "World"]
```

---

# Combining Strings

## 18. `concat()`

Joins strings.

```js
"Hello ".concat("World");
// "Hello World"
```

Usually, template literals are preferred:

```js
let name = "Anwar";

`Hello ${name}`;
```

---

# Padding

## 19. `padStart()`

Adds characters at the beginning.

```js
"5".padStart(3, "0");
// "005"
```

## 20. `padEnd()`

Adds characters at the end.

```js
"5".padEnd(3, "0");
// "500"
```

---

# Repeating

## 21. `repeat()`

Repeats a string.

```js
"Ha".repeat(3);
// "HaHaHa"
```

---

# Comparing / Character Codes

## 22. `localeCompare()`

Compares two strings according to locale rules.

```js
"apple".localeCompare("banana");
// negative number
```

Useful when sorting strings.

---

## 23. `charCodeAt()`

Returns the UTF-16 code of a character.

```js
"A".charCodeAt(0);
// 65
```

## 24. `codePointAt()`

Returns the Unicode code point.

```js
"A".codePointAt(0);
// 65
```

`codePointAt()` handles Unicode characters more correctly.

---

# Important Static Methods

These are called on `String`, not on a string variable.

## 25. `String()`

Converts a value to a string.

```js
String(123);    // "123"
String(true);   // "true"
String(null);   // "null"
```

---

## 26. `String.fromCharCode()`

Creates a string from UTF-16 character codes.

```js
String.fromCharCode(65);
// "A"
```

## 27. `String.fromCodePoint()`

Creates a string from Unicode code points.

```js
String.fromCodePoint(65);
// "A"
```

---

# Most Important Methods to Remember ⭐

You don't need to memorize every method immediately.

Focus on these first:

```text
length
at()
includes()
startsWith()
endsWith()
indexOf()
slice()
toUpperCase()
toLowerCase()
trim()
replace()
replaceAll()
split()
concat()
repeat()
```

---

# Interview Questions

### Q1. Are JavaScript strings mutable?

**No.** Strings are immutable.

```js
let str = "Hello";

str[0] = "Y";

console.log(str);
// "Hello"
```

The original string doesn't change.

---

### Q2. Difference between `slice()` and `substring()`?

Both extract parts of a string, but:

- `slice()` supports negative indexes.
- `substring()` treats negative values as `0`.

```js
"JavaScript".slice(-6);
// "Script"

"JavaScript".substring(-6);
// "JavaScript"
```

---

### Q3. Difference between `replace()` and `replaceAll()`?

```js
"hello hello".replace("hello", "hi");
// "hi hello"

"hello hello".replaceAll("hello", "hi");
// "hi hi"
```

---

### Q4. Difference between `indexOf()` and `includes()`?

```js
"Hello".indexOf("H"); // 0
"Hello".includes("H"); // true
```

`indexOf()` returns the **position**.

`includes()` returns **true/false**.

---

### Q5. What does `split()` do?

It converts a string into an array based on a separator.

```js
"a,b,c".split(",");
// ["a", "b", "c"]
```

---

# Quick Cheat Sheet

| Method | Purpose |
|---|---|
| `length` | Get string length |
| `at()` | Get character |
| `includes()` | Check if contains |
| `startsWith()` | Check beginning |
| `endsWith()` | Check ending |
| `indexOf()` | Find first position |
| `lastIndexOf()` | Find last position |
| `slice()` | Extract part |
| `substring()` | Extract part |
| `toUpperCase()` | Uppercase |
| `toLowerCase()` | Lowercase |
| `trim()` | Remove outer spaces |
| `replace()` | Replace first match |
| `replaceAll()` | Replace all matches |
| `split()` | String → Array |
| `concat()` | Join strings |
| `repeat()` | Repeat string |
| `padStart()` | Add characters at start |
| `padEnd()` | Add characters at end |
| `localeCompare()` | Compare strings |
| `charCodeAt()` | Get UTF-16 code |
| `codePointAt()` | Get Unicode code point |

### Core idea

```text
String
  ↓
Search       → includes, indexOf
Extract      → slice, substring
Modify       → replace, trim
Case         → toUpperCase, toLowerCase
Split        → split
Combine      → concat
Inspect      → length, at
```