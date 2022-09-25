function hasNumber(word){
    for (let index = 0; index < word.length; index++){
        if(!isNaN(word[index])){
            return true;
        }
    }
    return false;
}
function hasLetter(word){
    for (let index = 0; index < word.length; index++){
            if(isNaN(word[index])){
            return true;
        }
    }
        return false;
}
function LetterCounter(word,number){
    if(word.length >= number){
        return true;
    }else{
        return false;
    }
}
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
function checkEmail (correo){
    if (emailExpression.test(correo)){
        return true;   
    }else{
        return false;       
    }
}
function checkPassword(password){
    if(LetterCounter(password,8) && hasNumber(password) && hasLetter(password)){
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
