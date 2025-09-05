# DOM Manipulation Shortcuts - Complete Guide

A comprehensive reference for all DOM manipulation methods and shortcuts in JavaScript.

## Table of Contents

1. [Element Selection](#element-selection)
2. [Element Creation & Insertion](#element-creation--insertion)
3. [Element Removal](#element-removal)
4. [Content Manipulation](#content-manipulation)
5. [Attribute Manipulation](#attribute-manipulation)
6. [Style Manipulation](#style-manipulation)
7. [Class Manipulation](#class-manipulation)
8. [Event Handling](#event-handling)
9. [Form Manipulation](#form-manipulation)
10. [Navigation & Traversal](#navigation--traversal)
11. [Modern ES6+ Shortcuts](#modern-es6-shortcuts)
12. [Performance Tips](#performance-tips)

---

## Element Selection

### Basic Selectors
```javascript
// By ID
const el = document.getElementById('myId');
const el = document.querySelector('#myId');

// By Class
const els = document.getElementsByClassName('myClass');
const els = document.querySelectorAll('.myClass');

// By Tag
const els = document.getElementsByTagName('div');
const els = document.querySelectorAll('div');

// By Name
const els = document.getElementsByName('username');

// Complex Selectors
const el = document.querySelector('div.class#id[data-attr="value"]');
const els = document.querySelectorAll('ul li:nth-child(2n+1)');
```

### Modern Selection Shortcuts
```javascript
// First matching element
const el = document.querySelector('.class');

// All matching elements
const els = document.querySelectorAll('.class');

// Within specific parent
const parent = document.querySelector('#parent');
const child = parent.querySelector('.child');
const children = parent.querySelectorAll('.child');
```

---

## Element Creation & Insertion

### Creating Elements
```javascript
// Create element
const div = document.createElement('div');
const span = document.createElement('span');

// Create with content
const p = document.createElement('p');
p.textContent = 'Hello World';

// Create text node
const text = document.createTextNode('Some text');

// Create document fragment (performance boost)
const fragment = document.createDocumentFragment();
```

### Insertion Methods
```javascript
// Append to end
parent.appendChild(child);
parent.append(child1, child2, 'text'); // Modern way

// Prepend to beginning
parent.prepend(child);

// Insert before/after
parent.insertBefore(newEl, existingEl);
existingEl.before(newEl);
existingEl.after(newEl);

// Insert adjacent
el.insertAdjacentElement('beforebegin', newEl); // Before el
el.insertAdjacentElement('afterbegin', newEl);  // First child of el
el.insertAdjacentElement('beforeend', newEl);   // Last child of el
el.insertAdjacentElement('afterend', newEl);    // After el

// Insert HTML
el.insertAdjacentHTML('beforeend', '<div>HTML</div>');
```

### Quick Creation Shortcuts
```javascript
// Create and append in one line
const div = document.createElement('div');
document.body.appendChild(div);

// Or using innerHTML (less secure for user input)
parent.innerHTML += '<div>New content</div>';

// Template literals for complex HTML
const html = `
  <div class="card">
    <h3>${title}</h3>
    <p>${content}</p>
  </div>
`;
container.insertAdjacentHTML('beforeend', html);
```

---

## Element Removal

### Removal Methods
```javascript
// Remove element
el.remove(); // Modern way
el.parentNode.removeChild(el); // Old way

// Remove all children
el.innerHTML = '';
while (el.firstChild) {
  el.removeChild(el.firstChild);
}

// Remove specific child
parent.removeChild(child);
```

---

## Content Manipulation

### Text Content
```javascript
// Get/set text content
const text = el.textContent;
el.textContent = 'New text';

// Get/set inner text (respects styling)
const text = el.innerText;
el.innerText = 'New text';

// Get/set HTML content
const html = el.innerHTML;
el.innerHTML = '<span>HTML content</span>';

// Get outer HTML (including the element itself)
const outerHtml = el.outerHTML;
```

### Value Manipulation
```javascript
// For form elements
const value = input.value;
input.value = 'new value';

// For data attributes
const data = el.dataset.customAttr;
el.dataset.customAttr = 'new value';
```

---

## Attribute Manipulation

### Attribute Methods
```javascript
// Get attribute
const value = el.getAttribute('data-id');

// Set attribute
el.setAttribute('data-id', '123');

// Remove attribute
el.removeAttribute('data-id');

// Check if attribute exists
const hasAttr = el.hasAttribute('data-id');

// Get all attributes
const attrs = el.attributes;
```

### Property vs Attribute Shortcuts
```javascript
// Properties (recommended for standard HTML properties)
el.id = 'newId';
el.className = 'new-class';
el.src = 'image.jpg';
el.href = 'https://example.com';
el.disabled = true;
el.checked = true;

// Attributes (for custom attributes)
el.setAttribute('data-custom', 'value');
```

---

## Style Manipulation

### CSS Styles
```javascript
// Inline styles
el.style.color = 'red';
el.style.backgroundColor = 'blue';
el.style.fontSize = '16px';

// Multiple styles
Object.assign(el.style, {
  color: 'red',
  backgroundColor: 'blue',
  fontSize: '16px'
});

// CSS Text
el.style.cssText = 'color: red; background: blue; font-size: 16px;';

// Get computed styles
const styles = getComputedStyle(el);
const color = styles.color;
const width = styles.width;
```

### CSS Variables
```javascript
// Set CSS custom property
el.style.setProperty('--main-color', 'red');
document.documentElement.style.setProperty('--theme-color', 'blue');

// Get CSS custom property
const value = getComputedStyle(el).getPropertyValue('--main-color');
```

---

## Class Manipulation

### Class Methods
```javascript
// Add class
el.classList.add('new-class');
el.classList.add('class1', 'class2', 'class3');

// Remove class
el.classList.remove('old-class');
el.classList.remove('class1', 'class2');

// Toggle class
el.classList.toggle('active');
el.classList.toggle('active', condition); // Add if condition is true

// Check if class exists
const hasClass = el.classList.contains('active');

// Replace class
el.classList.replace('old-class', 'new-class');

// Get all classes
const classes = Array.from(el.classList);
```

### Class Shortcuts
```javascript
// Old way (still works)
el.className += ' new-class';
el.className = el.className.replace('old-class', '');

// Quick toggle with condition
el.classList.toggle('hidden', !isVisible);
```

---

## Event Handling

### Adding Event Listeners
```javascript
// Basic event listener
el.addEventListener('click', function(e) {
  console.log('Clicked!');
});

// Arrow function
el.addEventListener('click', (e) => {
  console.log('Clicked!');
});

// With options
el.addEventListener('click', handler, {
  once: true,      // Remove after first trigger
  passive: true,   // Never calls preventDefault
  capture: true    // Capture phase
});
```

### Event Shortcuts
```javascript
// Common events
el.onclick = () => console.log('Clicked');
el.onmouseover = () => console.log('Hover');
el.onkeydown = (e) => console.log('Key pressed:', e.key);

// Form events
form.onsubmit = (e) => e.preventDefault();
input.oninput = (e) => console.log('Value:', e.target.value);
```

### Event Delegation
```javascript
// Handle events on parent for dynamic children
parent.addEventListener('click', (e) => {
  if (e.target.matches('.child-class')) {
    console.log('Child clicked');
  }
});
```

### Removing Events
```javascript
// Remove specific event listener
el.removeEventListener('click', handlerFunction);

// Remove all events (clone node)
const newEl = el.cloneNode(true);
el.parentNode.replaceChild(newEl, el);
```

---

## Form Manipulation

### Form Elements
```javascript
// Get form data
const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());

// Get/set input values
input.value = 'new value';
const value = input.value;

// Checkboxes and radio buttons
checkbox.checked = true;
const isChecked = checkbox.checked;

// Select elements
select.selectedIndex = 2;
select.value = 'option-value';
const selectedOption = select.options[select.selectedIndex];
```

### Form Validation
```javascript
// HTML5 validation
const isValid = input.checkValidity();
const validationMessage = input.validationMessage;

// Custom validation
input.setCustomValidity('Custom error message');
input.setCustomValidity(''); // Clear custom validation
```

---

## Navigation & Traversal

### Parent/Child Navigation
```javascript
// Parent elements
const parent = el.parentNode;
const parentEl = el.parentElement;
const closest = el.closest('.ancestor-class');

// Child elements
const children = el.children;
const firstChild = el.firstElementChild;
const lastChild = el.lastElementChild;
const childCount = el.childElementCount;

// Sibling elements
const nextSibling = el.nextElementSibling;
const prevSibling = el.previousElementSibling;
```

### Node Navigation (includes text nodes)
```javascript
const firstChild = el.firstChild;
const lastChild = el.lastChild;
const nextSibling = el.nextSibling;
const prevSibling = el.previousSibling;
const allChildren = el.childNodes;
```

---

## Modern ES6+ Shortcuts

### Array Methods with NodeLists
```javascript
// Convert NodeList to Array
const elements = Array.from(document.querySelectorAll('.class'));
const elements = [...document.querySelectorAll('.class')];

// Iterate over elements
document.querySelectorAll('.class').forEach(el => {
  el.style.color = 'red';
});

// Map over elements
const texts = [...document.querySelectorAll('p')].map(p => p.textContent);

// Filter elements
const visibleDivs = [...document.querySelectorAll('div')]
  .filter(div => div.offsetHeight > 0);
```

### Destructuring
```javascript
// Destructure element properties
const { width, height } = el.getBoundingClientRect();
const { top, left } = el.offsetParent;

// Destructure dataset
const { userId, userName } = el.dataset;
```

### Template Literals for Dynamic Content
```javascript
// Create dynamic HTML
const createCard = (title, content) => `
  <div class="card">
    <h3>${title}</h3>
    <p>${content}</p>
    <button onclick="handleClick('${title}')">Click me</button>
  </div>
`;

container.innerHTML = createCard('Title', 'Content');
```

---

## Performance Tips

### Efficient DOM Manipulation
```javascript
// Use DocumentFragment for multiple insertions
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.textContent = `Item ${i}`;
  fragment.appendChild(div);
}
container.appendChild(fragment);

// Batch DOM reads and writes
// Bad - causes layout thrashing
elements.forEach(el => {
  el.style.left = el.offsetLeft + 10 + 'px';
});

// Good - batch reads then writes
const positions = elements.map(el => el.offsetLeft);
elements.forEach((el, i) => {
  el.style.left = positions[i] + 10 + 'px';
});
```

### Caching Selectors
```javascript
// Cache frequently used elements
const nav = document.querySelector('.nav');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

// Use cached elements instead of re-querying
nav.classList.add('active');
sidebar.style.display = 'none';
```

### Event Delegation for Performance
```javascript
// Instead of adding listeners to many elements
buttons.forEach(btn => btn.addEventListener('click', handler));

// Use delegation on parent
document.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    handler(e);
  }
});
```

---

## Quick Reference Cheat Sheet

```javascript
// Selection
$('#id') → document.querySelector('#id')
$('.class') → document.querySelectorAll('.class')

// Creation
$('<div>') → document.createElement('div')

// Content
.text() → .textContent
.html() → .innerHTML
.val() → .value

// Attributes
.attr('name') → .getAttribute('name')
.attr('name', 'value') → .setAttribute('name', 'value')

// Classes
.addClass() → .classList.add()
.removeClass() → .classList.remove()
.toggleClass() → .classList.toggle()
.hasClass() → .classList.contains()

// Styles
.css('color', 'red') → .style.color = 'red'

// Events
.on('click', fn) → .addEventListener('click', fn)
.off('click', fn) → .removeEventListener('click', fn)

// Manipulation
.append() → .appendChild() or .append()
.prepend() → .prepend()
.remove() → .remove()
```

---

## Contributing

Feel free to contribute to this guide by submitting pull requests or opening issues for additional DOM manipulation shortcuts and techniques.

## License

This guide is open source and available under the MIT License.
