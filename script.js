const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');
const directYes = document.getElementById('directYes');
const btnOkSorry = document.getElementById('btnOkSorry');
const beginning = document.getElementById('beginning');
const firstNo = document.getElementById('firstNo');
const btnYesSure = document.getElementById('yesSure');
const btnNotSure = document.getElementById('notSure');
const whereIsTheBtn = document.getElementById('whereIsTheBtn');
const btnGone = document.getElementById('btnGone');
const btnOkChill = document.getElementById('okChill');
const challenge = document.getElementById('challenge');
const btnStartGame = document.getElementById('startGame');
const game = document.getElementById('game');
const btnClickHere = document.getElementById('clickHere');
const counter = document.getElementById('counter');
const gameWon = document.getElementById('gameWon');
const emoji = document.getElementById('emoji');

btnYes.addEventListener('click', () => {
    directYes.style.display = 'flex';
    btnYes.style.display = 'none';
    btnNo.style.display = 'none';
    beginning.style.display = 'none';
});

btnOkSorry.addEventListener('click', () => {
    directYes.style.display = 'none';
    btnYes.style.display = 'block';
    btnNo.style.display = 'block';
    beginning.style.display = 'block';
});

btnNo.addEventListener('click', () => {
    firstNo.style.display = 'block';
    beginning.style.display = 'none';
});

btnYesSure.addEventListener('click', () => {
    setTimeout(() => {
        btnYesSure.style.display = 'none';
    }, [200]);
    setTimeout(() => {
        whereIsTheBtn.style.display = 'block';
    }, [1500]);
});

whereIsTheBtn.addEventListener('click', () => {
    btnGone.style.display = 'block';
    firstNo.style.display = 'none';
});

btnOkChill.addEventListener('click', () => {
    firstNo.style.display = 'block';
    btnGone.style.display = 'none';
    whereIsTheBtn.style.display = 'none';
});

btnNotSure.addEventListener('click', () => {
    firstNo.style.display = 'none';
    challenge.style.display = 'block';
});

btnStartGame.addEventListener('click', () => {
    challenge.style.display = 'none';
    game.style.display = 'block';
});

let countedNumber = 0;
const emojis = [
    "🤨",
    "😕",
    "🫤",
    "🤔",
    "😊" 
  ];

function updateEmoji() {
    const index = Math.min(countedNumber, emojis.length - 1);
    emoji.textContent = emojis[index];
}

btnClickHere.addEventListener('click', () => {
    countedNumber += 1;
    counter.innerHTML = `Punkte: ${countedNumber}`;
    updateEmoji();

    if (countedNumber === 5) {
        game.style.display = 'none';
        gameWon.style.display = 'block';
    }
});

updateEmoji();