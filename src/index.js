/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} str - The sentence to capitalize.
 * @returns {string} The capitalized sentence.
 */
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Generates a random integer between the specified min and max values, inclusive.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number} A random integer between min and max.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Creates a deep clone of an object or array.
 * @param {object|array} obj - The object or array to clone.
 * @returns {object|array} A deep copy of the input object or array.
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Creates a debounced version of a function, delaying its execution until after a specified delay.
 * @param {Function} fn - The function to debounce.
 * @param {number} delay - The delay in milliseconds after which the function will be called.
 * @returns {Function} A debounced function.
 */
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}
