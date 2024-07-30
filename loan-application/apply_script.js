document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("loan-apply");
  const submitButton = document.getElementById("submit-button");
  
  submitButton.addEventListener("click", function() { // Changed scheduleButton to submitButton
    const fullName = document.getElementById("fullname").value;
    const Email = document.getElementById("email").value;
    const phoneNo = document.getElementById("phone").value;
    const panNo = document.getElementById("pan").value;
    const aadharNo = document.getElementById("Aadhar").value;
    const Amount = document.getElementById("amount").value;
    const monthSalary = document.getElementById("Salary").value;
    const dob = document.getElementById("DOB").value;
    const Genders = document.getElementById("gender").value;
    
    const applicationData = { // Renamed to avoid conflicts with the previous variable
      fullname: fullName,
      email: Email,
      phone: phoneNo,
      pan: panNo,
      Aadhar: aadharNo,
      amount: Amount,
      Salary: monthSalary,
      DOB: dob,
      gender: Genders
    };
    
    // Retrieve existing applications from localStorage
    const existingApplications = JSON.parse(localStorage.getItem("applications")) || [];

    // Add the new application data to the existing applications array
    existingApplications.push(applicationData);

    // Store the updated applications array in localStorage
    localStorage.setItem("applications", JSON.stringify(existingApplications));
    
    alert("Application Submitted Successfully!");
    form.reset();
  });
});

