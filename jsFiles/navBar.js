let homeBtn = document.getElementById("homeBtn");
homeBtn.setAttribute("href","E-Commerce Website.html");


let categoriesButton = document.getElementById("categoriesButton");
categoriesButton.setAttribute("href", `#${ContainerArray[0]}`);


let aboutUsBtn = document.getElementById("aboutUsBtn");
aboutUsBtn.setAttribute("href","AboutUs/aboutUsPage.html");
aboutUsBtn.setAttribute("target","_blank");

let signUpBtn = document.getElementById("signUpBtn");
signUpBtn.setAttribute("href","form/form.html");
signUpBtn.setAttribute("target","_blank");


let goUpDiv = document.getElementById("goUpDiv");
goUpDiv.onclick = function()
{
    var top = -scrollY;
    window.scrollBy(0,top);
}


