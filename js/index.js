const confirmLogin = confirm('Log in as an administrator?');
const text = document.querySelector('.console');
const words = ['run..', 'initialize..', 'log in..'];
const wordsFail = ['fail login..', 'try again..', 'reload..'];

function processingLogin() {
   if (confirmLogin == true) {
      setTyper(text, words);

      function setTyper(element, words) {
         const LETTER_TYPE_DELAY = 40;
         const WORD_STAY_DELAY = 400;

         const DIRECTION_FORWARDS = 0;
         const DIRECTION_BACKWARDS = 1;

         var direction = DIRECTION_FORWARDS;
         var wordIndex = 0;
         var letterIndex = 0;

         var wordTypeInterval;

         startTyping();

         function startTyping() {
            wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
         }

         function typeLetter() {
            const word = words[wordIndex];

            if (direction == DIRECTION_FORWARDS) {
               letterIndex++;

               if (letterIndex == word.length) {
                  direction = DIRECTION_BACKWARDS;
                  clearInterval(wordTypeInterval);
                  setTimeout(startTyping, WORD_STAY_DELAY);
               }
            } else if (direction == DIRECTION_BACKWARDS) {
               letterIndex--;

               if (letterIndex == 0) {
                  nextWord();
               }
            }

            const textToType = word.substring(0, letterIndex);

            element.textContent = textToType;
         }

         function nextWord() {
            letterIndex = 0;
            direction = DIRECTION_FORWARDS;
            wordIndex++;

            if (wordIndex == words.length) {
               wordIndex = 4;
            }
         }
      }

      setTimeout(function () {
         window.location.href = 'admin.html';
      }, 4 * 1000);
   } else {
      setTyper(text, wordsFail);

      function setTyper(element, words) {
         const LETTER_TYPE_DELAY = 40;
         const WORD_STAY_DELAY = 400;

         const DIRECTION_FORWARDS = 0;
         const DIRECTION_BACKWARDS = 1;

         var direction = DIRECTION_FORWARDS;
         var wordIndex = 0;
         var letterIndex = 0;

         var wordTypeInterval;

         startTyping();

         function startTyping() {
            wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
         }

         function typeLetter() {
            const word = wordsFail[wordIndex];

            if (direction == DIRECTION_FORWARDS) {
               letterIndex++;

               if (letterIndex == word.length) {
                  direction = DIRECTION_BACKWARDS;
                  clearInterval(wordTypeInterval);
                  setTimeout(startTyping, WORD_STAY_DELAY);
               }
            } else if (direction == DIRECTION_BACKWARDS) {
               letterIndex--;

               if (letterIndex == 0) {
                  nextWord();
               }
            }

            const textToType = word.substring(0, letterIndex);

            element.textContent = textToType;
         }

         function nextWord() {
            letterIndex = 0;
            direction = DIRECTION_FORWARDS;
            wordIndex++;

            if (wordIndex == words.length) {
               wordIndex = 4;
            }
         }
      }

      setTimeout(function () {
         location.reload();
      }, 5 * 1000);
   }
}
processingLogin();
