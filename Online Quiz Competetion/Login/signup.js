
const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname');
const email_input = document.getElementById("email");
const password_input = document.getElementById("password");
const repassword_input = document.getElementById("repassword");
const errormessage = document.getElementById('error-message');
console.log('asubisb')




    
form.addEventListener('submit', (e) => {

  
    let errors = []


    if (firstname_input) {
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repassword_input.value)

    }
    else {
        errors = getLoginFormErrors(email_input.value,password_input.value);
    }
    
    if(errors.length>0)
    {
        e.preventDefault();
        errormessage.innerHTML =errors.join(". ")
    }
}
)

function getSignupFormErrors(firstname, email, password, repeatpassword)
{     
    let errors = []


    if (firstname === '' || firstname == null) {
         errors.push('firstname is required');
        firstname_input.parentElement.classList.add('incorrect')

    }

    if (email === '' || email == null) {
        errors.push('email is required');
        email_input.parentElement.classList.add('incorrect')

    }

    if (password === '' || password == null) {
        errors.push('password is required');
        password_input.parentElement.classList.add('incorrect')

    }
    
    if (repeatpassword === '' || repeatpassword == null) {
        errors.push('password is required');
        repassword_input.parentElement.classList.add('incorrect')

    }

    if(password.length<8)
    {
        errors.push('password must have more than 8 letters');
        password_input.parentElement.classList.add('incorrect')
    }
    if(password !=repeatpassword)
    {
        errors.push('password does not match repeated password')
        password_input.parentElement.classList.add('incorrect')
        repassword_input.parentElement.classList.add('incorrect')
    }
    return errors;

}
function getLoginFormErrors(email,password)
{
let errors=[]
if (email === '' || email == null) {
    errors.push('email is required');
    email_input.parentElement.classList.add('incorrect')

}

if (password === '' || password == null) {
    errors.push('password is required');
    password_input.parentElement.classList.add('incorrect')

}
return errors;

}

const allInputs= [firstname_input,email_input,password_input,repassword_input].filter(input=>input !=null)
allInputs.forEach(input=>{
    input.addEventListener('input',()=>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            errormessage.innerHTML=''
        }   
    })
    
})



