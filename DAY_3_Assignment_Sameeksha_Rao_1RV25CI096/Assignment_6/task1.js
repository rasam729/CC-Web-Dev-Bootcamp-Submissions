const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Operation Successful!"), 2000);
});

async function runOperation() {
    try {
        const result = await myPromise;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

runOperation();