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
function ValidaateEmail(email){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
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
    var userBirth = document.getElementById("Date of birth");
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
    var errorsMessage = [];
    var signupErrors = {
        userName:"Invalid Email",
        lastName:"Invalid password",
        dni:"Invalid dni",
        date:"Invalid date of birth",
        phone:"Invalid phone number",
        adress:"Invalid adress",
        location:"Invalid location",
        zipCode:"Invalid zip code",
        email:"Invalid email",
        password:"Invalid password",
        secondPassword: "Invalid repeat password"
    }
    userName.onblur = function (){
        if(!ValidateName(userName.value) && userName.value !== ''){
            InputWarining(userName,true);
            errorsMessage.push(signupErrors.name);
        }
    }
    userName.onfocus = function (){
        if(!ValidateName(userName.value) && userName.value !== ''){
            InputWarining(userName,false);
            removeError(signupErrors.name);
        }
    }
    userLastname.onblur = function (){
        if(!ValidateName(userLastname.value) && userLastname.value !== ''){
            InputWarining(userLastname,true);
            errorsMessage.push(signupErrors.lastName);
        }
    }
    userLastname.onfocus = function (){
        if(!ValidateName(userLastname.value) && userLastname.value !== ''){
            InputWarining(userLastname,false);
            removeError(signupErrors.lastName);
        }
    }
    userDni.onblur = function (){
        if(!ValidateDni(userDni.value) && userDni.value !== ''){
            InputWarining(userDni,true);
            errorsMessage.push(signupErrors.dni);
        }
    }
    userDni.onfocus = function (){
        if(!ValidateDni(userDni.value) && userDni.value !== ''){
            InputWarining(userDni,false);
            removeError(signupErrors.dni);
        }
    }
    userBirth.onblur = function (){
        if(userBirth.value === ''){
            InputWarining(userBirth,true);
            errorsMessage.push(signupErrors.userBirth);
        }
    }
    userBirth.onfocus = function (){
        console.log(userBirth.value);
        if(userBirth.value !== null){
            InputWarining(userBirth,false);
            removeError(signupErrors.userBirth);
        }
    }
    userPhone.onblur = function (){
        if(!ValidatePhone(userPhone.value) && userPhone.value !== ''){
            InputWarining(userPhone,true);
            errorsMessage.push(signupErrors.userPhone);
        }
    }
    userPhone.onfocus = function (){
        if(!ValidatePhone(userPhone.value) && userPhone.value !== ''){
            InputWarining(userPhone,false);
            removeError(signupErrors.phone);
        }
    }
    userAdress.onblur = function (){
        if(!ValidateAdress(userAdress.value) && userAdress.value !== ''){
            InputWarining(userAdress,true);
            errorsMessage.push(signupErrors.adress);
        }
    }
    userAdress.onfocus = function (){
        if(!ValidateAdress(userPhone.value) && userAdress.value !== ''){
            InputWarining(userAdress,false);
            removeError(signupErrors.adress);
        }
    }
    userLocation.onblur = function (){
        if(!ValidateLocation(userLocation.value) && userLocation.value !== ''){
            InputWarining(userLocation,true);
            errorsMessage.push(signupErrors.location);
        }
    }
    userLocation.onfocus = function (){
        if(!ValidateLocation(userLocation.value) && userLocation.value !== ''){
            InputWarining(userLocation,false);
            removeError(signupErrors.location);
        }
    }
    userZipcode.onblur = function (){
        if(!ValidateZipcode(userZipcode.value) && userZipcode.value !== ''){
            InputWarining(userZipcode,true);
            errorsMessage.push(signupErrors.zipCode);
        }
    }
    userZipcode.onfocus = function (){
        if(!ValidateZipcode(userZipcode.value) && userZipcode.value !== ''){
            InputWarining(userZipcode,false);
            removeError(signupErrors.zipCode);
        }
    }
    userEmail.onblur = function (){
        if (!ValidaateEmail(userEmail.value) && userEmail.value !== ''){
            InputWarining(userEmail,true);
            errorsMessage.push(signupErrors.email);
        }
    }
    userEmail.onfocus = function (){
        if (!ValidaateEmail(userEmail.value) && userEmail.value !== ''){
            InputWarining(userEmail,false);
            removeError(signupErrors.email);
        }
    }
    userPassword.onblur = function (){
        if (!ValidatePassword(userPassword.value) && userPassword.value !== ''){
            InputWarining(userPassword,true);
            errorsMessage.push(signupErrors.password);
        }else{
            firstPassword = userPassword.value;
        }
    }
    userPassword.onfocus = function (){
        if (userPassword.value !== '' && !ValidatePassword(userPassword.value)){
            InputWarining(userPassword,false);
            removeError(signupErrors.password);
        }
    }
    userSecondpassword.onblur = function (){
        if (!ValidatePassword(userSecondpassword.value) && userSecondpassword.value !== ''){
            InputWarining(userSecondpassword,true);
            errorsMessage.push(signupErrors.secondPassword);
        }
        if(userSecondpassword.value !== ''){
            secondPassword = userSecondpassword.value;
            if (firstPassword !== '' && firstPassword!== secondPassword){
                errorsMessage.push(signupErrors.secondPassword);
                InputWarining(userSecondpassword,true);
            }
        }
    } 
    userSecondpassword.onfocus = function (){
        if (userSecondpassword.value !== '' && !ValidatePassword(userSecondpassword.value) || firstPassword !== secondPassword){
            InputWarining(userSecondpassword,false);
            removeError(signupErrors.secondPassword);
        }
    }
    createButton.onclick = function (e){
        e.preventDefault();
        if(ValidateName(userName.value) && ValidateName(userLastname.value) && ValidateDni(userDni.value) && 
        ValidatePhone(userPhone.value) && ValidateAdress(userAdress.value) && ValidateLocation(userLocation.value)
        && ValidateZipcode(userZipcode.value) && ValidaateEmail(userEmail.value) && ValidatePassword(userPassword.value)
        && ValidatePassword(userSecondpassword.value) && (userBirth.value !== null)){
        alert("Form loaded correctly, your data is: " + "Name: " + userName.value+ " Last Name: " + userLastname.value
        + " DNI: " + userDni.value + " Date of birth: " + userBirth.value + " Phone: " + userPhone.value + " Adress: " + userAdress.value
        + " Location: " + userLocation.value + " Zip code: " + userZipcode.value + " Email:" + userEmail.value
        + " Password: " + userPassword.value + " Repeat password: " + userSecondpassword.value);
        }else{
            if(errorsMessage.length === 0){
                alert("All from are empty");
            }else{
                alert("Form loaded incorrectly, the errors are: " + errorsMessage.join(" - "));
            }    
        }
    }
function removeError(item) {
        for(var i = errorsMessage.length; i--;) {
            if(errorsMessage[i] === item) {
                errorsMessage.splice(i, 1);
            }
        }
    }
}   

