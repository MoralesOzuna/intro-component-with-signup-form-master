const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const bottonSubmit = document.querySelector('#submit');
const errorLabel = document.querySelector('.form-label');
const form = document.querySelector('#form');
const formFieldset = document.querySelector('.form-fieldset');
const formInput = document.querySelector('.form-input');


document.addEventListener('DOMContentLoaded', () =>{
    form.addEventListener('submit', sendForm)
})

function sendForm(e){
    e.preventDefault();
    inputFirstName(); 
    inputLastName();
    inputEmail();
    inputPassword();

}

 function inputFirstName(){
    if(firstName.value == ''){
        inputError('First Name Cannot be empty', 'firstName');
    }
    if(!firstName.value == ''){
        deleteInput('firstName');
    }
} 
function inputLastName(){
    if(lastName.value == ''){
        inputError('Last Name Cannot be empty', 'lastName');
    } else{
        deleteInput('lastName'); 
    }
}
function inputEmail(){
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    test = regex.test(email.value);

    if(email.value == ''){
        inputError('Email Cannot be Empty', 'email');
    } 
    if(!test){
        inputError('This does not look like a valid email', 'email');
    } else{
        deleteInput('email');
    }        
}

function inputPassword(){
    if(password.value == ''){
        inputError('Password Cannot be Empty', 'password');
    } else{
        deleteInput('password'); 
    }
}

function inputError(message, input) {
    const errorLabelElement = document.querySelector(`label[for= ${input}]`);
    const existingError = errorLabelElement.querySelector('.form-error');
    if (!existingError) {  
        const errorIcon= document.createElement('img');
        errorIcon.src ='images/icon-error.svg';
        errorIcon.classList.add('error-image')
        errorLabelElement.appendChild(errorIcon); 

        const error = document.createElement('p');
        error.textContent = message;
        error.classList.add('form-error');
        errorLabelElement.appendChild(error); 
     
    } 
}

function deleteInput(input){
    const errorLabelElement = document.querySelector(`label[for= ${input}]`);
    const existingError = errorLabelElement.querySelector('.form-error');
    const errorIcon = errorLabelElement.querySelector('.error-image');

    if(existingError){
        errorLabelElement.removeChild(errorLabelElement.lastChild); 
        errorLabelElement.removeChild(errorIcon)
        sendData();
    } 

} 

function sendData(){
    const documentClean = document.querySelector('.form-error');
    if(!documentClean){
        formFieldset.classList.add('display-none');
        const message = document.createElement('p');
        message.textContent = 'Thank You. We Will Send You an Email Confirmation';
        message.classList.add('confirmation');
        form.appendChild(message);
    } else{
        return
       }

}


    





