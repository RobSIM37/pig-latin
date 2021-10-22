function pigLatin (phrase){

    let words = phrase.split(' ');
    words.forEach((word, i, arr) => ['a', 'e', 'i', 'o', 'u'].includes(word.charAt(0).toLowerCase()) ? arr[i] = `${word}yay` : arr[i] = `${word.slice(1)}${word.charAt(0).toLowerCase()}ay`);
    return words.join(' ');
    
}

console.log(pigLatin('Are we going to Ohio'));
console.log(pigLatin('When does our adventure begin'));
console.log(pigLatin('I wish I could think of more examples to test this function'));
console.log(pigLatin('You lose a bit of information when your word starts with a Y'))