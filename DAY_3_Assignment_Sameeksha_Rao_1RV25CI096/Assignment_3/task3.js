function checkAge(age) {
    if (age <= 0) {
        throw new Error("Age must be a positive number!");
    }
    if (age < 18) {
        throw new Error("Too young! Must be 18 or above.");
    }
    console.log("Access granted!");
}

// Testing the function
const testAges = [25, 15, -1];

testAges.forEach(age => {
    try {
        checkAge(age);
    } catch (e) {
        // e.message extracts just the text from the Error object
        console.log(`Error: ${e.message}`);
    }
});