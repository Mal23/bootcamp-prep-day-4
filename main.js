// eslint-disable-next-line
function greet() {

    // get the inputs by id
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');


    // get values out of inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;

    console.log(firstName, lastName);

    // make the greeting
    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';
    console.log(greeting);

    // display greeting


// remove prompt


}

// TODO: validate name inputs
// TODO: clear inputs after greet?