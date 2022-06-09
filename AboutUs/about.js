let homeBtn = document.getElementById("homeBtn");
homeBtn.setAttribute("href","../E-Commerce Website.html");
homeBtn.setAttribute("target","_blank");


let categoriesButton = document.getElementById("categoriesButton");
categoriesButton.setAttribute("href","../E-Commerce Website.html#categoriesContainerDiv");
categoriesButton.setAttribute("target","_blank");


let signUpBtn = document.getElementById("signUpBtn");
signUpBtn.setAttribute("href","../form/form.html");
signUpBtn.setAttribute("target","_blank");




let goUpDiv = document.getElementById("goUpDiv");
goUpDiv.onclick = function()
{
    var top = -scrollY;
    window.scrollBy(0,top);
}
