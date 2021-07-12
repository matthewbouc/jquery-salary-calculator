$(document).ready(onReady);

const currentEmployees = [];

function onReady(){
    console.log('jq') // test if ready
    $('#addEmployeeButton').on('click', addEmployee);
    $('.table').on('click', '.deleteButton', deleteButton);
}

/**
 * Triggers required functions when an employee is added.
 */
function addEmployee(){
    if (getEmployeeInfo()){ // if/else alert added in late - could use some cleanup
    clearTextInputs();
    displayEmployees();
    displayMonthlySalary();
    //Test console.log
    console.log(currentEmployees);
    } else {
        alert(`All information required to update employee list.`);
    }
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
    const idEmployeeID = $(this).attr('id')
    $(this).remove();
    removeEmployee(idEmployeeID);
    runOnDelete();
}

/**
 * Adds a newly entered employee to the DOM.
 */
function displayEmployees(){
    const tableDisplay = $('.table');
    const employeeIndex = currentEmployees.length - 1;
    const employee = currentEmployees[employeeIndex];
    tableDisplay.append(`<tr class="employeeRow" id="${employee.id}">
                            <td>${employee.firstName}</td>
                            <td>${employee.lastName}</td>
                            <td>${employee.id}</td>
                            <td>${employee.title}</td>
                            <td>$${employee.salary.toLocaleString()}</td>
                            <td><button class="btn-danger deleteButton">Delete</button></td>
                        </tr>`)
}

/**
 * Runs monthlySalaryCalc() and updates the DOM. Shows 20k warning.
 */
function displayMonthlySalary(){
    const totalSalary = monthlySalaryCalc(currentEmployees);
    $('#monthlySalaryCost').empty();
    $('#monthlySalaryCost').append(`${totalSalary.toLocaleString('en-US', {
        style: "currency",
        currency: "USD"
    })}`)
    if (totalSalary > 20000){
        $('#totalSalaryDiv').css('background-color', 'darkred');
        $('#totalSalaryDiv').css('color', 'white');
    } else {
        $('#totalSalaryDiv').css('background-color', 'white');
        $('#totalSalaryDiv').css('color', 'black');
    }
}

/**
 * Creates an employee object from the text inputs and adds to currentEmployee array.
 */
function getEmployeeInfo(){
    const firstNameInput = $('#empFirstName').val()
    const lastNameInput = $('#empLastName').val()
    const idInput = $('#empID').val()
    const titleInput = $('#empTitle').val()
    const salaryInput = Number($('#empSalary').val())
    if (!firstNameInput || !lastNameInput || !idInput || !titleInput || !salaryInput){
        return false
    } else {
        const employee = {
            firstName: firstNameInput,
            lastName: lastNameInput,
            id: idInput,
            title: titleInput,
            salary: salaryInput,
        }
        currentEmployees.push(employee);
    }
    return true
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
    // This could also be a filter!!
    //currentEmployees = currentEmployees.filter(employee => employeeIDValue !== currentEmployees.id)
        // returns all employees that don't match the employee id value!
    for (let i = 0; i < currentEmployees.length; i++){
        if (currentEmployees[i].id == employeeIDValue){
            let removedEmployee = currentEmployees.splice(i, 1);
        }
    }
    displayMonthlySalary();
}

/**
 * Runs on delete.
 */
function runOnDelete(){
    $('#appendTo').empty();
    $('#appendTo').append(` <div class="modal fade" id="someModal">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <img src="https://i.ytimg.com/vi/IP-3qhpxfcs/hqdefault.jpg">
                                        </div>   
                                    </div>                                                                       
                                </div>                                          
                            </div>`);
    $('#someModal').modal('show');
}
