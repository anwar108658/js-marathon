# JavaScript — Objects

An **object** stores data as key-value pairs.

```js
const user = {
    name: "Anwar",
    age: 20,
    isStudent: true
};
```

## 1. Accessing Properties

```js
user.name;      // "Anwar"
user["name"];   // "Anwar"
```

Bracket notation is useful with dynamic keys:

```js
const key = "name";
user[key]; // "Anwar"
```

## 2. Add, Update, Delete

```js
user.city = "Karachi"; // add
user.age = 21;         // update
delete user.city;      // delete
```

## 3. Object Methods

Objects can contain functions.

```js
const user = {
    name: "Anwar",

    greet() {
        console.log("Hello");
    }
};

user.greet();
```

## 4. `this` ⭐

Inside a normal object method, `this` refers to the object used to call the method.

```js
const user = {
    name: "Anwar",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet();
// Hello Anwar
```

## 5. Property Shorthand

```js
const name = "Anwar";
const age = 20;

const user = {
    name,
    age
};
```

Instead of:

```js
const user = {
    name: name,
    age: age
};
```

## 6. Nested Objects

```js
const user = {
    name: "Anwar",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

user.address.city;
// "Karachi"
```

Objects inside arrays are extremely common with API data:

```js
const users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 22 }
];

users[0].name;
// "Ali"
```

## 7. `Object.keys()`

Returns an array of property names.

```js
Object.keys(user);
// ["name", "age", "address"]
```

## 8. `Object.values()`

Returns an array of property values.

```js
Object.values(user);
```

## 9. `Object.entries()`

Returns key-value pairs.

```js
Object.entries(user);

// [
//   ["name", "Anwar"],
//   ["age", 20]
// ]
```

Useful for looping:

```js
Object.entries(user).forEach(([key, value]) => {
    console.log(key, value);
});
```

## 10. `Object.hasOwn()`

Checks whether an object directly owns a property.

```js
Object.hasOwn(user, "name");
// true
```

## 11. Spread Operator ⭐

Creates a shallow copy.

```js
const copy = { ...user };
```

Useful for updating without mutating the original:

```js
const updatedUser = {
    ...user,
    age: 21
};
```

This is very important in React.

## 12. Object Destructuring ⭐

Extract properties into variables.

```js
const user = {
    name: "Anwar",
    age: 20
};

const { name, age } = user;
```

Rename while destructuring:

```js
const { name: userName } = user;
```

Default value:

```js
const { city = "Unknown" } = user;
```

## 13. Destructuring Function Parameters

Very common in frontend development:

```js
function showUser({ name, age }) {
    console.log(name, age);
}

showUser({
    name: "Anwar",
    age: 20
});
```

## 14. Optional Chaining `?.` ⭐

Safely accesses nested properties.

```js
const user = {};

user.address?.city;
// undefined
```

Without `?.`, accessing `user.address.city` would throw when `address` is undefined.

Very useful with API data.

## 15. Nullish Coalescing `??`

Provides a fallback only for `null` or `undefined`.

```js
const user = {};

const city = user.city ?? "Unknown";
// "Unknown"
```

Important:

```js
0 || 100;  // 100
0 ?? 100;  // 0
```

## 16. Object References ⭐

Objects are reference types.

```js
const user1 = {
    name: "Anwar"
};

const user2 = user1;

user2.name = "Ali";

console.log(user1.name);
// "Ali"
```

Both variables refer to the same object.

## 17. Shallow Copy

```js
const copy = { ...user };
```

Top-level properties are copied, but nested objects are still shared.

```js
const user = {
    name: "Anwar",
    address: {
        city: "Karachi"
    }
};

const copy = { ...user };

copy.address.city = "Lahore";

console.log(user.address.city);
// "Lahore"
```

## 18. Deep Copy

Modern JavaScript provides:

```js
const copy = structuredClone(user);
```

This creates a deep clone for supported structured data.

## 19. `Object.assign()`

Copies/merges properties.

```js
const user = { name: "Anwar" };
const details = { age: 20 };

const result = Object.assign({}, user, details);

// { name: "Anwar", age: 20 }
```

Modern alternative:

```js
const result = {
    ...user,
    ...details
};
```

## 20. `Object.freeze()`

Prevents changes to an object's existing properties at the top level.

```js
const user = {
    name: "Anwar"
};

Object.freeze(user);

user.name = "Ali";

console.log(user.name);
// "Anwar"
```

`freeze()` is shallow.

## 21. `Object.seal()`

Prevents adding and deleting properties, but existing properties can change.

```js
const user = {
    name: "Anwar"
};

Object.seal(user);

user.name = "Ali"; // allowed
user.age = 20;     // not allowed
delete user.name;  // not allowed
```

## 22. `Object.fromEntries()`

Converts key-value pairs into an object.

```js
const entries = [
    ["name", "Anwar"],
    ["age", 20]
];

const user = Object.fromEntries(entries);
```

## 23. `for...in`

Loops through enumerable property keys.

```js
for (const key in user) {
    console.log(key, user[key]);
}
```

`Object.entries()` is often clearer when you need both keys and values.

---

# Important Methods

| Method | Purpose |
|---|---|
| `Object.keys()` | Property names |
| `Object.values()` | Property values |
| `Object.entries()` | Key-value pairs |
| `Object.fromEntries()` | Entries → object |
| `Object.assign()` | Copy/merge |
| `Object.hasOwn()` | Check own property |
| `Object.freeze()` | Prevent top-level changes |
| `Object.seal()` | Prevent add/delete |
| `structuredClone()` | Deep clone supported data |

---

# Mutability and Copying

```text
{ ...obj }       → shallow copy
structuredClone  → deep copy for supported data

Object.freeze()  → cannot modify top-level properties
Object.seal()    → cannot add/delete properties
```

---

# Interview Questions

### Q1. Dot notation vs bracket notation?

```js
user.name;
user["name"];
```

Bracket notation is useful for dynamic property names:

```js
const key = "name";
user[key];
```

### Q2. What does `this` mean in an object method?

For:

```js
user.greet();
```

`this` normally refers to `user`.

### Q3. What does `Object.keys()` return?

An array of the object's enumerable own property names.

### Q4. Why is `{ ...obj }` not a deep copy?

Because spread creates a **shallow copy**. Nested objects remain references to the original nested objects.

### Q5. `Object.freeze()` vs `Object.seal()`?

```text
freeze → cannot change, add, or delete top-level properties
seal   → cannot add/delete, but existing values can change
```

Both are shallow.

### Q6. `||` vs `??`?

```js
0 || 100; // 100
0 ?? 100; // 0
```

`??` only falls back for `null` and `undefined`.

---

# Most Important to Master ⭐

```text
Object creation
Dot / bracket notation
Add / update / delete
Methods
this

Object.keys()
Object.values()
Object.entries()

Destructuring
Spread operator

Optional chaining ?.
Nullish coalescing ??

Nested objects
Objects inside arrays
Object references
Shallow vs deep copy
Object.hasOwn()
```

## Mental Model

```text
Object
├── Properties
│   ├── Read
│   ├── Add
│   ├── Update
│   └── Delete
│
├── Methods
│   └── this
│
├── Utilities
│   ├── keys
│   ├── values
│   ├── entries
│   └── fromEntries
│
├── Modern syntax
│   ├── destructuring
│   ├── spread
│   ├── ?.
│   └── ??
│
└── Concepts
    ├── References
    ├── Shallow copy
    └── Deep copy
```
