const formStep1 = document.getElementById(`form`);
formStep1.classList.add('active');

const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const registerButton = document.getElementById('regButton');

const step2 = document.getElementById('step2');
const name1 = document.getElementById('name');
const lname = document.getElementById('lname');
const msg = document.getElementById('msg');
const submitButton = document.getElementById('submitButton');

registerButton.disabled = true;

submitButton.disabled = true;

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

    registerButton.disabled = true;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

    if (username.parentElement.classList.contains('success') &&
        password.parentElement.classList.contains('success') &&
        password2.parentElement.classList.contains('success')) {
        registerButton.disabled = false;
    }
};


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

username.addEventListener('input', validateInputs);
password.addEventListener('input', validateInputs);
password2.addEventListener('input', validateInputs);


const validateInputs2 = () => {
    const nameValue = name1.value.trim();
    const lnameValue = lname.value.trim();
    const msgValue = msg.value.trim();

    if(nameValue === '') {
        setError1(name1, 'First name is required');
    } else {
        setSuccess1(name1);
    }

    if(lnameValue === '') {
        setError1(lname, 'Last name is required');
    } else {
        setSuccess1(lname);
    }

    if(msgValue === '') {
        setError1(msg, 'Message is required');
    } else {
        setSuccess1(msg);
    }

};

const setError1 = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

    submitButton.disabled = true;
}

const setSuccess1 = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

    if (username.parentElement.classList.contains('success') &&
        password.parentElement.classList.contains('success') &&
        password2.parentElement.classList.contains('success')) {
        submitButton.disabled = false;
    }
};


name1.addEventListener('input', validateInputs2);
lname.addEventListener('input', validateInputs2);
msg.addEventListener('input', validateInputs2);

form.addEventListener('submit', e => {

    if (e.submitter.id === 'regButton') {
        stepFunction();
    } else if (e.submitter.id === 'submitButton') {
        alert("Registration completed successfuly");
    }
});
submitButton.addEventListener('click', function() {
    alert('Registration completed successfuly');
});

function darkMode()
{
    //changing bg color
    document.body.style.backgroundColor = '#222222';
}
function lightMode()
{
    //changing bg color
    document.body.style.backgroundColor = '#E6F2FF';
}

function stepFunction()
{
    const formStep1 = document.getElementById(`form`);
    formStep1.classList.remove('active');
    const currentStepElement = document.getElementById(`step2`);
    currentStepElement.classList.add('active');
}
