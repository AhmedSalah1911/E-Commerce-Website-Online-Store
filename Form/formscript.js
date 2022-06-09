let username = document.getElementById("username"),
    userEmail = document.getElementById("userEmail"),
    userPass = document.getElementById("userPass"),
    male = document.getElementById("male"),
    female = document.getElementById("female");

let invalidUser = document.getElementById("invalidUser"),
    invalidEmail = document.getElementById("invalidEmail"),
    invalidPassword = document.getElementById("invalidPassword"),
    invalidGender = document.getElementById("invalidGender");


let submitBtn = document.getElementById("submitBtn");

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

function usernameBorderColor()
{
    if ( username.value.length < 8 || !username.value )
    username.style.border = "5px solid #5f2828"
    else username.style.border = "5px solid #164246"
}


username.onkeyup = usernameBorderColor;


//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

function emailBorderColor()
{
    var emailValue = userEmail.value
    var testEmail = /\w{8,}@(gmail.com|yahoo.com)/ig;
    if ( !emailValue.match(testEmail) )
    userEmail.style.border = "5px solid #5f2828"
    else userEmail.style.border = "5px solid #164246"
}

userEmail.onkeyup = emailBorderColor;

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------

function passwordBorderColor()
{
    if ( userPass.value.length < 9 || !userPass.value)
    userPass.style.border = "5px solid #5f2828"
    else userPass.style.border = " 5px solid #164246"
}

userPass.onkeyup = passwordBorderColor;


//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------



function showErrors ()
{
    if ( username.value.length < 8 || !username.value)
    invalidUser.textContent = "Username Must Be More Than 8 Charchaters";
    else invalidUser.textContent = "";

    var emailValue = userEmail.value
    var testEmail = /\w{8,}@(gmail.com|yahoo.com)/ig;
    if ( !emailValue.match(testEmail) || !emailValue)
    invalidEmail.textContent = "Invalid Email";
    else invalidEmail.textContent = "";

    if ( userPass.value.length < 9 || !userPass.value)
    invalidPassword.textContent = "Incorrect Password";
    else invalidPassword.textContent = "";

    if ( male.checked != true && female.checked != true )
    invalidGender.textContent = "Please Slect YOur Gender";
    else invalidGender.textContent =""
    
}

submitBtn.onclick = showErrors;




//----------------------------------------------------------------------------------------------------------
let homeBtn = document.getElementById("homeBtn");
homeBtn.setAttribute("href","../E-Commerce Website.html");
homeBtn.setAttribute("target","_blank");


let categoriesButton = document.getElementById("categoriesButton");
categoriesButton.setAttribute("href","../E-Commerce Website.html#categoriesContainerDiv");
categoriesButton.setAttribute("target","_blank");


let aboutUsBtn = document.getElementById("aboutUsBtn");
aboutUsBtn.setAttribute("href","../AboutUs/aboutUsPage.html");
aboutUsBtn.setAttribute("target","_blank");



let goUpDiv = document.getElementById("goUpDiv");
goUpDiv.onclick = function()
{
    var top = -scrollY;
    window.scrollBy(0,top);
}
