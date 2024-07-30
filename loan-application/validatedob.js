document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loan-apply");
    const submitButton = document.getElementById("submit-button");
    const dobInput = document.getElementById("DOB");
    const dobError = document.getElementById("dob-error");

    // Function to validate Date of Birth
function validateDOB(date) {
    const today = new Date();
    const twentyYearsAgo = new Date();
    twentyYearsAgo.setFullYear(today.getFullYear() - 20);

    // Check if the selected date is before the last 20 years
    return date < twentyYearsAgo;
}

    // Add an event listener for form submission
    form.addEventListener("submit", function(event) {
        const selectedDOB = new Date(dobInput.value);
        
        // Validate Date of Birth
        if (!validateDOB(selectedDOB)) {
            event.preventDefault(); // Prevent form submission
            dobError.textContent = "Invalid Date of Birth. Please select a date within the last 20 years and not the present day.";
            dobError.style.color = "red";
        } else {
            dobError.textContent = ""; // Clear any previous error message
        }
    });
});
