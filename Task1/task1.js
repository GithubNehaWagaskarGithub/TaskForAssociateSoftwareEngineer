function reverseWords() {
    var inputSentence = document.getElementById("inputSentence").value;
    var words = inputSentence.split(' ');

    for (var i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }

    var reversedSentence = words.join(' ');
    document.getElementById("reversedOutput").textContent = reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}