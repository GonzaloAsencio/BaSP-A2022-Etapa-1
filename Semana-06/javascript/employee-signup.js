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
function ValidateName(name){
    if(LetterCounter(name,3) && hasLetter(name) && !hasNumber(name)){
     return true;
    }
    return false;
}
function ValidateDni(dni){
    if(LetterCounter(dni,7) && !hasLetter(dni) && hasNumber(dni)){
        return true;
    }else{
        return false;
    }
}
function ValidatePhone(phone){
    if(phone.length == 10 && !hasLetter(phone) && hasNumber(phone)){
        return true;
    }else{
        return false;
    }
}
function ValidateAdress(adress){
    var direction = adress.substring(0,adress.indexOf(" "));
    var numbers = adress.substring(adress.length - adress.indexOf(" "));
    if(!hasNumber(direction) && direction.length >=5 && hasNumber(numbers)){
      return true;
    }else{
        return false;
    }
}
function ValidateLocation(location){
    if(LetterCounter(location,3) && !hasNumber(location) && hasLetter(location)){
        return true;
    }else{
        return false;
    }
}
function ValidateZipcode(code){
    if(!hasLetter(code) && hasNumber(code)){
        if(code.length >=4 && code.length <= 5){
            return true;
        }else {
            return false;
        }
    }else{
        return false;
    }
}
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
function ValidaateEmail(email){
    if (emailExpression.test(email)){
        return true;   
    }else{
        return false;       
    }
}
function ValidatePassword(password){
    if(LetterCounter(password,8) && hasNumber(password) && hasLetter(password)){
       return true;        
   }else{
       return false;        
   }   
}
function CreateWarning(inputError){   
    var elementName = document.getElementById("warningBox");
    var warningDiv = document.createElement("div");
    var warningText = document.createElement("h2");
    warningText.innerHTML = "Wrong " + inputError.id;
    warningDiv.appendChild(warningText);
    warningDiv.setAttribute("id","warningBox");
    warningDiv.classList.add("text-error");
    if (!elementName){
        userAccount.prepend(warningDiv);
    }else if (elementName){
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
function InputWarining(input,activate){
    if(activate){
        CreateWarning(input);
        input.classList.add("text-error");
        input.classList.add("border-error");
    }else{
        DeleteWarning();
        input.value = '';
        input.classList.remove("border-error");
        input.classList.remove("text-error");
    }
}
window.onload = function () {
    var userName = document.getElementById("Name");
    var userLastname = document.getElementById("Last name");
    var userDni = document.getElementById("Dni");
    var userPhone = document.getElementById("Phone number");
    var userAdress = document.getElementById("Adress");
    var userLocation = document.getElementById("City");
    var userZipcode = document.getElementById("Zip code");
    var userEmail = document.getElementById("Email");
    var userPassword = document.getElementById("Password");
    var userSecondpassword = document.getElementById("Repeat password");
    var userAccount = document.getElementById("userAccount");
    var createButton = document.getElementById("createButton");
    var firstPassword;
    var secondPassword;

    userName.onblur = function (){
        if(!ValidateName(userName.value) && userName.value !== ''){
            InputWarining(userName,true);
        }
    }
    userName.onfocus = function (){
        if(!ValidateName(userName.value) && userName.value !== ''){
            InputWarining(userName,false);
        }
    }
    userLastname.onblur = function (){
        if(!ValidateName(userLastname.value) && userLastname.value !== ''){
            InputWarining(userLastname,true);
        }
    }
    userLastname.onfocus = function (){
        if(!ValidateName(userLastname.value) && userLastname.value !== ''){
            InputWarining(userLastname,false);
        }
    }
    userDni.onblur = function (){
        if(!ValidateDni(userDni.value) && userDni.value !== ''){
            InputWarining(userDni,true);
        }
    }
    userDni.onfocus = function (){
        if(!ValidateDni(userDni.value) && userDni.value !== ''){
            InputWarining(userDni,false);
        }
    }
    userPhone.onblur = function (){
        if(!ValidatePhone(userPhone.value) && userPhone.value !== ''){
            InputWarining(userPhone,true);
        }
    }
    userPhone.onfocus = function (){
        if(!ValidatePhone(userPhone.value) && userPhone.value !== ''){
            InputWarining(userPhone,false);
        }
    }
    userAdress.onblur = function (){
        if(!ValidateAdress(userAdress.value) && userAdress.value !== ''){
            InputWarining(userAdress,true);
        }
    }
    userAdress.onfocus = function (){
        if(!ValidateAdress(userPhone.value) && userAdress.value !== ''){
            InputWarining(userAdress,false);
        }
    }
    userLocation.onblur = function (){
        if(!ValidateLocation(userLocation.value) && userLocation.value !== ''){
            InputWarining(userLocation,true);
        }
    }
    userLocation.onfocus = function (){
        if(!ValidateLocation(userLocation.value) && userLocation.value !== ''){
            InputWarining(userLocation,false);
        }
    }
    userZipcode.onblur = function (){
        if(!ValidateZipcode(userZipcode.value) && userZipcode.value !== ''){
            InputWarining(userZipcode,true);
        }
    }
    userZipcode.onfocus = function (){
        if(!ValidateZipcode(userZipcode.value) && userZipcode.value !== ''){
            InputWarining(userZipcode,false);
        }
    }
    userEmail.onblur = function (){
        if (!ValidaateEmail(userEmail.value) && userEmail.value !== ''){
            InputWarining(userEmail,true);
        }
    }
    userEmail.onfocus = function (){
        if (!ValidaateEmail(userEmail.value) && userEmail.value !== ''){
            InputWarining(userEmail,false);
        }
    }
    userPassword.onblur = function (){
        if (!ValidatePassword(userPassword.value) && userPassword.value !== ''){
            InputWarining(userPassword,true);
        }else{
                firstPassword = userPassword.value;
        }
    }
    userPassword.onfocus = function (){
        if (userPassword.value !== '' && !ValidatePassword(userPassword.value)){
            InputWarining(userPassword,false);
        }
    }
    userSecondpassword.onblur = function (){
        if (!ValidatePassword(userSecondpassword.value) && userSecondpassword.value !== ''){
            InputWarining(userSecondpassword,true);
        }
        if(userSecondpassword.value !== ''){
            secondPassword = userSecondpassword.value;
            if (firstPassword !== '' && firstPassword!== secondPassword){
                InputWarining(userSecondpassword,true);
            }
        }
    } 
    userSecondpassword.onfocus = function (){
        if (userSecondpassword.value !== '' && !ValidatePassword(userSecondpassword.value) || firstPassword !== secondPassword){
            InputWarining(userSecondpassword,false);
        }
    }
    createButton.onclick = function (e){
        e.preventDefault();
        //???
    }
}   

