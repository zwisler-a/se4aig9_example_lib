# Utility Library

This is a simple JavaScript utility library that provides common utility functions. The library includes functions for text manipulation, random number generation, object cloning, and function debouncing.

## Functions

### `capitalizeWords(str)`

**Description:**

Capitalizes the first letter of each word in a given string.

**Parameters:**

- `str` (string): The sentence to capitalize.

**Returns:**

- `string`: The sentence with the first letter of each word capitalized.

**Example:**

```javascript
const result = capitalizeWords("hello world");
// Result: "Hello World"
```

### `getRandomInt(min, max)`

**Description:**

Generates a random integer between the specified minimum and maximum values, inclusive.

**Parameters:**

- `min` (number): The minimum value (inclusive).
- `max` (number): The maximum value (inclusive).

**Returns:**

- `number`: A random integer between `min` and `max`.

**Example:**

```javascript
const randomNumber = getRandomInt(1, 10);
// Result: a random number between 1 and 10
```

### `deepClone(obj)`

**Description:**

Creates a deep clone of an object or array. This function is useful for copying complex objects without retaining references to the original.

**Parameters:**

- `obj` (object|array): The object or array to clone.

**Returns:**

- `object|array`: A deep copy of the input object or array.

**Example:**

```javascript
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
// Result: { a: 1, b: { c: 2 } }
```

### `debounce(fn, delay)`

**Description:**

Creates a debounced version of a function, delaying its execution until after a specified delay. This is useful for limiting the rate at which a function is called, such as in response to user input events.

**Parameters:**

- `fn` (Function): The function to debounce.
- `delay` (number): The delay in milliseconds after which the function will be called.

**Returns:**

- `Function`: A debounced version of the original function.

**Example:**

```javascript
const debouncedFunction = debounce(() => {
    console.log("Function called!");
}, 300);

// The function will only be called 300ms after the last time debouncedFunction is invoked.
```

## Usage

To use this library, simply import the functions you need and call them with the appropriate parameters.

```javascript
import { capitalizeWords, getRandomInt, deepClone, debounce } from './your-library.js';

// Example usage:
const sentence = capitalizeWords("this is a test");
const randomNumber = getRandomInt(5, 15);
const clonedObject = deepClone({ name: "Alice", age: 25 });
const debouncedLog = debounce(() => console.log("Logged after delay"), 500);

debouncedLog();
```
