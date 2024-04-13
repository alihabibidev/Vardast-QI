function top_3_words(text) {
    const words = text.match(/[A-Za-z]+('[A-Za-z]+)*/gi) || [];  // Find words in the text using regex
    const wordCount = {};  // Object to store word counts

    words.forEach(word => {
        const lowercaseWord = word.toLowerCase();
        wordCount[lowercaseWord] = (wordCount[lowercaseWord] || 0) + 1; // Count occurrences of each word
    });

    const sortedWords = Object.keys(wordCount).sort((a, b) => wordCount[b] - wordCount[a]); // Sort words based on count

    return sortedWords.slice(0, 3); // Return the top 3 words
}

// Example usages
console.log(top_3_words(`In a village of La Mancha, the name of which I have
no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`));
console.log(top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));
console.log(top_3_words(" //wont won't won't"));