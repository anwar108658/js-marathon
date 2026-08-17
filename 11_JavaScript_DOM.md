# JavaScript — DOM (Document Object Model)

The **DOM** is the browser's object representation of an HTML document.

JavaScript uses the DOM to:

- Select elements
- Change content
- Change styles/classes
- Change attributes
- Create/remove elements
- Handle events

## 1. HTML → DOM ⭐

HTML:

```html
<body>
    <h1>Hello</h1>
    <button>Click</button>
</body>
```

The browser parses this into a tree:

```text
Document
└── body
    ├── h1
    │   └── "Hello"
    └── button
        └── "Click"
```

JavaScript interacts with this tree through `document`.

---

## 2. `document`

```js
console.log(document);
```

Common DOM methods:

```js
document.getElementById()
document.querySelector()
document.querySelectorAll()
document.createElement()
```

---

## 3. Selecting Elements ⭐

### `getElementById()`

```html
<h1 id="title">Hello</h1>
```

```js
const title = document.getElementById("title");
```

Returns the element with that ID.

### `querySelector()` ⭐

Returns the **first** matching element.

```js
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("h1");
```

It accepts CSS selectors.

### `querySelectorAll()` ⭐

Returns all matching elements as a **NodeList**.

```js
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    console.log(button);
});
```

---

## 4. Changing Text ⭐

### `textContent`

```js
const title = document.querySelector("#title");

title.textContent = "Hello Anwar";
```

### `innerHTML`

```js
title.innerHTML = "<span>Hello</span>";
```

`innerHTML` parses the string as HTML. Avoid putting untrusted user input into it because unsafe HTML insertion can cause XSS vulnerabilities.

### Difference

```text
textContent → text
innerHTML   → HTML markup
innerText   → rendered/visible text behavior
```

---

## 5. Attributes ⭐

```html
<img id="photo" src="old.jpg" alt="Old">
```

```js
const image = document.querySelector("#photo");

image.setAttribute("src", "new.jpg");

image.getAttribute("src");

image.removeAttribute("alt");
```

Many attributes also have DOM properties:

```js
image.src = "new.jpg";
image.alt = "New image";
```

For inputs:

```js
const input = document.querySelector("#name");

input.value = "Anwar";
```

---

## 6. Classes ⭐

Use `classList`:

```js
const box = document.querySelector("#box");

box.classList.add("active");
box.classList.remove("card");
box.classList.toggle("hidden");
```

Check:

```js
box.classList.contains("active");
```

Important methods:

```text
add()
remove()
toggle()
contains()
```

---

## 7. Styles

```js
box.style.color = "red";
box.style.backgroundColor = "black";
box.style.fontSize = "20px";
```

CSS names use camelCase:

```text
background-color → backgroundColor
font-size        → fontSize
```

For larger style changes, CSS classes are usually cleaner:

```js
box.classList.add("active");
```

---

## 8. Creating Elements ⭐

```js
const p = document.createElement("p");

p.textContent = "Hello World";

document.body.append(p);
```

Useful methods:

```text
append()
prepend()
before()
after()
remove()
```

Remove:

```js
const element = document.querySelector(".card");

element.remove();
```

---

## 9. Events ⭐⭐⭐

Events let JavaScript respond to actions.

Examples:

```text
click
submit
input
change
keydown
keyup
mouseover
```

Use `addEventListener()`:

```js
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

## 10. Event Object

```js
button.addEventListener("click", event => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
});
```

Common properties:

```text
event.target
event.type
```

---

## 11. `preventDefault()` ⭐

Stops the browser's default action.

```js
const form = document.querySelector("#form");

form.addEventListener("submit", event => {
    event.preventDefault();

    console.log("Form handled by JS");
});
```

---

## 12. Event Bubbling ⭐⭐⭐

An event normally propagates from the target toward its ancestors.

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

```js
parent.addEventListener("click", () => {
    console.log("Parent");
});

child.addEventListener("click", () => {
    console.log("Child");
});
```

Clicking the button can produce:

```text
Child
Parent
```

This is **event bubbling**.

---

## 13. `stopPropagation()`

Stops an event from continuing through the propagation path.

```js
child.addEventListener("click", event => {
    event.stopPropagation();

    console.log("Child");
});
```

---

## 14. Event Delegation ⭐

Instead of adding listeners to every child, add one to the parent.

```html
<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
</ul>
```

```js
const list = document.querySelector("#list");

list.addEventListener("click", event => {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});
```

Useful for dynamic lists and many child elements.

---

## 15. DOM Traversal

Move between related elements:

```js
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
```

Example:

```js
const item = document.querySelector(".item");

console.log(item.parentElement);
console.log(item.children);
```

---

## 16. DOM vs JavaScript ⭐

```text
JavaScript → programming language
DOM        → browser-provided object model for HTML
```

JavaScript can run without the DOM.

For example, Node.js normally does not provide a browser DOM by default.

---

## 17. DOM vs HTML

```text
HTML
 ↓
Browser parses HTML
 ↓
DOM Tree
 ↓
JavaScript manipulates DOM
 ↓
Browser updates the rendered page
```

HTML is markup. The DOM is the browser's object representation of that document.

---

## 18. Real Example ⭐

HTML:

```html
<h1 id="title">Hello</h1>
<button id="btn">Change</button>
```

JavaScript:

```js
const title = document.querySelector("#title");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    title.textContent = "Hello Anwar";
});
```

Flow:

```text
User clicks
    ↓
click event
    ↓
Event listener runs
    ↓
textContent changes
    ↓
DOM changes
    ↓
Browser updates the page
```

# Interview Questions

### Q1. What is the DOM?

The **Document Object Model** is the browser's object-based representation of an HTML document that JavaScript can interact with.

### Q2. `querySelector()` vs `querySelectorAll()`?

```text
querySelector()    → first matching element
querySelectorAll() → all matching elements
```

### Q3. `textContent` vs `innerHTML`?

```text
textContent → text
innerHTML   → HTML markup
```

### Q4. What is event bubbling?

Event propagation from the target element upward through its ancestors.

### Q5. What is event delegation?

Handling child events through a parent listener, usually using event bubbling.

### Q6. `preventDefault()` vs `stopPropagation()`?

```text
preventDefault()   → stops default browser behavior
stopPropagation()  → stops event propagation
```

### Q7. What is `classList`?

An API for adding, removing, toggling, and checking CSS classes.

### Q8. How do you create a DOM element?

```js
const div = document.createElement("div");

div.textContent = "Hello";

document.body.append(div);
```

# Most Important to Master ⭐

```text
document

getElementById()
querySelector()
querySelectorAll()

textContent
innerHTML
innerText

getAttribute()
setAttribute()
removeAttribute()

classList
style

createElement()
append()
prepend()
remove()

addEventListener()
event.target

preventDefault()
stopPropagation()

Event Bubbling
Event Delegation

DOM Traversal
```

## Mental Model

```text
                    HTML
                     ↓
              Browser parses it
                     ↓
                  DOM Tree
                     ↓
                document
                     ↓
          ┌──────────┴──────────┐
          ↓                     ↓
      Select elements       Create elements
          ↓                     ↓
     Modify content       Append / Remove
          ↓
        Events
          ↓
    User interaction
          ↓
       DOM changes
          ↓
   Browser updates page
```

## Key Sentence

> **The DOM is the browser's object representation of an HTML document, and JavaScript uses DOM APIs to read, modify, create, remove, and respond to elements and events.**
