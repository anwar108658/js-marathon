# JavaScript — Date & Time

JavaScript uses the built-in `Date` object to work with dates and times.

## 1. Creating a Date

### Current date and time

```js
const now = new Date();
console.log(now);
```

### Specific date

```js
const date = new Date("2026-08-12");
```

### Using date components

```js
const date = new Date(2026, 7, 12);
```

⚠️ Months are zero-based:

```text
January = 0
February = 1
...
August = 7
December = 11
```

---

## 2. Getting Date Values

```js
date.getFullYear();   // year
date.getMonth();      // month: 0–11
date.getDate();       // day of month: 1–31
date.getDay();        // weekday: 0–6

date.getHours();      // 0–23
date.getMinutes();    // 0–59
date.getSeconds();    // 0–59
date.getMilliseconds();// 0–999
```

### `getDay()` vs `getDate()` ⭐

```text
getDate() → day of month: 1–31
getDay()  → day of week: 0–6
```

---

## 3. UTC Methods

JavaScript also provides UTC versions:

```js
date.getUTCFullYear();
date.getUTCMonth();
date.getUTCDate();
date.getUTCDay();

date.getUTCHours();
date.getUTCMinutes();
date.getUTCSeconds();
date.getUTCMilliseconds();
```

```text
getHours()    → local time
getUTCHours() → UTC time
```

---

## 4. Setting Date Values

```js
const date = new Date();

date.setFullYear(2030);
date.setMonth(5);
date.setDate(15);

date.setHours(10);
date.setMinutes(30);
date.setSeconds(20);
date.setMilliseconds(500);
```

UTC versions also exist:

```js
date.setUTCFullYear();
date.setUTCMonth();
date.setUTCDate();
date.setUTCHours();
date.setUTCMinutes();
date.setUTCSeconds();
date.setUTCMilliseconds();
```

---

## 5. Formatting Dates

### `toString()`

```js
new Date().toString();
```

Returns a readable date/time string.

### `toDateString()`

```js
new Date().toDateString();
```

Returns the date portion.

### `toTimeString()`

```js
new Date().toTimeString();
```

Returns the time portion.

### `toISOString()` ⭐

Returns an ISO 8601 UTC string.

```js
new Date().toISOString();
```

Example:

```text
2026-08-12T05:00:00.000Z
```

`Z` means UTC.

This format is very common with APIs and databases.

---

## 6. Localized Formatting

### `toLocaleString()`

```js
const date = new Date();

date.toLocaleString();
```

You can customize it:

```js
date.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short"
});
```

Also:

```js
date.toLocaleDateString();
date.toLocaleTimeString();
```

---

## 7. Timestamps

### `Date.now()`

Returns milliseconds since **January 1, 1970 UTC**.

```js
Date.now();
```

### `getTime()`

Returns the timestamp of a Date object.

```js
const date = new Date();

date.getTime();
```

Both are useful for calculating time differences.

```js
const start = Date.now();

// operation

const end = Date.now();

console.log(end - start);
```

---

## 8. Creating a Date from a Timestamp

```js
const date = new Date(0);
```

`0` represents the Unix epoch:

```text
January 1, 1970 00:00:00 UTC
```

You can also use another timestamp:

```js
const date = new Date(1786510800000);
```

---

## 9. Comparing Dates

Dates can be compared directly:

```js
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-12-01");

console.log(date1 < date2);
// true
```

You can also compare timestamps:

```js
date1.getTime() < date2.getTime();
```

---

## 10. Date Difference

```js
const start = new Date("2026-01-01");
const end = new Date("2026-01-10");

const difference = end - start;

console.log(difference);
```

The result is in milliseconds.

Convert milliseconds to days:

```js
const days = difference / (1000 * 60 * 60 * 24);

console.log(days);
// 9
```

---

## 11. Static Methods

### `Date.now()`

Current timestamp:

```js
Date.now();
```

### `Date.parse()`

Parses a date string and returns a timestamp:

```js
Date.parse("2026-08-12");
```

### `Date.UTC()`

Creates a UTC timestamp:

```js
Date.UTC(2026, 7, 12);
```

---

## 12. Important Date Methods Cheat Sheet

| Method | Purpose |
|---|---|
| `new Date()` | Create Date object |
| `Date.now()` | Current timestamp |
| `Date.parse()` | Parse date string |
| `Date.UTC()` | Create UTC timestamp |
| `getFullYear()` | Get year |
| `getMonth()` | Get month `0–11` |
| `getDate()` | Get day `1–31` |
| `getDay()` | Get weekday `0–6` |
| `getHours()` | Get hour |
| `getMinutes()` | Get minutes |
| `getSeconds()` | Get seconds |
| `getMilliseconds()` | Get milliseconds |
| `getUTC...()` | Get UTC values |
| `setFullYear()` | Set year |
| `setMonth()` | Set month |
| `setDate()` | Set day |
| `setHours()` | Set hour |
| `setMinutes()` | Set minutes |
| `setSeconds()` | Set seconds |
| `setMilliseconds()` | Set milliseconds |
| `getTime()` | Get timestamp |
| `toString()` | Full readable date |
| `toDateString()` | Date only |
| `toTimeString()` | Time only |
| `toISOString()` | ISO/UTC format |
| `toLocaleString()` | Localized date/time |
| `toLocaleDateString()` | Localized date |
| `toLocaleTimeString()` | Localized time |

---

# Interview Questions

### Q1. What is the JavaScript `Date` object?

A built-in object used to represent and manipulate dates and times.

### Q2. Why is `getMonth()` confusing?

Because months are zero-based:

```js
// 0 = January
// 1 = February
// ...
// 11 = December
```

### Q3. What does `Date.now()` return?

Milliseconds elapsed since January 1, 1970 UTC.

### Q4. Difference between `getDate()` and `getDay()`?

```text
getDate() → day of month: 1–31
getDay()  → day of week: 0–6
```

### Q5. What is `toISOString()` used for?

It produces a standardized UTC date/time string, commonly used with APIs and databases.

```js
new Date().toISOString();
```

---

# Important to Remember ⭐

```text
getMonth() → 0–11
getDate()  → 1–31
getDay()   → 0–6
```

Most important methods:

```js
new Date()
Date.now()

date.getFullYear()
date.getMonth()
date.getDate()
date.getDay()

date.getTime()

date.toISOString()
date.toLocaleString()
```

`Date` has several timezone-related quirks, so for advanced date/time work, also learn the modern **Temporal API**.
