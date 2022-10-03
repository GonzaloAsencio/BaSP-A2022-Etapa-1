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
function removeItem(arr, item) {
    for(var i = arr.length; i--;) {
        if(arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
function validateEmail (correo){
    if (emailExpression.test(correo)){
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
function CreateWarning(inputError){   
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
        CreateWarning(input);
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
     fetch(url)
        .then(function(res){
            return res.json();
        })
        .then(function (data){
            if(!data.success){
               throw new Error(data.msg);
            }
                alert("Succes: " + data.success + "\n" + "email:" +
                userEmail.value + "\n"+ "Password: " + userPassword.value + + "\n" + "Request: " + data.msg);
            })
        .catch(function(error){
            alert(error);
    });
}
window.onload = function () {
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var loginButton = document.getElementById("loginButton");
    var errorsMessaage = [];
    var loginErrors = {
        email: "Invalid Email",
        password: "Invalid Password"
    }
 
    userEmail.onblur = function (){
        if (!validateEmail(userEmail.value) && userEmail.value !== ''){
            inputWarining(userEmail,true);
            errorsMessaage.push(loginErrors.email);
        }
    }
    userEmail.onfocus = function (){
        if (!validateEmail(userEmail.value)){
            removeItem(errorsMessaage,loginErrors.email);
            inputWarining(userEmail,false);
        }
    }
    userPassword.onblur = function (){
        if (!validatePassword(userPassword.value) && userPassword.value !== ''){
            inputWarining(userPassword,true);
            errorsMessaage.push(loginErrors.password);   
        }
    }
    userPassword.onfocus = function (){
        if (userPassword.value !== '' &&!validatePassword(userPassword.value)){
            removeItem(errorsMessaage,loginErrors.password);
            inputWarining(userPassword,false);
        }
    }
    loginButton.onclick = function (e){
        e.preventDefault();
        if (validatePassword(userPassword.value) && validateEmail(userEmail.value)){
            var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + userEmail.value + '&password=' + userPassword.value;
            validateURL(url);
        }else {
            if(errorsMessaage.length > 0){
            alert("Form loaded incorrectly, the errors are:" + errorsMessaage.join('-'));
            }
        }
    }
}
