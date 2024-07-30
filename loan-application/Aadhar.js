document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loan-apply");
    const submitButton = document.getElementById("submit-button");
    const aadharInput = document.getElementById("Aadhar");
    const aadharError = document.getElementById("aadhar-error");

    // Function to validate Aadhar number
    function validateAadhar(aadhar) {
        // Check if the Aadhar number is exactly 12 digits long
        return /^\d{12}$/.test(aadhar);
    }

    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        const enteredAadhar = aadharInput.value;
        
        // Validate Aadhar number
        if (!validateAadhar(enteredAadhar)) {
            event.preventDefault(); // Prevent form submission
            aadharError.textContent = "Invalid Aadhar number. Please enter exactly 12 digits.";
            aadharError.style.color = "red";
        } else {
            aadharError.textContent = ""; // Clear any previous error message
        }
    });
});
