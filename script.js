let score = 0;
let currentMole;
let timer;

function getRandomHole() {
    const holes = document.querySelectorAll('.hole');
    const randomIndex = Math.floor(Math.random() * holes.length);
    return holes[randomIndex];
}

function showMole() {
    if (currentMole) currentMole.classList.remove('mole');
    const hole = getRandomHole();
    hole.classList.add('mole');
    currentMole = hole;
}

function startGame() {
    score = 0;
    document.getElementById('score').textContent = score;
    timer = setInterval(() => {
        showMole();
    }, 1000);

    const holes = document.querySelectorAll('.hole');
    holes.forEach(hole => {
        hole.addEventListener('click', () => {
            if (hole === currentMole) {
                score++;
                document.getElementById('score').textContent = score;
                currentMole.classList.remove('mole');
                currentMole = null;
            }
        });
    });

    setTimeout(() => {
        clearInterval(timer);
        alert(`Game over! Your score is ${score}`);
    }, 15000); // 15 seconds game time
}
