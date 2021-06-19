$(document).ready(onReady);

const currentEmployees = [];


function onReady(){
    console.log('jq')
    $('#addEmployeeButton').on('click', addEmployee)
};


function addEmployee(){
    getEmployeeInfo();
    clearTextInputs();
    displayEmployees();


    //Test console.log - delete
    console.log(currentEmployees);
}

//create submit button that collects into an object. store that object in an array.

function clearTextInputs(){
    $('#empFirstName').val('');
    $('#empLastName').val('');
    $('#empID').val('');
    $('#empTitle').val('');
    $('#empSalary').val('');
}

function getEmployeeInfo(){
    const employee = {
        firstName: $('#empFirstName').val(),
        lastName: $('#empLastName').val(),
        id: $('#empID').val(),
        title: $('#empTitle').val(),
        salary: $('#empSalary').val(),
    }
    currentEmployees.push(employee);
    return true
}

//append employee info to the DOM

function displayEmployees(){
    const tableDisplay = $('.table');
    const employeeCount = currentEmployees.length
    const employee = currentEmployees[employeeCount-1];
    tableDisplay.append(`<tr id="emp${employeeCount}">
                            <td>${employee.firstName}</td>
                            <td>${employee.lastName}</td>
                            <td>${employee.id}</td>
                            <td>${employee.title}</td>
                            <td>${employee.salary}</td>
                            <td><button class="emp${employeeCount}">Delete</button></td>
                        </tr>`)
}

//from the info gathered - determine monthly costs - append to the DOM
    // if cost exceeds $20K, signal with red element background

//Create a delete button that deletes employee from the DOM.
    // Remove employee's salary from the reported total.

// Update salaries account so that the deleted employee no longer counts against cost.




// Update the readme.md file

// Extra - Add styling