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
function letterCounter(word,number){
    if(word.length >= number){
        return true;
    }else{
        return false;
    }
}
function validateName(name){
    if(letterCounter(name,3) && hasLetter(name) && !hasNumber(name)){
     return true;
    }
    return false;
}
function validateDni(dni){
    if(dni.length <= 8  && !hasLetter(dni) && hasNumber(dni)){
        return true;
    }else{
        return false;
    }
}
function validatePhone(phone){
    if(phone.length == 10 && !hasLetter(phone) && hasNumber(phone)){
        return true;
    }else{
        return false;
    }
}
function validateAddress(address){
    var letter = 0;
    var spaceOut = address.trim();
    for (let index = 0; index < spaceOut.length; index++){
        if(hasLetter(spaceOut[index])){
          letter++;
        }
    }
    if(spaceOut.includes(" ") && letter > 3 ){
      return true;
    }else{
        return false;
    }
}
function validateLocation(location){
    if(letterCounter(location,3) && hasLetter(location)) {
        return true;
    }else{
        return false;
    }
}
function validateZipcode(code){
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
function validateEmail(email){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (emailExpression.test(email)){
        return true;   
    }else{
        return false;       
    }
}
function validatePassword(password){
    if(letterCounter(password,8) && hasNumber(password) && hasLetter(password)){
       return true;        
   }else{
       return false;        
   }   
}
function createWarning(inputError){   
    var warningDiv = document.createElement("div");
    var warningText = document.createElement("h2");
    warningText.innerHTML = "Invalid " + inputError.id;
    warningDiv.appendChild(warningText);
    warningDiv.setAttribute("id","warningBox");
    warningDiv.classList.add("text-error");
    inputError.insertAdjacentElement("afterend",warningDiv);
}
function deleteWarning(input){
    var search = input.parentElement;
    var elementNameExists = search.querySelector("#warningBox");
    if (elementNameExists){
        elementNameExists.remove();
    }
}
function inputWarining(input,activate){
    if(activate){
        createWarning(input);
        input.classList.add("text-error");
        input.classList.add("border-error");
    }else{
        deleteWarning(input);
        input.value = '';
        input.classList.remove("border-error");
        input.classList.remove("text-error");
    }
}
function validateURL(url){
    var information = "";
    fetch(url)
       .then(function(res){
           return res.json();
       })
       .then(function (data){
           if(!data.success){
            var error = "";
            Object.entries(data.errors).forEach(element => {
                var [key,value] = element;
                error += value.param + ": "+ value.msg + "\n ";
            });
              throw new Error(error);
           }else{
            Object.entries(data.data).forEach(element => {
                const [key, value] = element;
                console.log(key, value);
                information += key +":"+ " " + value + "\n";  
                localStorage.setItem(key,value);
                });
                alert("Succes: " + data.success + "\n" + information + "\n" + "Request: " + data.msg);
           }
        })
       .catch(function(error){
           alert(error + "\n");
});
}
window.onload = function () {
    var userName = document.getElementById("Name");
    var userLastname = document.getElementById("Last name");
    var userDni = document.getElementById("Dni");
    var userBirth = document.getElementById("Date of birth");
    var userPhone = document.getElementById("Phone number");
    var userAddress = document.getElementById("Adress");
    var userLocation = document.getElementById("Location");
    var userZipcode = document.getElementById("Zip code");
    var userEmail = document.getElementById("Email");
    var userPassword = document.getElementById("Password");
    var userSecondpassword = document.getElementById("Repeat password");
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
        if(!validateName(userName.value) && userName.value !== ''){
            inputWarining(userName,true);
            errorsMessage.push(signupErrors.name);
        }
    }
    userName.onfocus = function (){
        if(!validateName(userName.value) && userName.value !== ''){
            inputWarining(userName,false);
            removeError(signupErrors.name);
        }
    }
    userLastname.onblur = function (){
        if(!validateName(userLastname.value) && userLastname.value !== ''){
            inputWarining(userLastname,true);
            errorsMessage.push(signupErrors.lastName);
        }
    }
    userLastname.onfocus = function (){
        if(!validateName(userLastname.value) && userLastname.value !== ''){
            inputWarining(userLastname,false);
            removeError(signupErrors.lastName);
        }
    }
    userDni.onblur = function (){
        if(!validateDni(userDni.value) && userDni.value !== ''){
            inputWarining(userDni,true);
            errorsMessage.push(signupErrors.dni);
        }
    }
    userDni.onfocus = function (){
        if(!validateDni(userDni.value) && userDni.value !== ''){
            inputWarining(userDni,false);
            removeError(signupErrors.dni);
        }
    }
    userBirth.onblur = function (){
        if(userBirth.value === ''){
            inputWarining(userBirth,true);
            errorsMessage.push(signupErrors.userBirth);
        }
    }
    userBirth.onfocus = function (){
        if(userBirth.value !== null){
            inputWarining(userBirth,false);
            removeError(signupErrors.userBirth);
        }
    }
    userPhone.onblur = function (){
        if(!validatePhone(userPhone.value) && userPhone.value !== ''){
            inputWarining(userPhone,true);
            errorsMessage.push(signupErrors.userPhone);
        }
    }
    userPhone.onfocus = function (){
        if(!validatePhone(userPhone.value) && userPhone.value !== ''){
            inputWarining(userPhone,false);
            removeError(signupErrors.phone);
        }
    }
    userAddress.onblur = function (){
        if(!validateAddress(userAddress.value) && userAddress.value !== ''){
            inputWarining(userAddress,true);
            errorsMessage.push(signupErrors.adress);
        }
    }
    userAddress.onfocus = function (){
        if(!validateAddress(userPhone.value) && userAddress.value !== ''){
            inputWarining(userAddress,false);
            removeError(signupErrors.adress);
        }
    }
    userLocation.onblur = function (){
        if(!validateLocation(userLocation.value) && userLocation.value !== ''){
            inputWarining(userLocation,true);
            errorsMessage.push(signupErrors.location);
        }
    }
    userLocation.onfocus = function (){
        if(!validateLocation(userLocation.value) && userLocation.value !== ''){
            inputWarining(userLocation,false);
            removeError(signupErrors.location);
        }
    }
    userZipcode.onblur = function (){
        if(!validateZipcode(userZipcode.value) && userZipcode.value !== ''){
            inputWarining(userZipcode,true);
            errorsMessage.push(signupErrors.zipCode);
        }
    }
    userZipcode.onfocus = function (){
        if(!validateZipcode(userZipcode.value) && userZipcode.value !== ''){
            inputWarining(userZipcode,false);
            removeError(signupErrors.zipCode);
        }
    }
    userEmail.onblur = function (){
        if (!validateEmail(userEmail.value) && userEmail.value !== ''){
            inputWarining(userEmail,true);
            errorsMessage.push(signupErrors.email);
        }
    }
    userEmail.onfocus = function (){
        if (!validateEmail(userEmail.value) && userEmail.value !== ''){
            inputWarining(userEmail,false);
            removeError(signupErrors.email);
        }
    }
    userPassword.onblur = function (){
        if (!validatePassword(userPassword.value) && userPassword.value !== ''){
            inputWarining(userPassword,true);
            errorsMessage.push(signupErrors.password);
        }else{
            firstPassword = userPassword.value;
        }
    }
    userPassword.onfocus = function (){
        if (userPassword.value !== '' && !validatePassword(userPassword.value)){
            inputWarining(userPassword,false);
            removeError(signupErrors.password);
        }
    }
    userSecondpassword.onblur = function (){
        if (!validatePassword(userSecondpassword.value) && userSecondpassword.value !== ''){
            inputWarining(userSecondpassword,true);
            errorsMessage.push(signupErrors.secondPassword);
        }
        if(userSecondpassword.value !== ''){
            secondPassword = userSecondpassword.value;
            if (firstPassword !== '' && firstPassword!== secondPassword){
                errorsMessage.push(signupErrors.secondPassword);
                inputWarining(userSecondpassword,true);
            }
        }
    } 
    userSecondpassword.onfocus = function (){
        if (userSecondpassword.value !== '' && !validatePassword(userSecondpassword.value) || firstPassword !== secondPassword){
            inputWarining(userSecondpassword,false);
            removeError(signupErrors.secondPassword);
        }
    }
    createButton.onclick = function (e){
        e.preventDefault();
         var name = "gonza14";
        var lastName = "Asencio4418";
        var dni = "12345678";
        var dob =  dateFormat(userBirth.value);
        var phone = "0123456789";
        var address = "asds 1666";
        var location = "rosario";
        var zip = "20001";
        var email ="rose@radiumrocket.com";
        var password = "BaSP2022";
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + name+ '&lastName=' + lastName
        +'&dni=' + dni + '&dob=' + dob + '&phone='+ phone +'&address=' +address +'&city=' + location
        + '&zip='+ zip + '&email=' + email + '&password=' +password;
        validateURL(url);
        if(validateName(userName.value) && validateName(userLastname.value) && validateDni(userDni.value) && 
        validatePhone(userPhone.value) && validateAddress(userAddress.value) && validateLocation(userLocation.value)
        && validateZipcode(userZipcode.value) && validateEmail(userEmail.value) && validatePassword(userPassword.value)
        && validatePassword(userSecondpassword.value) && (userBirth.value !== null)){
        /*  var dob =  dateFormat(userBirth.value);
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + userName.value + '&lastName=' + userLastname.value
            + '&dni=' + userDni.value + '&dob=' + dob + '&phone='+ userPhone.value +'&address=' + userAddress.value +'&city=' + userLocation.value
            + '&zip='+ userZipcode.value + '&email=' + userEmail.value + '&password=' + userPassword.value;
            validateURL(url);*/
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
function dateFormat(dates){
    var [year,month,day] = dates.split('-');
    var birthChange = [month,day,year].join('/');
    return birthChange;
}   
}   

