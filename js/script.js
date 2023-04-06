//UC8 - Adding event listener for salary
const salaryValue = document.querySelector('.salary-output');
const salaryInputRange = document.querySelector('#salary');
salaryInputRange.addEventListener("input",(event) => {
    salaryValue.textContent = salaryInputRange.value;
});

const nameInput = document.querySelector('#name');
const nameError = document.querySelector('#errormessage');
const notes = document.querySelector('#notes');

//UC9 - Save the details in local storage
function save() {
    const picRadio = document.querySelector('input[name="profile"]:checked');
    const genderRadio = document.querySelector('input[name="gender"]:checked');
    const departmentsCheckboxes = document.querySelectorAll('input[class="checkbox"]:checked');
    let departmentArray = [];
    departmentsCheckboxes.forEach((x) => {
        departmentArray.push(x.value);
    });
    const salaryInput = document.getElementById("salary");
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');

    // Combine the values to form a date string
    let dateStr = day.value + '-' + month.value + '-' + year.value;
    const noteInput = document.getElementById("notes");

    let employeePayrollList = [];
    let formData = {
        name: nameInput.value,
        image: picRadio.value,
        genderValue: genderRadio.value,
        department: departmentArray,
        salary: salaryInputRange.value,
        startdate: dateStr,
        notes: notes.value
      };

    // Retrieve existing data from local storage or create a new array if it doesn't exist
    let data = JSON.parse(localStorage.getItem("formData")) || employeePayrollList;
    
    // Add new form data to the array
    data.push(formData);
  
    // Store the updated array back into local storage
    localStorage.setItem("formData", JSON.stringify(data));
  
    // Clear the form inputs for next form input
    nameInput.value = "";
    picRadio.value = "";
    genderRadio.value = "";
    departmentArray = [];
    salaryInputRange.value = "";
    dateStr = "";
    notes.value = "";
}
