function divide(a,b){
    if (b===0) {
        throw new Error('Error: Cannot divide by zero!');
    }
    return a/b;
}

try{
    console.log(divide(10,0));
}

catch(error) {
    console.log("Error: Cannot divide by zero!");
}

divide(10,2);
divide(10,0);