var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
function checkEmail (correo){
    if (emailExpression.test(correo)){
        return true;   
    }else{
        return false;       
    }
}
var myregex = /^(?=.*\d)(?=.*[a-z]).{8,}$/; 
function checkPassword(password){
    //var text = "" + password;
    //console.log(text.length);
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
    var loginButton = document.getElementById("loginButton");
    var userAccount = document.getElementById("userAccount");
    
    userEmail.onblur = function (){
        if (!checkEmail(userEmail.value) && userEmail.value !== ''){
            CreateWarning(userEmail);
            InputWarining(userEmail);
        }
    }
    userEmail.onfocus = function (){
        if (!checkEmail(userEmail.value)){
            DeleteWarning();
            CancelInputWarning(userEmail);
        }
    }
    //**************------------------------*******/
    userPassword.onblur = function (){
        if (!checkPassword(userPassword.value) && userPassword.value !== ''){
            CreateWarning(userPassword);
            InputWarining(userPassword);
        }
    }
    userPassword.onfocus = function (){
        if (userPassword.value !== '' &&!checkPassword(userPassword.value)){
           
                CancelInputWarning(userPassword);
                DeleteWarning();
                  
        }
    }
    loginButton.onclick = function (e){
        e.preventDefault();
        if(!checkEmail(userEmail.value) && userEmail.value !== '' ){
            InputWarining(userEmail);
            CreateWarning(userEmail);
            alert("Wrong Email");
        }
        if (!checkPassword(userPassword.value) && userPassword.value !== ''){
            InputWarining(userPassword);
            CreateWarning(userPassword);
            alert("Wrong Password");
        }
        if (checkEmail(userEmail.value) && checkPassword(userPassword.value)){
          alert("Email: " + userEmail.value + " Contraseña: " + userPassword.value);
        }
    }

    
    function CreateWarning(inputName){   

        var elementNameExists = document.getElementById("warningBox");
        var warningDiv = document.createElement("div");
        var warningText = document.createElement("h2");
        warningText.innerHTML = "Wrong " + inputName.id;
        warningDiv.appendChild(warningText);
        warningDiv.setAttribute("id","warningBox");
        warningDiv.classList.add("text-error");

        if (!elementNameExists){
            userAccount.prepend(warningDiv);
        }else if (elementNameExists) {
            var selector = document.querySelector("#warningBox > h2");
            selector.textContent = warningText.innerHTML;
         }
    }
    function DeleteWarning(){
        var elementNameExists = document.getElementById("warningBox");
        if (elementNameExists){
            elementNameExists.remove();
        }else{
            //No hay nada
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
