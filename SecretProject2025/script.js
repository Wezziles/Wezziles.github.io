const messages = [
    "Are you sure?",
    "Are you reeeeally sure??",
    "Maybe you pressed this by mistake?",
    "BB pleaseeeee",
    "I promise infinite smooches...",
    "If you say no, Loki and Lady will be really sad",
    "I will be very sad",
    "I will be very very very sad",
    "Ok fine, I'll stop asking...",
    "SIKE, say yes pleaseeeeeeeee ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}