//UC4 - specifying the value for salary
const salaryValue = document.querySelector('.salary-output');
const salaryInputRange = document.querySelector('#salary');
salaryInputRange.addEventListener("input",(event) => {
    //salaryValue.textContent = event.target.value;
    salaryValue.textContent = salaryInputRange.value;
});