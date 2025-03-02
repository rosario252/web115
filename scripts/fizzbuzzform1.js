// Wait for the page to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Prevent form submission & handle everything inside the event listener
    document.getElementById("name-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the form from refreshing the page

        // Get user input values
        const firstName = document.getElementById("first-name").value;
        const middleInitial = document.getElementById("middle-initial").value;
        const lastName = document.getElementById("last-name").value;

        // Create the full name string
        let fullName = firstName;
        if (middleInitial) {
            fullName += ` ${middleInitial}.`;
        }
        fullName += ` ${lastName}`;

        // Display greeting message on the page
        document.getElementById("greeting").textContent = `Welcome to Mommii Rozay, ${fullName}!`;
		
        // Check if a results container exists, else create one
        let resultsContainer = document.getElementById("results-container");
        if (!resultsContainer) {
            resultsContainer = document.createElement("div");
            resultsContainer.id = "results-container";
            document.getElementById("greeting").parentElement.appendChild(resultsContainer);
        } else {
            resultsContainer.innerHTML = ""; // Clear old results before adding new ones
        }

        // Loop from 1 to 140 and create paragraph elements
        for (let i = 1; i <= 140; i++) {
            let output = `${i}. `;
			let cssClass = "hi"; // Default class

            // Check divisibility conditions
            if (i % 3 === 0 && i % 5 === 0) {
                output += "Unique Voice"; // Both 3 & 5
				cssClass = "unique-voice";
            } else if (i % 3 === 0) {
                output += "Unique"; // Multiples of 3
				cssClass = "unique";
            } else if (i % 5 === 0) {
                output += "Voice"; // Multiples of 5
				cssClass = "voice";
            } else {
                output += "hi!"; // Default text
            }

            // Create a paragraph element
            const paragraph = document.createElement("p");
            paragraph.textContent = output;
			paragraph.classList.add(cssClass);
            resultsContainer.appendChild(paragraph);
        }
    });
});