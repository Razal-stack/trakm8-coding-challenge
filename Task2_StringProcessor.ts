/**
 * Reverses the order of words in a given string.
 * Returns the original string if it contains only one word or is empty.
 * @param {string} text - String containing words to reverse.
 * @returns {string} - String with words in reversed order.
 */
function reverseWordOrder(text: string): string {
    if (!text.trim() || !text.includes(' ')) {
        return text;
    }
    return text.split(' ').reverse().join(' ');
}

/**
 * Replaces sequences of consecutive identical characters in a word with asterisks.
 * Handles single words directly without unnecessary processing.
 * @param {string} word - Single word to process.
 * @returns {string} - Word with consecutive identical characters replaced by asterisks.
 */
function replaceConsecutiveCharacters(word: string): string {
    return word.replace(/(\w)\1+/g, match => '*'.repeat(match.length));
}

/**
 * Processes an array of strings by reversing the order of words and replacing sequences of identical characters.
 * Skips processing for empty or whitespace-only strings.
 * @param {string[]} strings - Array of strings to process.
 * @returns {string[]} - Array of processed strings.
 * @throws {Error} - If the input is not a valid array of strings.
 */
function processTextArray(strings: string[]): string[] {
    if (!Array.isArray(strings) || strings.some(item => typeof item !== 'string')) {
        throw new Error("Input must be an array of strings.");
    }

    return strings.map(sentence => {
        if (!sentence.trim()) {
            // Directly return the original sentence if it's empty or contains only whitespace
            return sentence;
        }
        const words = sentence.split(' ');
        // Process sequences and reverse order only if there are multiple words
        return words.length > 1 ? 
            words.reverse().map(replaceConsecutiveCharacters).join(' ') : 
            replaceConsecutiveCharacters(sentence);
    });
}

// Example usage and testing for Task 2
try {
    console.log("Test 1: Input ['Hello World', 'Bye World', 'Useless World']\n   Expected: ['World He**o', 'World Bye', 'World Usele**'], Got:", processTextArray(['Hello World', 'Bye World', 'Useless World']));
    console.log("Test 2: Input ['  World', 'Goodbye World']\n   Expected: ['World  ', 'World G**dbye'], Got:", processTextArray(['  World', 'Goodbye World']));
    console.log("Test 3: Input ['']\n   Expected: [''], Got:", processTextArray(['']));
    console.log("Test 4: Input ['Repeater']\n   Expected: ['Repeater'], Got:", processTextArray(['Repeater']));
    console.log("Test 5: Input ['    ']\n   Expected: ['    '], Got:", processTextArray(['    ']));
} catch (error: any) {
    console.error("Test Error:", error.message);
}


