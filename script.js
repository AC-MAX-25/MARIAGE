let score = 0;
let currentMole;
let timer;

// Array of images for the mole
const moleImages = ['pic1.png', 'pic2.png', 'pic3.png', 'pic4.png'];

function getRandomHole() {
    const holes = document.querySelectorAll('.hole');
    const randomIndex = Math.floor(Math.random() * holes.length);
    return holes[randomIndex];
}

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * moleImages.length);
    return moleImages[randomIndex];
}

function showMole() {
    if (currentMole) {
        currentMole.classList.remove('mole');
        currentMole.style.backgroundImage = ''; // Clear the previous image
    }

    const hole = getRandomHole();
    const randomImage = getRandomImage();
    hole.classList.add('mole');
    hole.style.backgroundImage = `url('${randomImage}')`; // Apply a random image as the background
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
                currentMole.style.backgroundImage = ''; // Clear the image
                currentMole = null;

                // Check if score has reached 10
                if (score === 15) {
                    window.location.href = "congratulations.html";
                }
            }
        });
    });

    setTimeout(() => {
        clearInterval(timer);
        if (score < 15) {
            alert(`${score} ! Quel score pathétique !`);
        }
    }, 16000); // 15 seconds game time
}


