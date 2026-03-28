let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log("Tick...");

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Stopped!");
    }
}, 1000);