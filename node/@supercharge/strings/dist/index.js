'use strict';
const str_1 = require("./str");
/**
 * Creates a new  providing chainable string operations. This new
 * instance clones the original string and works with the clone.
 * It won’t modify the original string value.
 *
 * @param value - `value` is the value being wrapped into an `Str` instance
 */
const strings = (value) => new str_1.Str(value);
/**
 * Create a UUID (version 4).
 */
strings.uuid = () => {
    return strings().uuid();
};
/**
 * Create a random, URL-friendly string. The default length will have 21 symbols.
 *
 * @param size - `[size=21]` defines the number of symbols in the random string
 */
strings.random = (size) => {
    return strings().random(size);
};
/**
 * Determine whether the given `input` is a string.
 *
 * @param input - the `input` value to check whether it’s a string
 */
strings.isString = (input) => {
    return strings().isString(input);
};
/**
 * Determine whether the given `input` is an alpha-numeric string.
 *
 * @param input
 */
strings.isAlphaNumeric = (input) => {
    return strings().isAlphaNumeric(input);
};
/**
 * Determine whether the given `input` is a symbol.
 *
 * @param input - the `input` value to check whether it’s a symbol
 */
strings.isSymbol = (input) => {
    return strings().isSymbol(input);
};
module.exports = strings;
