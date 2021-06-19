$(document).ready(onReady);

const currentEmployees = [];


function onReady(){
    console.log('jq')
    $('#addEmployeeButton').on('click', addEmployee);
}

function addEmployee(){
    getEmployeeInfo();
    clearTextInputs();
    displayEmployees();
    displayMonthlySalary();
    deleteButtonListener();

    //Test console.log - delete
    console.log(currentEmployees);
}


function clearTextInputs(){
    $('#empFirstName').val('');
    $('#empLastName').val('');
    $('#empID').val('');
    $('#empTitle').val('');
    $('#empSalary').val('');
}

function displayEmployees(){
    const tableDisplay = $('.table');
    const employeeCount = currentEmployees.length
    const employee = currentEmployees[employeeCount-1];
    tableDisplay.append(`<tr id="emp${employeeCount}">
                            <td>${employee.firstName}</td>
                            <td>${employee.lastName}</td>
                            <td>${employee.id}</td>
                            <td>${employee.title}</td>
                            <td>$${employee.salary.toLocaleString()}</td>
                            <td><button class="deleteEmployeeButton">Delete</button></td>
                        </tr>`)
}

function displayMonthlySalary(){
    const totalSalary = monthlySalaryCalc(currentEmployees)
    $('#monthlySalaryCost').empty();
    $('#monthlySalaryCost').append(`$${totalSalary.toLocaleString()}`)
    if (totalSalary > 20000){
        $('#totalSalaryDiv').css('background-color', 'red');
    }
}

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

function monthlySalaryCalc(objectArray){
    let monthlySalaryCost = 0;    
    for (const employee of objectArray){
        const empMonthlyCost = employee.salary/12;
        monthlySalaryCost += empMonthlyCost;
    }
    return monthlySalaryCost
}

function deleteButtonListener(){
    $('.deleteEmployeeButton').on('click', function(){
        $(this).parent().parent().remove();
    });
}


//Create a delete button that deletes employee from the DOM.



    // Remove employee's salary from the reported total.

// Update salaries account so that the deleted employee no longer counts against cost.




// Update the readme.md file

// Extra - Add styling