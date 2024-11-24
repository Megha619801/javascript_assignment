// Q.no.1
let numbers = [];


for(let i = 0; i<5; i++) {
    let num = parseFloat(prompt(`Enter number ${i+1}:`));
    numbers.push(num);
}
console.log(numbers);



console.log("Numbers in reverse order: ");
for (let i = numbers.length-1; i>=0; i--) {

    console.log(numbers[i]);
}

// Q.no.2

let num = parseInt(prompt(`Enter the number of participants`), 5);
let participants = [];

for (let i = 0; i<num; i++){
    let name = prompt(`Enter the name of the participant ${i + 1}:`);
    participants.push(name)
}

participants.sort();

let olElement = document.getElementById("demo");
        participants.forEach(participant => {
            let li = document.createElement("li");
            li.textContent = participant;
            olElement.appendChild(li);
        });

// Q.no.3
let dogNames = [];

        // Ask for the names of six dogs
        for (let i = 0; i < 6; i++) {
            let name = prompt(`Enter the name of dog ${i + 1}:`);
            dogNames.push(name);
        }

        // Sort the names in reverse alphabetical order
        dogNames.sort().reverse();

        // Display the names in an unordered list
        let ulElement = document.getElementById("mahi");
        dogNames.forEach(dogName => {
            let li = document.createElement("li");
            li.textContent = dogName;
            ulElement.appendChild(li);
        });

// Q.no.4

// Initialize an empty array to store the numbers
let numbers = [];

while (true) {
    // Prompt the user for a number
    let input = parseFloat(prompt("Enter a number (enter 0 to stop):"));

    // Stop if the user enters 0
    if (input === 0) {
        break;
    }

    // Add the number to the array
    numbers.push(input);
}

// Sort the numbers in descending order
numbers.sort((a, b) => b - a);

// Print the numbers to the console
console.log("Numbers in descending order:");
numbers.forEach(num => console.log(num));


// Q.no.5

// Initialize an empty array to store the numbers
let numbers = [];

while (true) {
    // Prompt the user for a number
    let input = parseFloat(prompt("Enter a number:"));

    // Check if the number has already been entered
    if (numbers.includes(input)) {
        console.log(`The number ${input} has already been entered. Stopping the program.`);
        break;
    }

    // Add the number to the array
    numbers.push(input);
}

// Sort the numbers in ascending order
numbers.sort((a, b) => a - b);

// Print the numbers to the console
console.log("Numbers in ascending order:");
numbers.forEach(num => console.log(num));


// Q.no.6

function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
}

// Main program
let ulElement = document.getElementById("mahi");
let roll;

do {
            // Roll the dice
            roll = rollDice();

            // Create a list item for the roll and add it to the <ul>
            let li = document.createElement("li");
            li.textContent = `You rolled: ${roll}`;
            ulElement.appendChild(li);
} while (roll !== 6);

// Q.no.7
function rollDice(sides) {
            return Math.floor(Math.random() * sides) + 1; // Random number between 1 and sides
        }

        // Main program
        const maxSides = parseInt(prompt("Enter the number of sides on the dice:"), 10);
        if (isNaN(maxSides) || maxSides < 1) {
            alert("Please enter a valid number of sides.");
        } else {
            let rollResult;
            const ulElement = document.getElementById("mahi");

            do {
                // Roll the dice
                rollResult = rollDice(maxSides);

                // Display the result in the unordered list
                const li = document.createElement("li");
                li.textContent = `Rolled: ${rollResult}`;
                ulElement.appendChild(li);

            } while (rollResult !== maxSides); // Continue rolling until the max number is rolled
        }

// Q.no.8

function concat(stringsArray) {
            let result = "";
            for (let i = 0; i < stringsArray.length; i++) {
                result += stringsArray[i]; // Append each element to the result
            }
            return result;
        }

        // Hardcoded array of strings
        const names = ["Johnny", "DeeDee", "Joey", "Marky"];

        // Call the function and get the result
        const concatenatedResult = concat(names);

        // Display the result in the HTML document
        document.getElementById("mahi").textContent = concatenatedResult;




