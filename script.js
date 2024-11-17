const signUpForm = document.querySelector('.SignUp');
console.dir(signUpForm);
const errorMsg = document.querySelector('.error');

signUpForm.noValidate = true;


function Input(id,name) {
    this.id = id;
    this.name = name;
}

const formInputs = [
    new Input('name', 'name'),
    new Input('email', 'email'),
    new Input('phone', 'phone'),
    new Input('address', 'address'),
    new Input('city', 'city'),
    new Input('state', 'state'),
    new Input('zip', 'zip'),
];


// Function to get the values of all form inputs
function getFormValues() {
    const formValues = {};
    formInputs.forEach(input => {
      const inputElement = document.getElementById(input.id);
      formValues[input.name] = inputElement.value;
    });
    return formValues;
}


function validateForm() {
    const formValues = getFormValues();
    let isValid = true;
    // console.log(formValues);
    for (const key in formValues) {
        if (formValues[key] === '') {
            errorMsg.textContent = `Please enter your ${key}`;
            isValid = false;
            break;
        }
    }
    return isValid;
}






signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if(isValid){
        console.log('form is valid');
        signUpForm.submit();
    }
});