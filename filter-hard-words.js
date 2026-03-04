// filter-hard-words.js
const fs = require('fs');

// Input and output files
const inputFile = 'six_letter_words.txt';
const outputFile = 'hard_words.txt';

// Read the big word file
const text = fs.readFileSync(inputFile, 'utf8');

// Split the words (assuming comma-separated in the big file)
let words = text.split(',');

// Simple hard-word filter example (you can customize this)
const hardWords = words
    .map(w => w.trim().toUpperCase())
    .filter(w => w.length === 6)   // ensure 6 letters
    .filter(w => /[QXZJK]/.test(w)); // contains rare letters

// Write output: **all on one line, separated by commas**
fs.writeFileSync(outputFile, hardWords.join(','), 'utf8');

console.log(`Total hard words: ${hardWords.length}`);
console.log(`Saved to ${outputFile}`);