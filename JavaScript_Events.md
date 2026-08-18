# JavaScript — Events

An **event** is an action or occurrence that JavaScript can detect and respond to.

Examples:

```text
click
submit
input
change
keydown
keyup
mouseover
load
```

## 1. `addEventListener()` ⭐

Modern way to handle events:

```js
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

Syntax:

```js
element.addEventListener(eventType, handler);
```

## 2. Event Object ⭐

The browser passes an event object to the handler.

```js
button.addEventListener("click", event => {
    console.log(event);
});
```

Useful properties:

```js
event.type
event.target
event.currentTarget
event.key
event.clientX
event.clientY
```

## 3. `target` vs `currentTarget` ⭐

```text
event.target
→ element that actually triggered the event

event.currentTarget
→ element whose listener is currently executing
```

Example:

```html
<div id="parent">
    <button id="child">Click</button>
</div>
```

If the button is clicked while the parent's listener handles the bubbled event:

```text
target        → button
currentTarget → parent
```

## 4. Common Mouse Events

```text
click
dblclick
mousedown
mouseup
mousemove
mouseenter
mouseleave
mouseover
mouseout
```

```js
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

## 5. Keyboard Events ⭐

```text
keydown
keyup
```

```js
document.addEventListener("keydown", event => {
    console.log(event.key);
});
```

Useful:

```js
event.key
event.code
event.ctrlKey
event.shiftKey
event.altKey
event.metaKey
```

Example:

```js
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        console.log("Enter pressed");
    }
});
```

## 6. Form Events ⭐

Important events:

```text
submit
input
change
focus
blur
```

```js
const form = document.querySelector("#form");

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("Form submitted");
});
```

### `input` vs `change`

```text
input  → fires as the value changes
change → fires when the change is committed
```

## 7. `focus` and `blur`

```js
input.addEventListener("focus", () => {
    console.log("Focused");
});

input.addEventListener("blur", () => {
    console.log("Lost focus");
});
```

## 8. Event Bubbling ⭐⭐⭐

Events normally propagate from the target toward its ancestors.

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

Clicking the button normally:

```text
Child
Parent
```

Flow:

```text
button
  ↓
parent
  ↓
body
  ↓
document
```

## 9. Event Capturing ⭐⭐

Events can also travel from ancestors toward the target.

```text
document
   ↓
body
   ↓
parent
   ↓
button
```

Capture listener:

```js
parent.addEventListener("click", () => {
    console.log("Parent");
}, { capture: true });
```

## 10. Event Propagation ⭐⭐⭐

The common event flow is:

```text
Capturing Phase
      ↓
Target Phase
      ↓
Bubbling Phase
```

## 11. `stopPropagation()` ⭐

Stops the event from propagating further.

```js
child.addEventListener("click", event => {
    event.stopPropagation();

    console.log("Child");
});
```

## 12. `preventDefault()` ⭐

Stops the browser's default behavior.

```js
const link = document.querySelector("a");

link.addEventListener("click", event => {
    event.preventDefault();
});
```

Form example:

```js
form.addEventListener("submit", event => {
    event.preventDefault();

    // custom handling
});
```

Remember:

```text
preventDefault()  → stops default browser action
stopPropagation() → stops event propagation
```

## 13. Event Delegation ⭐⭐⭐

Use one parent listener instead of listeners on every child.

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

This works because of **event bubbling**.

Useful for dynamic elements and large lists.

## 14. Removing Event Listeners ⭐

Use the same function reference.

```js
function handleClick() {
    console.log("Clicked");
}

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);
```

This does not work as intended:

```js
button.addEventListener("click", () => {
    console.log("Clicked");
});

button.removeEventListener("click", () => {
    console.log("Clicked");
});
```

Those are different function objects.

## 15. Event Listener Options

```js
element.addEventListener("click", handler, {
    capture: true,
    once: true,
    passive: true
});
```

```text
capture → use capturing phase
once    → remove after first execution
passive → listener will not call preventDefault()
```

## 16. `once`

Run only once:

```js
button.addEventListener("click", () => {
    console.log("Only once");
}, { once: true });
```

## 17. Custom Events ⭐

Create your own event:

```js
const event = new CustomEvent("userLogin", {
    detail: {
        username: "Anwar"
    }
});

document.dispatchEvent(event);
```

Listen:

```js
document.addEventListener("userLogin", event => {
    console.log(event.detail.username);
});
```

Output:

```text
Anwar
```

## 18. `dispatchEvent()`

Manually trigger an event:

```js
button.dispatchEvent(new Event("click"));
```

With custom data:

```js
button.dispatchEvent(
    new CustomEvent("myEvent", {
        detail: { message: "Hello" }
    })
);
```

## 19. `onclick` vs `addEventListener()` ⭐

You may see:

```js
button.onclick = () => {
    console.log("Clicked");
};
```

Prefer:

```js
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

`addEventListener()` supports:

```text
multiple listeners
event options
removeEventListener()
```

## 20. `DOMContentLoaded`

Fires when the HTML document has been parsed and the DOM is ready.

```js
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM ready");
});
```

# Interview Questions

### Q1. What is an event?

An occurrence such as a click, keyboard action, input, or form submission that JavaScript can respond to.

### Q2. What is `addEventListener()`?

A method used to register a function for a specific event.

### Q3. `event.target` vs `event.currentTarget`?

```text
target        → element that triggered the event
currentTarget → element whose listener is executing
```

### Q4. What is event bubbling?

Propagation from the target element upward through its ancestors.

### Q5. What is event capturing?

Propagation from ancestors down toward the target.

### Q6. `preventDefault()` vs `stopPropagation()`?

```text
preventDefault()  → stops default browser behavior
stopPropagation() → stops event propagation
```

### Q7. What is event delegation?

Using a parent listener to handle events from child elements.

### Q8. Why can `removeEventListener()` fail?

Because it needs the same function reference used when registering the listener.

### Q9. Why prefer `addEventListener()` over `onclick`?

It supports multiple listeners, options, and listener removal.

### Q10. What is a custom event?

An application-defined event created with `CustomEvent` and triggered using `dispatchEvent()`.

# Most Important to Master ⭐⭐⭐

```text
addEventListener()

Event Object
event.target
event.currentTarget

Mouse Events
Keyboard Events
Form Events

Event Bubbling
Event Capturing
Event Propagation

preventDefault()
stopPropagation()

Event Delegation

removeEventListener()

capture
once
passive

CustomEvent
dispatchEvent()
```

## Mental Model

```text
                 EVENT
                   ↓
              DOM Element
                   ↓
          Event Propagation
           /                   Capturing           Bubbling
         ↓                  ↑
      Target ←──────────────┘
         ↓
   Event Listener
         ↓
   JavaScript Handler
         ↓
      DOM Update
```

## Key Sentence

> **An event is an occurrence that JavaScript can respond to; `addEventListener()` registers the handler, and the event travels through the DOM using capturing, target, and bubbling phases.**
