try {
    // This will definitely throw an error because it's not valid JSON
    JSON.parse("not a number");
} catch (error) {
    console.log("Invalid JSON!");
} finally {
    console.log("Parsing attempt done.");
}