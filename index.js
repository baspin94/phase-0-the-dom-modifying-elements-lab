// Write your code here!

// Test 1: Removing the <main>
const main = document.querySelector("main#main");
main.remove();

// Test 2: Create a new header
const newHeader = document.createElement("h1");

// Test 3: Assign id to the new <h1>
newHeader.id = "victory";

// Test 4: Assign text to new <h1>
newHeader.textContent = "Bianca is the champion";