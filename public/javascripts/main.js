/* eslint linebreak-style: ["error", "windows"]*/

const currentLives = document.getElementById('currentLives');
const btnGuess = document.getElementById('btnGuess');
const btnNewGame = document.getElementById('btnNewGame');
const correctAnswer = getCookie('correctAnswer');

const guessList = document.getElementById('guessList');

let lives = 3;

currentLives.innerHTML = lives;

btnGuess.addEventListener('click', (e) => {
  e.preventDefault();

  const userGuess = document.getElementById('userGuess').value;
  const el = document.createElement('li');

  el.textContent = userGuess;

  if (correctAnswer == userGuess) {
    btnGuess.disabled = true;
    window.alert('You win!');
    el.setAttribute('id', 'correct');
  } else {
    el.setAttribute('id', 'incorrect');
    lives -= 1;
  }

  guessList.appendChild(el);

  if (lives == 0) {
    btnGuess.disabled = true;
    window.alert('You did not guess correctly!');
  } else {
    currentLives.innerHTML = lives;
  }
});

btnNewGame.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

/**
 * Gets the value of a cookie
 * @param {string} name - The name of the cookie
 * @return {string} - The value of the cookie
 */
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
