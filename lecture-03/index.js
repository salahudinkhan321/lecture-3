import prompt_sync from "prompt-sync"


const prompt = prompt_sync()

let correctPIN = "1234"; // The correct PIN
let enteredPIN = ""; 
let attempts = 0;
let maxAttempts = 3;

while (enteredPIN !== correctPIN && attempts < maxAttempts) {
    enteredPIN = prompt("Enter your PIN: "); // Prompt user to input PIN
    attempts++;

    if (enteredPIN === correctPIN) {
        console.log("PIN correct. Access granted.");
    } else if (attempts < maxAttempts) {
        console.log(`Incorrect PIN. Attempts left: ${maxAttempts - attempts}`);
    } else {
        console.log("Card blocked due to too many failed attempts.");
    }
}

// To satisfies 3 conditions

// if(){

// }else if(){

// }else{

// }

// To satisfies 2 conditions

// if(){

// }else{

// }