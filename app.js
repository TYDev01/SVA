document.addEventListener("DOMContentLoaded", () => {
    const tokenomicsBox = document.querySelector(".percents");

    function addAnimation() {
        tokenomicsBox.classList.add("animated-box");
    }

    function removeAnimation() {
        tokenomicsBox.classList.remove("animated-box");
    }

    // Start animation when scrolling into view
    window.addEventListener("scroll", () => {
        let rect = tokenomicsBox.getBoundingClientRect();
        let isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            addAnimation();
        } else {
            removeAnimation();
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const text = "A secured reward system on Solana, make it to the top holders and <br> earn virtual assets. Best rewards for Diamond Hands.";
    const speed = 50; // Speed of typing (milliseconds)
    const pause = 2000; // Pause before restarting
    let i = 0;
    let container = document.getElementById("typewriter");

    function typeWriter() {
        if (i < text.length) {
            if (text.substring(i, i + 4) === "<br>") {
                container.innerHTML += "<br>"; // Insert a line break
                i += 4; // Skip over <br> tag
            } else {
                container.innerHTML = text.substring(0, i + 1) + "<span class='cursor'>|</span>"; // Add cursor
                i++;
            }
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                container.innerHTML = ""; // Clear text
                i = 0; // Restart typing
                typeWriter();
            }, pause);
        }
    }

    typeWriter();
});


