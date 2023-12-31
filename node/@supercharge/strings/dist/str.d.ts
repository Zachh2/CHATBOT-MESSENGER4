import { RandomStringBuilderCallback } from './contracts';
export declare class Str {
    /**
     * The string value to work with.
     */
    private value;
    /**
     * Create a new String instance providing chainable string operations.
     * This instance clones the original string and works with the clone.
     * It won’t modify the original string.
     *
     * @param {String} value
     *
     * @returns {Str}
     */
    constructor(value?: any);
    /**
     * Returns the byte order mark (BOM) character code.
     *
     * @returns {Number}
     */
    private bomCharCode;
    /**
     * Returns the string value.
     *
     * @returns {String}
     */
    get(): string;
    /**
     * Returns the string value.
     *
     * @returns {String}
     */
    toString(): string;
    /**
     * Returns the portion of the string after the first occurrence of the given `delimiter`.
     *
     * @param {String} delimiter
     *
     * @returns {Str}
     */
    after(delimiter: string): Str;
    /**
     * Returns the portion of the string after the last occurrence of the given `delimiter`.
     *
     * @param {String} delimiter
     *
     * @return {Str}
     */
    afterLast(delimiter: string): Str;
    /**
     * Append the given values to the string.
     *
     * @param {String|String[]} values
     *
     * @return {Str}
     */
    append(...values: string[] | string[][]): Str;
    /**
     * Returns the character at the given `index` or undefined if the index exceeds the set’s size.
     *
     * @param {Number} index
     *
     * @returns {string|undefined}
     */
    at(index: number): string | undefined;
    /**
     * Returns the portion of the string before the first occurrence of the given `delimiter`.
     *
     * @param {String} delimiter
     *
     * @returns {Str}
     */
    before(delimiter: string): Str;
    /**
     * Returns the portion of the string before the last occurrence of the given `delimiter`.
     *
     * @param {String} delimiter
     *
     * @return {Str}
     */
    beforeLast(delimiter: string): Str;
    /**
     * Convert the string to camelCase.
     *
     * @returns {Str}
     */
    camel(): Str;
    /**
     * Returns the list of characters for the given string.
     *
     * @returns {String[]}
     */
    chars(): string[];
    /**
     * Returns a string that contains the concatenation of two or more strings.
     *
     * @param {String|Array} strings
     *
     * @returns {Str}
     */
    concat(...strings: string[]): Str;
    /**
     * Determine whether the haystack contains any of the given `needles`.
     *
     * @param {String} needle
     *
     * @returns {Boolean}
     */
    contains(...needles: string[] | string[][]): boolean;
    /**
     * Determine whether the haystack contains all items if the `needles` array.
     *
     * @param {String} needle
     *
     * @returns {Boolean}
     */
    containsAll(...needles: string[] | string[][]): boolean;
    /**
     * Determine whether the string contains the byte order mark (BOM) at any position in the string.
     *
     * @returns {Boolean}
     */
    containsBom(): boolean;
    /**
     * Determine whether the haystack does not contain the given `needle`.
     *
     * @param {String} needle
     *
     * @returns {Boolean}
     */
    notContains(needle: string): boolean;
    /**
     * Determine whether the string ends with the given `needle`.
     * Optionally, accepts a `length` used as the string length.
     *
     * @param {String} needle
     * @param {Number} length
     *
     * @returns {Boolean}
     */
    endsWith(needle: string, length?: number): boolean;
    /**
     * Determine whether the string equals the given `value`.
     *
     * @param {String} value
     *
     * @returns {Boolean}
     */
    equals(value: string): boolean;
    /**
     * Determine whether the string equals given `value` when ignoring character casing.
     *
     * @param {String} value
     *
     * @returns {Boolean}
     */
    equalsIgnoreCase(value: string): boolean;
    /**
     * Determine whether the string does not equal the given `value`.
     *
     * @param {String} value
     *
     * @returns {Boolean}
     */
    notEquals(value: string): boolean;
    /**
     * Append a single instance of the given `suffix` to the end of
     * the string if it doesn’t already ends with the given suffix.
     *
     * @param {String} suffix
     *
     * @returns {Str}
     */
    finish(suffix: string): Str;
    /**
     * Determine whether the given string contains the `needle`.
     *
     * @param {*} needle
     *
     * @returns {Boolean}
     */
    includes(...needles: string[] | string[][]): boolean;
    /**
     * Determine whether the haystack contains all items if the `needles` array.
     *
     * @param {String} needle
     *
     * @returns {Boolean}
     */
    includesAll(...needles: string[] | string[][]): boolean;
    /**
     * Determine whether the string does not contain the given `needle`.
     *
     * @param {String} needle
     *
     * @returns {Boolean}
     */
    notIncludes(needle: string): boolean;
    /**
     * Determine whether the given string is written in camelCase.
     *
     * @returns {Boolean}
     */
    isCamel(): boolean;
    /**
     * Determine whether the given string is empty.
     *
     * @returns {Boolean}
     */
    isEmpty(): boolean;
    /**
     * Determine whether the string is lowercase.
     *
     * @returns {Boolean}
     */
    isLower(): boolean;
    /**
     * Determine whether the string is lowercase.
     *
     * @returns {Boolean}
     */
    isLowercase(): boolean;
    /**
     * Determine whether the given string is not empty.
     *
     * @returns {Boolean}
     */
    isNotEmpty(): boolean;
    /**
     * Determine whether the given `input` is a string.
     *
     * @param {*} input
     *
     * @returns {Boolean}
     */
    isString(input: any): input is string;
    /**
     * Determine whether the given `input` is an alpha-numeric string.
     *
     * @param input
     */
    isAlphaNumeric(input?: any): boolean;
    /**
     * Determine whether the given `input` is a symbol.
     *
     * @param {*} input
     *
     * @returns {Boolean}
     */
    isSymbol(input: any): input is symbol;
    /**
     * Determine whether the given string is uppercase.
     *
     * @returns {Boolean}
     */
    isUpper(): boolean;
    /**
     * Determine whether the given string is uppercase.
     *
     * @returns {Boolean}
     */
    isUppercase(): boolean;
    /**
     * Convert the string to kebab-case.
     *
     * @returns {Str}
     */
    kebab(separator?: string): Str;
    /**
     * Lowercases the first character in the string.
     *
     * @returns {Str}
     */
    lcFirst(): Str;
    /**
     * Returns the string’s length.
     *
     * @returns {Number}
     */
    length(): number;
    /**
     * Determine whether the string has the given `length`.
     *
     * @param {Number} length
     *
     * @returns {Boolean}
     */
    hasLength(length: number): boolean;
    /**
     * Returns the first `limit` characters and ends the limited string with `end`.
     *
     * @param {Number} limit
     * @param {String} end
     *
     * @returns {Str}
     */
    limit(limit?: number, end?: string): Str;
    /**
     * Splits the string at the newline character and returns all lines.
     *
     * @returns {String[]}
     */
    lines(): string[];
    /**
     * Lowercases the string.
     *
     * @returns {Str}
     */
    lower(): Str;
    /**
     * Lowercases the string. Alias for `.lower()`.
     *
     * @returns {Str}
     */
    lowercase(): Str;
    /**
     * Removes the whitespace from the front of the string when
     * no argument is present. It trims the given `characters`
     * from the left of the string if you pass along a value.
     *
     * @param {String} characters
     *
     * @returns {Str}
     */
    ltrim(characters?: string): Str;
    /**
     * Pad both sides, left and right, of the string with the given `pad` string (repeatedly
     * if needed) so that the resulting string reaches a given `length`.
     *
     * @param {Number} length
     * @param {String} pad
     *
     * @returns {Str}
     */
    padBoth(length?: number, pad?: string): Str;
    /**
     * Pad the left side of the string with the given `pad` string (repeatedly
     * if needed) so that the resulting string reaches a given `length`.
     *
     * @param {Number} length
     * @param {String} pad
     *
     * @returns {Str}
     */
    padLeft(length: number, pad?: string): Str;
    /**
     * Pad the right side of the string with the given `pad` string (repeatedly
     * if needed) so that the resulting string reaches a given `length`.
     *
     * @param {Number} length
     * @param {String} pad
     *
     * @returns {Str}
     */
    padRight(length: number, pad?: string): Str;
    /**
     * Parse a Class[@]method style string into the Class and method names.
     *
     * @returns {String[]}
     */
    parseCallback(separator?: string, defaultValue?: string): [string, string | undefined];
    /**
     * Convert the string to PascalCase (same as StudlyCase). Alias for `.studly()`.
     *
     * @returns {Str}
     */
    pascal(): Str;
    /**
     * Prepend the given values to the string.
     *
     * @param {String|String[]} values
     *
     * @return {Str}
     */
    prepend(...values: string[] | string[][]): Str;
    /**
     * Create a random, URL-friendly string. The default length will have 21 symbols.
     *
     * @param {Number} [lengthOrCallback=21] number of symbols in string
     *
     * @returns {String}
     */
    random(lengthOrCallback?: number | null | RandomStringBuilderCallback): string;
    /**
     * Create a random, URL-friendly string. The default length will have 21 symbols.
     *
     * @param {Number} [size=21] number of symbols in string
     *
     * @returns {String}
     */
    private generateRandom;
    /**
     * Replace the first occurrence of the string.
     *
     * @param {String} search
     * @param {String} replace
     *
     * @returns {Str}
     */
    replace(search: string | RegExp, replace: string): Str;
    /**
     * Replace all occurrences of `search` with `replace` in the string.
     *
     * @param {*} search
     * @param {*} replace
     *
     * @returns {Str}
     */
    replaceAll(search: string | RegExp, replace: string): Str;
    /**
     * Replace the last occurrence of the string.
     *
     * @param {String} search
     * @param {String} replace
     *
     * @returns {Str}
     */
    replaceLast(search: string, replace: string): Str;
    /**
     * Returns the reversed string.
     *
     * @returns {Str}
     */
    reverse(): Str;
    /**
     * Removes the whitespace from the end of the string when
     * no argument is present. It trims the given `characters`
     * from the left of the string if you pass along a value.
     *
     * @param {String} characters
     *
     * @returns {Str}
     */
    rtrim(characters?: string): Str;
    /**
     * Shuffles the characters of the string using the Fisher-Yates
     * shuffle algorithm (also known as the Knuth-Shuffle).
     *
     * @returns {Str}
     */
    shuffle(): Str;
    /**
     * Returns a section of the string starting from the given `start` until the given `end`.
     *
     * @param {Number} start
     * @param {Number} end
     *
     * @returns {Str}
     */
    slice(start?: number, end?: number): Str;
    /**
     * Convert the string to a URL-friendly “slug” in kebab-case.
     *
     * @param {String} separator
     *
     * @returns {Str}
     */
    slug(separator?: string): Str;
    /**
     * Convert the string to snake_case.
     *
     * @returns {Str}
     */
    snake(): Str;
    /**
     * Splits up the string into an array of strings by separating
     * the string at each of the specified `separator` string.
     *
     * @param {String|RegExp} separator
     * @param {Number} limit
     *
     * @returns {String[]}
     */
    split(separator: string | RegExp, limit?: number): string[];
    /**
     * Split up the camelCased string into an array of strings.
     *
     * @returns {String[]}
     */
    splitCamel(): string[];
    /**
     * Removes all extra spaces from the string and leaves a single space at the
     * position. In contrast to `stripExtraSpaces`, this method also strips a
     * leading or trailing space of the given string.
     *
     * @returns {Str}
     */
    squish(): Str;
    /**
     * Prepends a single instance of the given `prefix` to the start of
     * the string if it doesn’t already start with the given prefix.
     *
     * @param {String} prefix
     *
     * @returns {Str}
     */
    start(prefix: string): Str;
    /**
     * Determine whether the string starts with the given `needle`.
     * Optionally, accepts the position in the string at which
     * to begin searching for the `needle` (defaults to `0`).
     *
     * @param {*} needle
     * @param {Number} position
     *
     * @returns {Boolean}
     */
    startsWith(needle: string, position?: number): boolean;
    /**
     * Determine whether the string starts with the byte order mark (BOM).
     *
     * @returns {Boolean}
     */
    startsWithBom(): boolean;
    /**
     * Removes all whitespace from the string, everywhere.
     *
     * @returns {Str}
     */
    strip(): Str;
    /**
     * Removes the byte order mark (BOM) from the beginning of the string.
     *
     * @returns {Str}
     */
    stripBom(): Str;
    /**
     * Removes HTML tags from the string.
     *
     * @returns {Str}
     */
    stripHtml(): Str;
    /**
     * Removes all numbers from the string.
     *
     * @returns {Str}
     */
    stripNums(): Str;
    /**
     * Removes all extra spaces from the string and leaves a single space at the position.
     *
     * @returns {Str}
     */
    stripExtraSpaces(): Str;
    /**
     * Convert the string to StudlyCase. StudlyCase is similar to camelCase
     * except that the first character is uppercase instead of lowercase.
     *
     * @returns {Str}
     */
    studly(): Str;
    /**
     * Returns the substring.
     *
     * @param {Number} start
     * @param {Number} length
     *
     * @returns {Str}
     */
    substr(start: number, length: number): Str;
    /**
     * Convert the string to title case.
     *
     * @returns {Str}
     */
    title(): Str;
    /**
     * Lowercases the string. Alias for `.lower()` and convenience
     * method to comply with the global String’s `.toLowerCase()`.
     *
     * @returns {Str}
     */
    toLowerCase(): Str;
    /**
     * Uppercases the string. Alias for `.upper()` and convenience
     * method to comply with the global String’s `.toUpperCase()`.
     *
     * @returns {Str}
     */
    toUpperCase(): Str;
    /**
     * Removes whitespace around the string, front and back when no argument
     * is present. It trims the given `characters` from the left and right
     * of the string if you pass along a value.
     *
     * @param {String} characters
     *
     * @returns {Str}
     */
    trim(characters?: string): Str;
    /**
     * Uppercases the first character in the string.
     *
     * @returns {Str}
     */
    ucFirst(): Str;
    /**
     * Uppercases the string.
     *
     * @returns {Str}
     */
    upper(): Str;
    /**
     * Uppercases the string. Alias for `.upper()`.
     *
     * @returns {Str}
     */
    uppercase(): Str;
    /**
     * Create a UUID (version 4).
     *
     * @returns {String}
     */
    uuid(): string;
    /**
     * Determine whether the given string is a valid UUID (no matter what version).
     *
     * @returns {Boolean}
     */
    isUuid(): boolean;
    /**
     * Returns the list of words for the given string.
     *
     * @returns {String[]}
     */
    words(): string[];
}
