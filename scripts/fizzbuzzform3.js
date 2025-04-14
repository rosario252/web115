document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name-form").addEventListener("submit", function (event) {
        event.preventDefault();

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

        // Dynamic divisibility rules
        const rules = [
            { divisor: 3, word: "Unique", className: "unique" },
            { divisor: 5, word: "Voice", className: "voice" },
            { divisor: 7, word: "BANG!", className: "bang" }
            // Add more here if needed, e.g. { divisor: 11, word: "POW!" }
        ];

        for (let i = 1; i <= 140; i++) {
            let output = `${i}. `;
            let textParts = [];
            let classList = [];

            for (let rule of rules) {
                if (i % rule.divisor === 0) {
                    textParts.push(rule.word);
                    classList.push(rule.className);
                }
            }

            if (textParts.length === 0) {
                textParts.push(" ");
                classList.push("hi");
            }

            const paragraph = document.createElement("p");
            paragraph.textContent = output + textParts.join(" ");
            classList.forEach(cls => paragraph.classList.add(cls));
            resultsContainer.appendChild(paragraph);
        }
    });
});