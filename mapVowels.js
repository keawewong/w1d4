//This script takes the words array, finds all the vowels in each word and return the vowels in the wordVowels array.

var words = ['A', 'quick', 'brown', 'fox', 'jumps', 'over', 'a', 'lazy', 'dog'];

// this function finds all the vowels in "word" and return the vowels in 'vowel'
vowel = function(word) {

    var ltrs = word.split('');

    var vowels = ltrs.filter(function(ltr) {

        ltrLower = ltr.toLowerCase();

        return ltrLower == 'a' || ltrLower == 'e' || ltrLower == 'i' || ltrLower == 'o' || ltrLower == 'u'

    })

    return vowels.join('')

} //end of vowel

// takes the words array, finds the vowels using the vowel function
wordVowels = words.map(function(word) {

    return vowel(word)

})

console.log(wordVowels)
