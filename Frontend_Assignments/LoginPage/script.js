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

//to render login and sign-up page 
let login = true ;

