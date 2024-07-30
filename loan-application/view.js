const searchButton = document.getElementById("search-button");
const searchPidInput = document.getElementById("search-pid");
const applicationList = document.getElementById("application-list");

function renderApplication(applications) {
    applicationList.innerHTML = "";

    applications.forEach((application, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${application.fullname}</td>
            <td>${application.email}</td>
            <td>${application.phone}</td>
            <td>${application.pan}</td>
            <td>${application.Aadhar}</td>
            <td>${application.amount}</td>
            <td>${application.Salary}</td>
            <td>${application.DOB}</td>
            <td>${application.gender}</td>
            <td><button class="delete-button" data-index="${index}">Delete</button></td>
        `;
        applicationList.appendChild(row);
    });

    // Add event listeners to the delete buttons
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            removeApplication(index);
        });
    });
}

function fetchApplications() {
    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    renderApplication(applications);
}

function searchApplication(aadhar) {
    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    const filteredApplications = applications.filter(application => application.Aadhar === aadhar);
    renderApplication(filteredApplications);
}

function removeApplication(index) {
    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.splice(index, 1); // Remove the application at the specified index
    localStorage.setItem("applications", JSON.stringify(applications));
    fetchApplications(); // Re-render the updated list
}

searchButton.addEventListener("click", () => {
    const searchAadhar = searchPidInput.value;
    searchApplication(searchAadhar);
});

// Initial fetch and render of applications
fetchApplications();
