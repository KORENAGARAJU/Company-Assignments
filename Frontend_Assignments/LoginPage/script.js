//selected the container and password fields
const container = document.getElementsByClassName('container') ;
const passwordHide = document.querySelectorAll('.hide-eye') ;
const passWordInputs = document.querySelectorAll('.password') ;

//code to view password and change the icon to un-hide-----------
passwordHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener('click' , ()=>{
        passWordInputs.forEach((tooglePassword=>{
            if(tooglePassword.type === 'password'){
                tooglePassword.type = 'text' ;
                passwordHide.forEach(icon =>{
                    icon.classList.replace('uil-eye-slash','uil-eye') ;
                }) ;
            }
            else{
                tooglePassword.type = 'password' ;
                passwordHide.forEach(icon =>{
                    icon.classList.replace('uil-eye','uil-eye-slash') ;
                }) ;
            }
        })) ;
    }) ;
}) ;

//change icon for login page to visible password
const loginHideIcon = document.querySelector('.hide-eye-login') ;
const loginPassInput = document.querySelector('.login-password') ;
loginHideIcon.addEventListener('click',()=>{
    if(loginPassInput.type === 'password'){
        loginPassInput.type = 'text' ;
        loginHideIcon.classList.replace('uil-eye-slash','uil-eye') ;
    }
    else{
        loginPassInput.type = 'password' ;
        loginHideIcon.classList.replace('uil-eye','uil-eye-slash') ;
    }
})

// form vadilitation for Registration page 
const errorUserName = document.querySelector('.reg-name') ;
const errorPass = document.querySelector('.reg-password') ;
const errorEmail = document.querySelector('.reg-email') ;

const submitBtn = document.querySelector('.SignupBtn')
submitBtn.addEventListener('click',(e)=>{
     e.preventDefault() ;
    //checking for user name 
    if(reg_userName.value === ''){
        const errorName = 'Name is required'
        errorUserName.textContent = errorName ;
        reg_userName.style.borderBottomColor = 'red'
    }
    else{
        errorUserName.textContent = '' ;
        reg_userName.style.borderBottomColor = 'green'
    }
    //checking for email 
    if(regEmail.value === ''){
        const  errorEmailName = 'Email is requried'
        errorEmail.textContent = errorEmailName ;
        regEmail.style.borderBottomColor = 'red'
    }
    else{
        errorEmail.textContent = '' ;
        regEmail.style.borderBottomColor = 'green'
    }

    //checking for password to contains more than 8 character
    if(regPassword.value === ''){
        const errorPassName = 'Password is required' ;
        errorPass.textContent = errorPassName ;
        regPassword.style.borderBottomColor = 'red'
    }
    else if(regPassword.value.length < 8){
        errorPass.textContent = 'Required more than 8 characters' ;
        regPassword.style.borderBottomColor = 'red'
    }
    else{
        errorPass.textContent = '' ;
        regPassword.style.borderBottomColor = 'green'
    }
})



//checking for login vadilation
const reg_userName = document.getElementById('reg-name-id') ;
const regEmail = document.getElementById('reg-email-id') ;
const regPassword = document.getElementById('reg-pass-id') ;
//------------------
//form valid 
const loginEmail = document.querySelector('.login-email') ;
const errorEmailLogin = document.querySelector('.login-email-error') ;
const loginPassword = document.querySelector('.login-password') ;
const errorLoginPassword = document.querySelector('.login-Errpassword')
const loginBtn = document.querySelector('.loginBtn') ;
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault() ;
    if(loginEmail.value === ''){
        const  errorEmailName = 'Email/UserName is requried'
        errorEmailLogin.textContent = errorEmailName ;
        loginEmail.style.borderBottomColor = 'red'
    }
    else{
        errorEmailLogin.textContent = '' ;
        loginEmail.style.borderBottomColor = 'green'
    }

    //checking for password to contains more than 8 character
    if(loginPassword.value === ''){
        const errorPassName = 'Password is required' ;
        errorLoginPassword.textContent = errorPassName ;
        loginPassword.style.borderBottomColor = 'red'
    }
    else if(loginPassword.value.length < 8){
        errorLoginPassword.textContent = 'Required more than 8 characters' ;
        loginPassword.style.borderBottomColor = 'red'
    }
    else{
        errorLoginPassword.textContent = '' ;
        loginPassword.style.borderBottomColor = 'green'
    }

});

