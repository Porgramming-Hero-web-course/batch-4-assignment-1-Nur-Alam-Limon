"use strict";
function countWordOccurrences(sentence, word) {
    let count = 0;
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();
    const words = lowerSentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === lowerWord) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("I love typescript", "typescript"));
