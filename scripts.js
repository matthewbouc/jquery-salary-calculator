$(document).ready(onReady);

const currentEmployees = [];


function onReady(){
    console.log('jq')
    $('#addEmployeeButton').on('click', addEmployee);
}

/**
 * Triggers required functions when an employee is added.
 */
function addEmployee(){
    getEmployeeInfo();
    clearTextInputs();
    displayEmployees();
    displayMonthlySalary();
    deleteButton();

    //Test console.log - delete
    console.log(currentEmployees);
}

/**
 *  Clears the text inputs after information has been entered and collected.
 * */
function clearTextInputs(){
    $('#empFirstName').val('');
    $('#empLastName').val('');
    $('#empID').val('');
    $('#empTitle').val('');
    $('#empSalary').val('');
}

/**
 * Instantiates the .on('click') delete button listeners any time an employee is added.  On click, runs removeEmployee() and adjusts DOM.
 */
function deleteButton(){
    $('.deleteEmployeeButton').on('click', function(){
        const idEmployeeID = $(this).parent().parent().attr('id')
        $(this).parent().parent().remove();
        removeEmployee(idEmployeeID);
    });
}

/**
 * Adds a newly entered employee to the DOM.
 */
function displayEmployees(){
    const tableDisplay = $('.table');
    const employeeIndex = currentEmployees.length - 1;
    const employee = currentEmployees[employeeIndex];
    tableDisplay.append(`<tr id="${employee.id}">
                            <td>${employee.firstName}</td>
                            <td>${employee.lastName}</td>
                            <td>${employee.id}</td>
                            <td>${employee.title}</td>
                            <td>$${employee.salary.toLocaleString()}</td>
                            <td><button class="deleteEmployeeButton">Delete</button></td>
                        </tr>`)
}

/**
 * Runs monthlySalaryCalc() and updates the DOM. Shows 20k warning.
 */
function displayMonthlySalary(){
    const totalSalary = monthlySalaryCalc(currentEmployees)
    $('#monthlySalaryCost').empty();
    $('#monthlySalaryCost').append(`$${totalSalary.toLocaleString()}`)
    if (totalSalary > 20000){
        $('#totalSalaryDiv').css('background-color', 'red');
    }
}

/**
 * Creates an employee object from the text inputs and adds to currentEmployee array.
 */
function getEmployeeInfo(){
    const employee = {
        firstName: $('#empFirstName').val(),
        lastName: $('#empLastName').val(),
        id: $('#empID').val(),
        title: $('#empTitle').val(),
        salary: Number($('#empSalary').val()),
    }
    currentEmployees.push(employee);
}

/**
 * Used within displayMonthlySalary().
 * @param {array} objectArray 
 * @returns sum monthly salary cost of all employees
 */
function monthlySalaryCalc(objectArray){
    let monthlySalaryCost = 0;    
    for (const employee of objectArray){
        const empMonthlyCost = employee.salary/12;
        monthlySalaryCost += empMonthlyCost;
    }
    return monthlySalaryCost
}

/**
 * Runs .on('click') of delete button.  Updates salary cost on DOM.
 * @param {Number} employeeIDValue 
 */
function removeEmployee(employeeIDValue){
    for (let i = 0; i < currentEmployees.length; i++){
        if (currentEmployees[i].id == employeeIDValue){
            let removedEmployee = currentEmployees.splice(i, 1);
        }
    }
    displayMonthlySalary();
}


// Update the readme.md file

// Extra - Add styling