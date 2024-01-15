document.addEventListener("DOMContentLoaded", function () {
    const cardsWrapper = document.getElementById("cardsWrapper");
    const cards = document.querySelectorAll(".card");

    let currentIndex = 0;

    function showNextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCardPosition();
    }

    function updateCardPosition() {
        const translateValue = -currentIndex * 320; // Adjust the card width as needed
        cardsWrapper.style.transform = `translateX(${translateValue}px)`;
    }

    setInterval(showNextCard, 2000); // Adjust the interval as needed (in milliseconds)
});
