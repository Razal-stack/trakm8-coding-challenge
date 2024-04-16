"use strict";
/**
 * Calculates the nth element of a sequence defined by An = A(n-1) + A(n-2) for all n > 2, given the first two terms.
 * This function parses the input, validates it, and computes the nth element using the defined sequence formula.
 * @param {string} input - A string containing three space-separated numbers: A1, A2, and n.
 * @returns {number} - The nth term of the sequence.
 * @throws {Error} - If the input is invalid or does not meet the specified format.
 */
function calculateSequenceElement(input) {
    if (typeof input !== 'string' || !input.trim()) {
        throw new Error("Input must be a non-empty string.");
    }
    const numbers = input.trim().split(' ').map(Number);
    if (numbers.length !== 3 || numbers.some(isNaN)) {
        throw new Error("Input must contain exactly three valid numbers separated by spaces.");
    }
    const [firstTerm, secondTerm, targetIndex] = numbers;
    if (targetIndex < 1) {
        throw new Error("The sequence index must be a positive integer.");
    }
    if (targetIndex === 1)
        return firstTerm;
    if (targetIndex === 2)
        return secondTerm;
    let previousTerm = firstTerm, currentTerm = secondTerm;
    for (let i = 3; i <= targetIndex; i++) {
        [previousTerm, currentTerm] = [currentTerm, previousTerm + currentTerm];
    }
    return currentTerm;
}
// Example usage and testing for Task 1
try {
    console.log("Test 1: Input '1 1 1' - Expected: 1, Got:", calculateSequenceElement('1 1 1'));
    console.log("Test 2: Input '1 1 2' - Expected: 1, Got:", calculateSequenceElement('1 1 2'));
    console.log("Test 3: Input '2 3 3' - Expected: 5, Got:", calculateSequenceElement('2 3 3'));
    console.log("Test 4: Input '5 8 5' - Expected: 34, Got:", calculateSequenceElement('5 8 5'));
    console.log("Test 5: Input '3 5 7' - Expected: 55, Got:", calculateSequenceElement('3 5 7'));
    console.log("Test 6: Input '-1 -2 5' - Expected: -8, Got:", calculateSequenceElement('-1 -2 5'));
}
catch (error) {
    console.error("Test Error:", error.message);
}
