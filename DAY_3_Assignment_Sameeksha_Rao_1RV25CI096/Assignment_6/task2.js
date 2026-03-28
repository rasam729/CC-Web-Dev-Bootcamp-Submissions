const p1 = () => new Promise(res => setTimeout(() => res("User loaded"), 1000));
const p2 = () => new Promise(res => setTimeout(() => res("Orders loaded"), 1000));
const p3 = () => new Promise(res => setTimeout(() => res("Products loaded"), 1000));

async function runAll() {
    console.log(await p1());
    console.log(await p2());
    console.log(await p3());
    console.log("All done!");
}

runAll();