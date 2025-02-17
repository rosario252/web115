function greetUser() {
    // Get user input values
    const firstName = document.getElementById("first_name").value;
    const middleInitial = document.getElementById("middle_initial").value;
    const lastName = document.getElementById("last_name").value;

    // Construct the full name
    let fullName = firstName;
    if (middleInitial) {
        fullName += ` ${middleInitial}.`;
    }
    fullName += ` ${lastName}`;

    // Display greeting
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Welcome to Mommii Rozay's Brand, ${fullName}!`;
	
    // Prompt the user for a number
    let countTo = prompt(`How high do you want to count, ${firstName}?`);
    countTo = parseInt(countTo);
    
    // Validate user input
    if (isNaN(countTo) || countTo <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Generate themed output with a loop using an unordered list
    const loopContainer = document.createElement("ul");
    for (let i = 1; i <= countTo; i++) {
        const isEven = i % 2 === 0 ? "even" : "odd";
        const listItem = document.createElement("p");
        listItem.textContent = `${i}. Bazoom Bazang - The number is ${isEven}`;
        loopContainer.appendChild(listItem);
    }

    // Append the loop container below the greeting
    greetingElement.parentElement.appendChild(loopContainer);
}