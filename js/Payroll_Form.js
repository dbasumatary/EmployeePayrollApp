window.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector('#name');
    const errorName = document.querySelector('#errormessage');
    text.addEventListener('input',function(){
        if(text.value.length == 0){
            errorName.textContent = "";
            return;
        }
        try { 
            (new EmployeePayrollData()).name = text.value;
            errorName.textContent = "";
            text.style.border = '2px solid green';
        }catch (e){
            errorName.textContent = e;
            text.style.border = '2px solid red';
        }
    });

    const salaryValue = document.querySelector('.salary-output');
    const salaryInputRange = document.querySelector('#salary');
    salaryInputRange.addEventListener("input",(event) => {
    salaryValue.textContent = salaryInputRange.value;
    });
});

const save = () => {
    let employeePayrollData;
    try{
        employeePayrollData = createEmployeePayroll();
        //createAndUpdateStorage(employeePayrollData);
    }catch(e){
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
        try{
            employeePayrollData.name = getInputValueById('#name');
        }catch(e){
            setTextValue('.text-error',e);
            throw e;
        }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[id=dept]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let year = getInputValueById('#year');
    let month = parseInt(getInputValueById('#month'));
    let day = getInputValueById('#day');
    let date = day + " " + month + " " + year;
    employeePayrollData.startDate = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if(item.checked)
            selItems.push(item.value);
    });
    return selItems;
}