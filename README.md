# JavaScript Revision Notes

This repository contains beginner-friendly JavaScript revision examples covered so far.

## Topics Covered

### 1. Variables

File: `basics/variable.js`

- `const` is used for values that should not be reassigned.
- `let` is used for block-scoped variables that may change.
- `var` is older and generally avoided because it has function scope.
- `console.log()` prints output to the terminal.

```js
const userId = 12345;
let userName = "anshkaushal92@gmail.com";
var userAge = 30;
```

## 2. Strict Mode and Data Types

File: `basics/datatypes.js`

### Strict Mode

```js
"use strict";
```

- Treats JavaScript code as a newer, stricter version.
- Helps catch common mistakes.

### JavaScript Data Types

Primitive data types:

- `String`
- `Number`
- `Boolean`
- `null`
- `undefined`
- `Symbol`
- `BigInt`

Reference data types:

- `Object`
- `Array`
- `Function`

Important notes:

- JavaScript is dynamically typed.
- You do not need to manually define a variable's type.
- `typeof undefined` returns `"undefined"`.
- `typeof null` returns `"object"`.

## 3. Type Conversion and Comparisons

File: `basics/conversion.js`

Covered ideas:

- Converting strings to numbers.
- Understanding `NaN`.
- String and number addition behavior.
- Comparison between strings and numbers.

Examples:

```js
let score = 33;

// "33" => 33
// "33abc" => NaN
```

Important notes:

- `"33"` can be converted into number `33`.
- `"33abc"` becomes `NaN` when converted to a number.
- `1 + "2"` gives `"12"` because JavaScript converts number to string.
- Comparisons like `"2" > 1` can be confusing because JavaScript performs type conversion.

## 4. Memory Management

File: `basics/conversion.js`

### Stack Memory

- Used for primitive data types.
- Works with copies of values.
- Changes in one variable do not affect another copied variable.

### Heap Memory

- Used for reference data types.
- Works with references to the original value.
- Changes through one reference can affect the original object or array.

## 5. Math in JavaScript

File: `basics/maths.js`

Covered methods:

```js
Math.round(2.5);
Math.abs(-4);
```

Important notes:

- `Math.round()` rounds a number to the nearest integer.
- `Math.abs()` returns the positive absolute value.
- Normal arithmetic operators like `/`, `+`, `-`, `*`, and `%` can be used.

## 6. Basic Output Test

File: `basics/test.js`

Used to test simple JavaScript output:

```js
console.log("Ansh");
```

## 7. Arrays

File: `baiscs2/Array.js`

Arrays are used to store multiple values in a single variable.

```js
const myArr = [0, 1, 2, 3];
```

Important array points:

- Arrays are resizable.
- Arrays can store different types of values.
- Arrays are zero-indexed.
- Assigning an array to another variable creates a shallow copy/reference behavior.

### Array Methods

Common methods covered:

```js
myArr.push(6);
myArr.unshift(-1);
myArr.shift();
myArr.includes(8);
myArr.indexOf(5);
```

Method meanings:

- `push()` adds an element at the end.
- `unshift()` adds an element at the beginning.
- `shift()` removes the first element.
- `includes()` checks whether a value exists.
- `indexOf()` returns the index of a value, or `-1` if not found.

## 8. Slice vs Splice

File: `baiscs2/Array.js`

### `slice()`

- Returns a selected part of an array.
- Does not change the original array.
- End index is not included.

```js
const myn1 = myArr.slice(1, 3);
```

### `splice()`

- Removes or replaces elements from the original array.
- Changes the original array.
- End/count behavior is different from `slice()`.

```js
const myn2 = myArr.splice(1, 3);
```

## How to Run Files

Use Node.js in the terminal:

```bash
node basics/variable.js
node basics/datatypes.js
node basics/conversion.js
node basics/maths.js
node basics/test.js
node baiscs2/Array.js
```

## Quick Revision Checklist

- [ ] Understand `const`, `let`, and `var`
- [ ] Know primitive and reference data types
- [ ] Understand `typeof null` and `typeof undefined`
- [ ] Practice type conversion examples
- [ ] Understand stack vs heap memory
- [ ] Use common `Math` methods
- [ ] Create and access arrays
- [ ] Use basic array methods
- [ ] Understand `slice()` vs `splice()`

