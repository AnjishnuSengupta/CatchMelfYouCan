// Initial setup
let clickCount = 0;
const catGif = document.getElementById("catGif");
const message = document.getElementById("message");
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

const gifs = ["assets/gif/cat1.gif", "assets/gif/cat2.gif", "assets/gif/cat3.gif"]; // Array of GIFs
const messages = ["Do you love me? 😏", "Please Think Again", "Are You Sure?"]; //Array of Texts
const noMoveSpeed = 2000; // Speed in milliseconds for button movement

window.onload = function() {
    var audioElement = document.getElementById('background-audio');
    if (audioElement) {
        audioElement.volume = 0.5; // Set volume to 50%
        // Play audio only after user interaction to avoid browser blocking
        document.body.addEventListener('click', function() {
            audioElement.play();
        });
    }
}; 

yesButton.addEventListener("click", function() {
    window.location.href = "love.html"; // Redirect to love.html when Yes is clicked
});

noButton.addEventListener("mouseover", function() {
    if (clickCount === 2) {
        moveButton(); // Only start moving on 3rd attempt
    }
});

noButton.addEventListener("click", function() {
    if (clickCount < 2) {
        clickCount++;
        message.textContent = messages[clickCount]; // Change the Text each time
        catGif.src = gifs[clickCount]; // Change the GIF each time
    } else {
        moveButton(); // Move the button on the third attempt
    }
});

function moveButton() {
    // Move the No button to a random position slowly
    const newTop = Math.random() * window.innerHeight - 50;
    const newLeft = Math.random() * window.innerWidth - 50;

    noButton.style.position = "absolute";
    noButton.style.transition = `all ${noMoveSpeed}ms ease`;
    noButton.style.top = `${Math.max(newTop, 0)}px`;
    noButton.style.left = `${Math.max(newLeft, 0)}px`;
}
