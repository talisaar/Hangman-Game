
var wins = 0;
nextTurn();

// The entire game is wrapped in the function nextTurn which is called upon in case of a win or loose

function nextTurn() {

var isfirstgame = true;
console.log("isfirstgame: "+isfirstgame);

if (wins !== 0) {
  isfirstgame = false;
  console.log("isfirstgame: "+isfirstgame);
}



// <!-- An array of words -->

var wordbank = ['poop', 'scandal', 'miggs'];
var numlettersReplaced = 0;
var failedAttempts = 0;
var alreadyTriedandfailed = [];
var alreadyTriedandsucceeded = [];
var beenguessed = 0;
var guessesremaining = 15;






// <!-- randomly select a word from array -->

var randomWord = wordbank[Math.floor(Math.random() * wordbank.length)];

console.log(randomWord);


// <!-- create an array with letters in this word-->

var charArray = [];

for (var i = 0; i < randomWord.length; i++) {

charArray.push(randomWord.charAt(i));

console.log(charArray);
  
}


// <!-- METHOD1 -->

 // <!-- step one: create an array with underscored as many as in this word -->


var underscoresArray = [];

for (var i = 0; i < randomWord.length; i++) {

underscoresArray.push("_");


}

console.log(underscoresArray);






// <!-- step two create a word of underscores. -->


var underscoreWord = "";

for (var i = 0; i < randomWord.length; i++) {

underscoreWord = (underscoreWord + "_ ")

}

console.log(underscoreWord);

if (isfirstgame === false) {
console.log("this ain't ya first game");
document.getElementById("word-innerhtml").innerHTML = underscoreWord;
document.getElementById("guessesremaining-innerhtml").innerHTML = "Guesses remaining: "+guessesremaining;

}





// <!-- step2: write the underscore word into document with getElementById method -->
// <!-- *** THIS WILL FAIL IF THE DOM HASNT LOADED *** -->


function writeUnderscoreWord(){


document.getElementById("word-innerhtml").innerHTML = underscoreWord;
document.getElementById("guessesremaining-innerhtml").innerHTML = "Guesses remaining: "+guessesremaining;


}


window.onload = writeUnderscoreWord;

//<!-- Start function activates the function above and is triggered on window.onload - is useful to have a separate start function because it can trigger multiple functions that nee to start after dom loaded  -->

function start() { 
writeUnderscoreWord();

} 
window.onload = start; 





// <!-- what happens on key press --> 

//      <!-- success checker is set to 0, and if at least one replacement is made it will be different from zero. This is later used to determine wheter a guess succeeded or failed --> 




    document.onkeyup = function(event) {

  

     var guessedLetter = event.key;
     console.log("guessed letter: " + guessedLetter);
     var successChecker = 0;
     console.log("success checker: " +successChecker);
     var numguesses = 0;



// <!-- a function that checks if letter has already been guessed before -->

                  function hasbeenUsed(x) {

                  beenguessed = 0;

                  for (var i = 0; i < alreadyTriedandsucceeded.length; i++) {


                            if (x === alreadyTriedandsucceeded[i]) {
                            console.log("alreadyTriedandsucceeded");
                            beenguessed++;
                            numlettersreplaced++;
                            console.log(beenguessed);
                            console.log("letters replaced: "+numlettersreplaced)


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


// <!-- a function to replace index in underscore array with the wanted letter--> 

     function replaceLetter(i) {

     underscoresArray[i] = underscoresArray[i].replace("_", guessedLetter);
     console.log(underscoresArray);
     underscoreWord = underscoresArray.join(" ");
     console.log(underscoreWord);
     document.getElementById("word-innerhtml").innerHTML = underscoreWord;




                               }


// <!-- ONLY IF LETTER HAS NOT BEEN GUESSED look for guessed letter in each index of randomword array and if found - replace that index in the underscore array with letter. Add one to "numletterReplaced" to count. Check success checker to see if any letters have been replaced.  --> 



     successChecker = 0;

     hasbeenUsed(guessedLetter);


    if (beenguessed === 0 && guessedLetter !== "Shift" && event.key !== "Meta") {

                 console.log(event);
                 guessesremaining--;
                 document.getElementById("guessesremaining-innerhtml").innerHTML = "Guesses remaining: "+guessesremaining;


                 


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
                            


// <!-- if the letter existed at least once, the success checker will be different from zero. If it is zero letter is pushed into  alreadyTriedandfailed array. If it is diferent from zero letter is pushed into alreadyTriedandsucceeded --> 

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
                            console.log("length is "+randomWord.length);
                            console.log("letters replaced is: "+numlettersReplaced);


                            if (numlettersReplaced === randomWord.length){
                            console.log("win");
                            wins++;
                            console.log("wins: "+wins);
                            document.getElementById("wins-innerhtml").innerHTML = "Wins: "+wins;
                            document.getElementById("previoswordwas-innerhtml").innerHTML = "Previous word was: "+randomWord;
                            document.getElementById("alreadyguessed-innerhtml").innerHTML = "Letters already guessed: ";


                            nextTurn();


                            
                          }


                          if (guessesremaining === 0) {

                          document.getElementById("previoswordwas-innerhtml").innerHTML = "Previous word was: "+randomWord;
                          document.getElementById("alreadyguessed-innerhtml").innerHTML = "Letters already guessed: ";
                          guessesremaining = 15;
                          document.getElementById("guessesremaining-innerhtml").innerHTML = "Guesses remaining: "+guessesremaining;


                          nextTurn();

                 }





      }


      };


    };




