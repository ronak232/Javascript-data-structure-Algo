/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    s = s.split(" ");
    let len = pattern.length;

    if (pattern.length !== s.length) return false

    let charToWord = new Map();
    let wordToChar = new Map();

    for (let i = 0; i < len; i++) {
        let char = pattern[i];
        let word = s[i];

         if (!charToWord.has(char)) {
            charToWord.set(char, word);
        } else if (charToWord.get(char) !== word) {
            return false; 
        }

        if (!wordToChar.has(word)) {
            wordToChar.set(word, char);
        } else if (wordToChar.get(word) !== char) {
            return false
        }
    }
    return true;
};

/**
 * Edge Cases:
 * Length mismatch between pattern and s → Return false.
 * Repeated characters or words with mismatched mappings → Return false
 * 
 * Step-by-Step Execution:
 * Initial Setup:

    Split s: s = ["dog", "cat", "cat", "dog"].
    Initialize charToWord and wordToChar as empty Maps.
    Validate lengths: pattern.length = 4, s.length = 4. (Passes)
    First Iteration (i = 0):

    char = 'a', word = "dog".
    charToWord: 'a' not present → Add 'a' -> "dog".
    wordToChar: "dog" not present → Add "dog" -> 'a'.
    Second Iteration (i = 1):

    char = 'b', word = "cat".
    charToWord: 'b' not present → Add 'b' -> "cat".
    wordToChar: "cat" not present → Add "cat" -> 'b'.
    Third Iteration (i = 2):

    char = 'b', word = "cat".
    charToWord: 'b' present → Check mapping: 'b' -> "cat" (Passes).
    wordToChar: "cat" present → Check mapping: "cat" -> 'b' (Passes).
    Fourth Iteration (i = 3):

    char = 'a', word = "dog".
    charToWord: 'a' present → Check mapping: 'a' -> "dog" (Passes).
    wordToChar: "dog" present → Check mapping: "dog" -> 'a' (Passes).
    Final Output:
    Both charToWord and wordToChar mappings are consistent.
    Return true.
 * 
 */