

<!-- An array of words -->

var wordbank = ['poop', 'scandal', 'miggs'];
var numlettersReplaced = 0;
var failedAttempts = 0;
var alreadyTriedandfailed = [];
var alreadyTriedandsucceeded = [];
var beenguessed = 0;
var guessedremaining = 15;






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
document.getElementById("guessesremaining-innerhtml").innerHTML = "Guesses remaining: "+guessedremaining;


}


window.onload = writeUnderscoreWord;

<!-- Start function activates the function above and is triggered on window.onload - is useful to have a separate start function because it can trigger multiple functions that nee to start after dom loaded  -->

function start() { 
writeUnderscoreWord();

} 
window.onload = start; 





<!-- what happens on key press --> 

     <!-- success checker is set to 0, and if at least one replacement is made it will be different from zero. This is later used to determine wheter a guess succeeded or failed --> 


    document.onkeyup = function(event) {



     var guessedLetter = event.key;
     console.log("guessed letter: " + guessedLetter);
     var successChecker = 0;
     console.log("success checker: " +successChecker);
     var numguesses = 0;



<!-- a function that checks if letter has already been guessed before -->

                  function hasbeenUsed(x) {

                  beenguessed = 0;

                  for (var i = 0; i < alreadyTriedandsucceeded.length; i++) {


                            if (x === alreadyTriedandsucceeded[i]) {
                            console.log("alreadyTriedandsucceeded");
                            beenguessed++;
                            console.log(beenguessed);

                                               }

                          };


                  for (var i = 0; i < alreadyTriedandfailed.length; i++) {


                            if (x === alreadyTriedandfailed[i]) {
                            console.log("alreadyTriedandfailed");
                            beenguessed++;
                            console.log(beenguessed);


                                               }
                                    }

                          };


<!-- a function to replace index in underscore array with the wanted letter--> 

     function replaceLetter(i) {

     underscoresArray[i] = underscoresArray[i].replace("_", guessedLetter);
     console.log(underscoresArray);
     underscoreWord = underscoresArray.join(" ");
     console.log(underscoreWord);
     document.getElementById("word-innerhtml").innerHTML = underscoreWord;




                               }


<!-- ONLY IF LETTER HAS NOT BEEN GUESSED look for guessed letter in each index of randomword array and if found - replace that index in the underscore array with letter. Add one to "numletterReplaced" to count. Check success checker to see if any letters have been replaced.  --> 



     successChecker = 0;

     hasbeenUsed(guessedLetter);


    if (beenguessed === 0 && guessedLetter !== "Shift" && event.key !== "Meta") {

                  console.log(event);
                 guessedremaining--;
                 document.getElementById("guessesremaining-innerhtml").innerHTML = "Guesses remaining: "+guessedremaining;


     for (var i = 0; i < randomWord.length; i++) {



                            if (guessedLetter === randomWord[i]) {
                            console.log("letterExists");
                            replaceLetter(i);
                            numlettersReplaced = numlettersReplaced+1;
                            successChecker++;
                            console.log("success checker : "+successChecker);


                                               }


                            else {
                            console.log("success checker : "+successChecker);

                          };


                                               }
                            


<!-- if the letter existed at least once, the success checker will be different from zero. If it is zero letter is pushed into  alreadyTriedandfailed array. If it is diferent from zero letter is pushed into alreadyTriedandsucceeded --> 

                        if (successChecker === 0) {
                            alreadyTriedandfailed.push(guessedLetter);
                            console.log("letters tried and failed: "+alreadyTriedandfailed);
                            document.getElementById("alreadyguessed-innerhtml").innerHTML = "Letters already guessed: "+alreadyTriedandfailed;

                          }

                          if (successChecker !== 0) {
                            alreadyTriedandsucceeded.push(guessedLetter);
                            console.log("letters tried and succeeded: "+alreadyTriedandsucceeded);
                          }

                            console.log("letters replaced :" + numlettersReplaced);
                            console.log("success checker: "+successChecker);





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

