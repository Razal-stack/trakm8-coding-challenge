"use strict";
/**
 * Checks if a number is divisible by 3 by summing its digits.
 * @param num - The number to check.
 * @returns True if the number's digits sum to a multiple of 3.
 */
const isDivisibleBy3 = (num) => {
    const sumOfDigits = Math.abs(num).toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    return sumOfDigits % 3 === 0;
};
/**
 * Checks if a number is divisible by 11 by processing its digits in pairs from right to left.
 * @param num - The number to check.
 * @returns True if the alternate sum and difference of pairs of digits is divisible by 11.
 */
const isDivisibleBy11 = (num) => {
    const digits = Math.abs(num).toString();
    let sum = 0;
    for (let i = digits.length - 1; i >= 0; i -= 2) {
        const pairValue = i > 0 ? parseInt(digits[i - 1] + digits[i], 10) : parseInt(digits[i], 10);
        sum += pairValue;
    }
    return sum % 11 === 0;
};
/**
 * Processes an array of numbers to determine their divisibility by 3 and 11.
 * @param numbers - The array of numbers to process.
 * @returns An array of results based on divisibility rules.
 */
const processNumbers = (numbers) => {
    if (!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')) {
        throw new Error("Input must be an array of numbers.");
    }
    return numbers.map(num => {
        const divisibleBy3 = isDivisibleBy3(num);
        const divisibleBy11 = isDivisibleBy11(num);
        if (divisibleBy3 && divisibleBy11)
            return 'fizzbuzz';
        if (divisibleBy3)
            return 'fizz';
        if (divisibleBy11)
            return 'buzz';
        return 'baz';
    });
};
// Example usage and testing
try {
    console.log("Test 1: Input [2, 3, 10, 11, 12, 22, 297]\nExpected: ['baz', 'fizz', 'baz', 'buzz', 'fizz', 'buzz', 'fizzbuzz'], Got:", processNumbers([2, 3, 10, 11, 12, 22, 297]));
    console.log("Test 2: Input [33, 99, 121]\nExpected: ['fizzbuzz', 'fizzbuzz', 'buzz'], Got:", processNumbers([33, 99, 121]));
    console.log("Test 3: Input [0]\nExpected: ['fizzbuzz'], Got:", processNumbers([0])); // 0 is divisible by any number
    console.log("Test 4: Input [7, 14]\nExpected: ['baz', 'baz'], Got:", processNumbers([7, 14]));
    console.log("Test 5: Input [-33, -99, -121, -1]\nExpected: ['fizzbuzz', 'fizzbuzz', 'buzz', 'baz'], Got:", processNumbers([-33, -99, -121, -1]));
}
catch (error) {
    console.error("Test Error:", error.message);
}
