$(document).ready(onReady);

const currentEmployees = [];


function onReady(){
    console.log('jq')
    $('#addEmployeeButton').on('click', addEmployee)
};


function addEmployee(){
    currentEmployees.push(getEmployeeInfo());
}

//create submit button that collects into an object. store that object in an array.


function getEmployeeInfo(){
    const employee = {
        firstName: $('#empFirstName').val(),
        lastName: $('#empLastName').val(),
        id: $('#empID').val(),
        title: $('#empTitle').val(),
        salary: $('#empSalary').val(),
    }
}

//append employee info to the DOM

//from the info gathered - determine monthly costs - append to the DOM
    // if cost exceeds $20K, signal with red element background

//Create a delete button that deletes employee from the DOM.
    // Remove employee's salary from the reported total.

// Update salaries account so that the deleted employee no longer counts against cost.




// Update the readme.md file

// Extra - Add styling