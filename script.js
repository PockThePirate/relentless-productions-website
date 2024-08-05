function saveAnimationTimestamp() {
    const timestamp = Date.now() % 30000; // Get the current timestamp within the 30s animation cycle
    sessionStorage.setItem('animationTimestamp', timestamp);
}

function setAnimationTimestamp() {
    const timestamp = sessionStorage.getItem('animationTimestamp');
    if (timestamp) {
        const timeDiff = Date.now() - timestamp;
        const animationDelay = -timeDiff % 30000; // Calculate the delay to start the animation
        document.body.style.animationDelay = `${animationDelay}ms`;
    }
}

window.onload = setAnimationTimestamp;
