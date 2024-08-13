const textArray = ["Hello, World!", "THIS IS JAY NAKASHE", "Welcome to My Portfolio!", "Enjoy Your Stay!"];
const typingSpeed = 250;
const erasingSpeed = 200;
const newTextDelay = 1000; // Delay before starting to type next text
let textArrayIndex = 0;
let charIndex = 0;

const typingText = document.querySelector(".typing-text");

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typingText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, typingSpeed + 1100);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
