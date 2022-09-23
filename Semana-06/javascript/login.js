var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
function checkEmail (correo){
    if (expReg.test(correo)){
       // alert("La dirección de email " + correo + " es correcta.");
        return true;   
    } else {
      //  alert("La dirección de email es incorrecta.");
        return false;   
        
    }
}
var myregex = /^(?=.*\d)(?=.*[a-z]).{8,}$/; 
function checkPassword(password){
   // var myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;  MAYUSCULAS INCLUIDAS
    if(myregex.test(password)){
       return true;        
   }else{
       return false;        
   }   
 }
 

window.onload = function () {
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var button = document.getElementById("loginButton");
    var userAccount = document.getElementById("userAccount");
   
    var passworDiv = document.createElement("div");
    var userDiv = document.createElement("div");
    var passwordText = document.createElement("h2");
    var emailText = document.createElement("h2");
    passwordText.innerHTML = "Wrong Password";
    emailText.innerHTML = "Wrong Email";
    passwordText.classList.add("text-error");
    emailText.classList.add("text-error");
    passworDiv.prepend(passwordText);
    userDiv.prepend(emailText);

  
    userEmail.onblur = function (){
        if (!checkEmail(userEmail.value) && userEmail.value !== ''){
            userAccount.prepend(userDiv);
            InputWarining(userEmail);
        }
    }
    userEmail.onfocus = function (){
        if (!checkEmail(userEmail.value)){
            userDiv.remove();
            CancelInputWarning(userEmail);
        }
    }

    //**************------------------------*******/
    userPassword.onblur = function (){
        if (!checkPassword(userPassword.value) && userPassword.value !== ''){
            userAccount.prepend(passworDiv);
           InputWarining(userPassword);
        }
    }

   userPassword.onfocus = function (){
        if (!checkPassword(userPassword.value)){
                passworDiv.remove();
                CancelInputWarning(userPassword);
            }
    }

   //TENGO QUE  HACER ESTO EN UN BLUR Y NO EN UN ONCLIKC
   //Button Value
    button.onclick = function (e){
        e.preventDefault();
        if(!checkEmail(userEmail.value)){
            InputWarining(userEmail);
            userAccount.prepend(userDiv);
            alert("Wrong Email");
        }
        if (!checkPassword(userPassword.value)){
            InputWarining(userPassword);
            userAccount.prepend(passworDiv);
            alert("Wrong Password");
        }
        if (checkEmail(userEmail.value) && checkPassword(userPassword.value)){
          alert("Email: " + userEmail.value + " Contraseña: " + userPassword.value );
        }
    }

    function InputWarining(input){
        input.classList.add("text-error");
        input.classList.add("border-error");
     }
     function CancelInputWarning(input){
        input.value = '';
        input.classList.remove("border-error");
        input.classList.remove("text-error");
     }
}
