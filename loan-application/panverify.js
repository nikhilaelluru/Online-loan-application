// Function to validate PAN number format
function validatePAN(pan) {
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]$/; // PAN format pattern

    return panPattern.test(pan);
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loan-apply");
    const submitButton = document.getElementById("submit-button");
    const panInput = document.getElementById("pan");
    const panError = document.getElementById("pan-error");

    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        // Validate PAN number
        if (!validatePAN(panInput.value)) {
            event.preventDefault(); // Prevent form submission
            panError.textContent = "Invalid PAN format. Please enter in the format ABCTY1234D.";
            panError.style.color = "red";
        } else {
            panError.textContent = ""; // Clear any previous error message
        }
    });
});
