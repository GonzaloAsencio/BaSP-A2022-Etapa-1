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
function removeItem(arr, item) {
    for(var i = arr.length; i--;) {
        if(arr[i] === item) {
            arr.splice(i, 1);
        }
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
window.onload = function () {
    var userEmail = document.getElementById("userEmail");
    var userName = document.getElementById("userName");
    var userContactarea = document.getElementById("contactArea");
    var userMessage = document.getElementById("Message");
    var sendButton = document.getElementById("sendButton");
    var userAccount = document.getElementById("userAccount");
    var errorsMessaage = [];
    var loginErrors = {
        email:'Invalid Email',
        name:'Invalid Name',
        contatArea: 'Invalid contact area',
        message: 'Invalid Message'
    }
    userEmail.onblur = function (){
        if (!checkEmail(userEmail.value) && userEmail.value !== ''){
            CreateWarning(userEmail);
            InputWarining(userEmail);
            errorsMessaage.push(loginErrors.email);
        }
    }
    userEmail.onfocus = function (){
        if (!checkEmail(userEmail.value) && userEmail.value !== ''){
            removeItem(errorsMessaage,loginErrors.email);
            DeleteWarning();
            CancelInputWarning(userEmail);
        }
    }
    userName.onblur = function (){
        if (!LetterCounter(userName.value,3) || hasNumber(userName.value) ){
            CreateWarning(userName);
            InputWarining(userName);
            errorsMessaage.push(loginErrors.name);   
        }
    }
    userName.onfocus = function (){
        if (userName.value !== '' || !LetterCounter(userName.value,3) || hasNumber(userName.value)){
            removeItem(errorsMessaage,loginErrors.name);
            CancelInputWarning(userName);
            DeleteWarning();
        }
    }
    userMessage.onblur = function (){
        if (userMessage.value !== '' && !LetterCounter(userMessage.value,3)){
            CreateWarning(userMessage);
            InputWarining(userMessage);
            errorsMessaage.push(loginErrors.message);   
        }
    }
    userMessage.onfocus = function (){
        if (userMessage.value !== '' && !LetterCounter(userMessage.value,3)){
            removeItem(errorsMessaage,loginErrors.message);
            CancelInputWarning(userMessage);
            DeleteWarning();
        }
    }
   sendButton.onclick = function (e){
        e.preventDefault();
        if (checkEmail(userEmail.value) && LetterCounter(userName.value,3) && !hasNumber(userName.value) && LetterCounter(userMessage.value,3)){
          alert("Form loaded correctly, your data is: " + "Email: " + userEmail.value + " Name: " + userName.value
          +" Message: " + userMessage.value);
        }else {
            if(errorsMessaage.length === 0){
                alert("There are empty spaces in the forms");
            }else
            alert("Form loaded incorrectly, the errors are:" + errorsMessaage.join('-'));
        }
    }
    function CreateWarning(inputName){   
        var elementNameExists = document.getElementById("warningBox");
        var warningDiv = document.createElement("div");
        var warningText = document.createElement("h2");
        warningText.innerHTML = "Wrong";
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
