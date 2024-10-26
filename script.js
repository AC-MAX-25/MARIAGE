let score = 0;
let currentMole;
let timer;

function getRandomHole() {
    const holes = document.querySelectorAll('.hole');
    const randomIndex = Math.floor(Math.random() * holes.length);
    return holes[randomIndex];
}

function showMole() {
    if (currentMole) {
        currentMole.classList.remove('mole'); // Remove mole color from previous hole
    }

    const hole = getRandomHole();
    hole.classList.add('mole'); // Apply blue color to new mole hole
    currentMole = hole;
}

function startGame() {
    score = 0;
    document.getElementById('score').textContent = score;

    // Set an interval to show moles every second
    timer = setInterval(() => {
        showMole();
    }, 1000);

    const holes = document.querySelectorAll('.hole');
    holes.forEach(hole => {
        hole.addEventListener('click', () => {
            if (hole === currentMole) {
                score++;
                document.getElementById('score').textContent = score;
                currentMole.classList.remove('mole'); // Clear the mole color
                currentMole = null;

                // Check if score has reached 10
                if (score === 10) {
                    window.location.href = "congratulations.html";
                }
            }
        });
    });

    // End game after 15 seconds
    setTimeout(() => {
        clearInterval(timer);
        if (score < 10) {
            alert(`Game over! Your score is ${score}`);
        }
    }, 15000); // 15 seconds game time
}

