const greetings = "Welcome! Riad";

function reverseString(text) {
    let reversed = "";
    for (const letter of text) {
        reversed = reversed + letter;
    }
}

console.log(reverseString(greetings));