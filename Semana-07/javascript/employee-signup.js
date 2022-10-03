function hasNumber(word) {
    for (let index = 0; index < word.length; index++){
        if(!isNaN(word[index])){
            return true;
        }
    }
    return false;
}

function hasLetter(word) {
    for (let index = 0; index < word.length; index++){
            if(isNaN(word[index])){
            return true;
        }
    }
        return false;
}

function letterCounter(word,number) {
    if(word.length >= number){
        return true;
    }else{
        return false;
    }
}

function validateName(name) {
    if(letterCounter(name,3) && hasLetter(name) && !hasNumber(name)){
     return true;
    }
    return false;
}

function validateDni(dni) {
    if(dni.length <= 8  && !hasLetter(dni) && hasNumber(dni)){
        return true;
    }else{
        return false;
    }
}

function validatePhone(phone) {
    if(phone.length == 10 && !hasLetter(phone) && hasNumber(phone)){
        return true;
    }else{
        return false;
    }
}

function validateAddress(address) {
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

function validateLocation(location) {
    if(letterCounter(location,3) && hasLetter(location)) {
        return true;
    }else{
        return false;
    }
}

function validateZipcode(code) {
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

function validateEmail(email) {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (emailExpression.test(email)){
        return true;   
    }else{
        return false;       
    }
}

function validatePassword(password) {
    if(letterCounter(password,8) && hasNumber(password) && hasLetter(password)){
       return true;        
   }else{
       return false;        
   }   
}

function createWarning(inputError) {   
    var warningDiv = document.createElement("div");
    var warningText = document.createElement("h2");
    warningText.innerHTML = "Invalid" + " " + inputError.id;
    warningDiv.appendChild(warningText);
    warningDiv.setAttribute("id","warningBox");
    warningDiv.classList.add("text-error");
    inputError.insertAdjacentElement("afterend",warningDiv);
}

function deleteWarning(input) {
    var search = input.parentElement;
    var elementNameExists = search.querySelector("#warningBox");
    if (elementNameExists){
        elementNameExists.remove();
    }
}

function inputWarining(input,activate) {
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

function validateURL(url) {
    var information = "";
    fetch(url)
       .then(function(res){
           return res.json();
       })
       .then(function (data){
           if(!data.success){
            Object.entries(data.errors).forEach(element => {
                var [key,value] = element;
                information +=value.msg + "\n ";
            });
              throw new Error(information);
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
           alert("Form loaded incorrectly, the errors are: "+ "\n" + error + "\n");
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

    userName.value= localStorage.getItem("name");
    userLastname.value= localStorage.getItem("lastName");
    userDni.value = localStorage.getItem("dni");
    var test= localStorage.getItem("dob");
    var test2 = inputFormat(test);
    userBirth.value = test2;
    userPhone.value = localStorage.getItem("phone");
    userAddress.value = localStorage.getItem("address");
    userLocation.value = localStorage.getItem("city");
    userZipcode.value = localStorage.getItem("zip");
    userEmail.value = localStorage.getItem("email");
    userPassword.value = localStorage.getItem("password");
    userSecondpassword.value =localStorage.getItem("password");

    userName.onblur = function () {
        if(!validateName(userName.value) && userName.value !== ''){
            inputWarining(userName,true);
        }
    }

    userName.onfocus = function () {
        if(!validateName(userName.value) && userName.value !== ''){
            inputWarining(userName,false);
        }
    }

    userLastname.onblur = function () {
        if(!validateName(userLastname.value) && userLastname.value !== ''){
            inputWarining(userLastname,true);
        }
    }

    userLastname.onfocus = function () {
        if(!validateName(userLastname.value) && userLastname.value !== ''){
            inputWarining(userLastname,false);
        }
    }

    userDni.onblur = function () {
        if(!validateDni(userDni.value) && userDni.value !== ''){
            inputWarining(userDni,true);
        }
    }

    userDni.onfocus = function () {
        if(!validateDni(userDni.value) && userDni.value !== ''){
            inputWarining(userDni,false);
        }
    }

    userBirth.onblur = function () {
        if(userBirth.value === ''){
            inputWarining(userBirth,true);
        }
    }

    userBirth.onfocus = function () {
        if(userBirth.value !== null){
            inputWarining(userBirth,false);
        }
    }

    userPhone.onblur = function () {
        if(!validatePhone(userPhone.value) && userPhone.value !== ''){
            inputWarining(userPhone,true);
        }
    }

    userPhone.onfocus = function () {
        if(!validatePhone(userPhone.value) && userPhone.value !== ''){
            inputWarining(userPhone,false);
        }
    }

    userAddress.onblur = function () {
        if(!validateAddress(userAddress.value) && userAddress.value !== ''){
            inputWarining(userAddress,true);
        }
    }

    userAddress.onfocus = function () {
        if(!validateAddress(userPhone.value) && userAddress.value !== ''){
            inputWarining(userAddress,false);
        }
    }

    userLocation.onblur = function () {
        if(!validateLocation(userLocation.value) && userLocation.value !== ''){
            inputWarining(userLocation,true);
        }
    }

    userLocation.onfocus = function () {
        if(!validateLocation(userLocation.value) && userLocation.value !== ''){
            inputWarining(userLocation,false);
        }
    }

    userZipcode.onblur = function () {
        if(!validateZipcode(userZipcode.value) && userZipcode.value !== ''){
            inputWarining(userZipcode,true);
        }
    }

    userZipcode.onfocus = function () {
        if(!validateZipcode(userZipcode.value) && userZipcode.value !== ''){
            inputWarining(userZipcode,false);
        }
    }

    userEmail.onblur = function () {
        if (!validateEmail(userEmail.value) && userEmail.value !== ''){
            inputWarining(userEmail,true);
        }
    }

    userEmail.onfocus = function () {
        if (!validateEmail(userEmail.value) && userEmail.value !== ''){
            inputWarining(userEmail,false);
        }
    }

    userPassword.onblur = function () {
        if (!validatePassword(userPassword.value) && userPassword.value !== ''){
            inputWarining(userPassword,true);
        }else{
            firstPassword = userPassword.value;
        }
    }

    userPassword.onfocus = function () {
        if (userPassword.value !== '' && !validatePassword(userPassword.value)){
            inputWarining(userPassword,false);
        }
    }

    userSecondpassword.onblur = function () {
        if (!validatePassword(userSecondpassword.value) && userSecondpassword.value !== ''){
            inputWarining(userSecondpassword,true);
        }
        if(userSecondpassword.value !== ''){
            secondPassword = userSecondpassword.value;
            if (firstPassword !== '' && firstPassword!== secondPassword){
                inputWarining(userSecondpassword,true);
            }
        }
    } 

    userSecondpassword.onfocus = function () {
        if (userSecondpassword.value !== '' && !validatePassword(userSecondpassword.value) || firstPassword !== secondPassword){
            inputWarining(userSecondpassword,false);
            removeError(signupErrors.secondPassword);
        }
    }

    createButton.onclick = function (e){
        e.preventDefault();
        var dob =  dateFormat(userBirth.value);
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + userName.value + '&lastName=' + userLastname.value
        + '&dni=' + userDni.value + '&dob=' + dob + '&phone='+ userPhone.value +'&address=' + userAddress.value +'&city=' + userLocation.value
        + '&zip='+ userZipcode.value + '&email=' + userEmail.value + '&password=' + userPassword.value;
        validateURL(url);
        }
        
    function dateFormat(date){
        var [year,month,day] = date.split('-');
        var birthChange = [month,day,year].join('/');
        return birthChange;
    }

    function inputFormat(date){
        var [month,day,year] = date.split('/');
        var birthChange = [year,month,day].join('-');
        return birthChange;
    }
       
}   

