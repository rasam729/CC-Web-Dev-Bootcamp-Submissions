let timeLeft = 5;

const countdown = setInterval(() => {
    console.log(timeLeft);

    if (timeLeft === 0) {
        clearInterval(countdown);
        console.log("Time's up!");
    } else {
        timeLeft--;
    }
}, 1000);