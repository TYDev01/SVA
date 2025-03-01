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
