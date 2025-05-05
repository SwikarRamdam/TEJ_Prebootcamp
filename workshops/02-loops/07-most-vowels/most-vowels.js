function mostVowels(str) {
    const words = str.split(' ');
    let maxVowelWord = '';
    let maxVowelCount = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let vowelCount = 0;

        for (let j = 0; j < word.length; j++) {
            const char = word[j];
            if ('aeiouAEIOU'.includes(char)) {
                vowelCount++;
            }
        }

        if (vowelCount > maxVowelCount) {
            maxVowelCount = vowelCount;
            maxVowelWord = word;
        }
    }

    return maxVowelWord;
}

// Test cases
console.log(mostVowels('I am a keeper with some real rhythms')); // => keeper
console.log(mostVowels('try my gym')); // => ''