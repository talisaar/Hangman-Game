

<!-- An array of words -->

var wordbank = ['poop', 'scandal', 'miggs'];
var lettersReplaced = 0;
var failedAttempts = 0;
var alreadyTried = [];




<!-- randomly select a word from array -->

var randomWord = wordbank[Math.floor(Math.random() * wordbank.length)];

console.log(randomWord);


<!-- create an array with letters in this word-->

var charArray = [];

for (var i = 0; i < randomWord.length; i++) {

charArray.push(randomWord.charAt(i));

console.log(charArray);
  
}


<!-- METHOD1 -->

 <!-- step one: create an array with underscored as many as in this word -->


var underscoresArray = [];

for (var i = 0; i < randomWord.length; i++) {

underscoresArray.push("_");


}

console.log(underscoresArray);





<!-- step two create a word of underscores. -->


var underscoreWord = "";

for (var i = 0; i < randomWord.length; i++) {

underscoreWord = (underscoreWord + "_ ")

}

console.log(underscoreWord);



<!-- step2: write the underscore word into document with getElementById method -->
<!-- *** THIS WILL FAIL IF THE DOM HASNT LOADED *** -->


function writeUnderscoreWord(){

document.getElementById("word-innerhtml").innerHTML = underscoreWord;


}


window.onload = writeUnderscoreWord;

<!-- Start function activates the function above and is triggered on window.onload - is useful to have a separate start function because it can trigger multiple functions that nee to start after dom loaded  -->

function start() { 
writeUnderscoreWord();
} 
window.onload = start; 


<!-- Check if letter exists or not in the randomWord array--> 





    document.onkeyup = function(event) {

     var guessedLetter = event.key;
     console.log(guessedLetter);
     var successChecker = lettersReplaced;

     function replaceLetter(i) {

     underscoresArray[i] = underscoresArray[i].replace("_", guessedLetter);
     console.log(underscoresArray);

                               }



     for (var i = 0; i < randomWord.length; i++) {

                            if (guessedLetter === randomWord[i]) {
                            console.log("letterExists");
                            replaceLetter(i);
                            alreadyTried.push(guessedLetter);
                            lettersReplaced = lettersReplaced+1;
                            console.log(lettersReplaced);
                                               }


                            else {
                            console.log("LetterDoesNotExist");
                          };


                                               }



                            if (successChecker = lettersReplaced) {

                            alreadyTried.push(guessedLetter);
                            console.log(alreadyTried);
                          }





      }




<!-- a function that runs if letter exists nd replaces underscores with guessed letter-->






<!-- If key is in word replace underscore with letter, in all its locations-->


<!-- If key is not in word add to a repository of guessed letters. Do not add a second time.
 -->


<!-- Count guesses
 -->


<!-- Guesses counter goes down to zero
 -->


<!-- check if more letters are missing - if not - win game. If yes - continue. Until counter hits zero.
 -->



<!-- a function called replaceat that replaces a letter at index location within a word with another letter
 -->

 function replaceat(word, index, replacement) {
    return word.substr(0, index-1) +replacement+ word.substr(index-1 + replacement.length);
}

console.log(replaceat('hello', 7, 'r'))