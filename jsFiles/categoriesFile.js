let mainDiv = document.getElementById("mainDiv");

let containerDivs ;    // all divs has class Container in mainDiv ( use in line 19 )

let ContainerArray = ["categoriesContainerDiv" ,"mobilePhoneContainer", "menClothesContainer" , "womenClothesContainer" , "electronicsContainer" , "accessoriesContainer" ,  "makeupContainer" , "carsContainer" , "shoesContainer" ];


//------------------------------------ Append Conatiner Divs into mainDiv -------------------------------------

function appendContainerDivs()
{
    for ( var i = 0 ; i < ContainerArray.length ; i++)
    {
        var container = document.createElement("div");
        container.setAttribute("class",`container ${ContainerArray[i]}`  );
        container.setAttribute("id" , ContainerArray[i]);
        mainDiv.appendChild(container); 
    }

    containerDivs = document.querySelectorAll("#mainDiv .container");

}

appendContainerDivs();


//----------------------------------- Hide all container Divs into maainDiv ------------------------------------

function hideContainerDivs(numOfShownCategory)
{
    for ( var i = 1 ; i < containerDivs.length ; i++)
    {
        if ( i == numOfShownCategory)
        containerDivs[numOfShownCategory].style.display = null;
        else
        containerDivs[i].style.display = "none"
        // console.log(containerDivs[i]);
    }
}

hideContainerDivs(0);

//----------------------------------------- Append Categories Section -------------------------------------------


var CatgNumOfAnimation = -1 ;


function appendCategoriesSection(objectOfProducts)
{
    for ( var i = 1 ; i < objectOfProducts.length ; i++ )
    {

                    // Create Product&Button Div

    var ProductAndButtonDiv = document.createElement("div");
    ProductAndButtonDiv.setAttribute("class","productAndButton");

                    //Create First Div Contain img & h2 & p

    var catgCardDiv = document.createElement("div");
    catgCardDiv.setAttribute("class" , "CatgCard")

    var catgCardImg = document.createElement("img");
    catgCardImg.setAttribute("src",objectOfProducts[i].img);
    catgCardDiv.appendChild(catgCardImg);

    var catgCardh2 = document.createElement("h2");
    catgCardh2.textContent = objectOfProducts[i].h2;
    catgCardDiv.appendChild(catgCardh2);

    var catgCardP = document.createElement("p");
    catgCardP.textContent = objectOfProducts[i].paragraphOfCategoriesSection
    catgCardDiv.appendChild(catgCardP);

    //Create Second Div "<a>" Button Shop now

    var shoppingSectionDiv = document.createElement("div");
    shoppingSectionDiv.setAttribute("class","shoppingSectionDiv");

    var shoppingDivAnchor =document.createElement("a");
    shoppingDivAnchor.setAttribute("class","sectionShoppingBtn");
    shoppingDivAnchor.setAttribute("id",objectOfProducts[i].a_Value);
    shoppingDivAnchor.setAttribute("href",`#${ContainerArray[i]}`);
    shoppingDivAnchor.textContent = "Shop Now";
    shoppingSectionDiv.appendChild(shoppingDivAnchor);

    // Append Divs into ProductAndButtonDiv Div

    ProductAndButtonDiv.appendChild(catgCardDiv);
    ProductAndButtonDiv.appendChild(shoppingSectionDiv);

    // Append ProductAndButtonDiv into First Container Div

    containerDivs[0].appendChild(ProductAndButtonDiv);



    // if Condition To Set animation Classes

    CatgNumOfAnimation++;

    if ( CatgNumOfAnimation == 0 )
    {
    shoppingSectionDiv.classList.add("first");
    catgCardDiv.classList.add("rightanimation");
    }
    else if ( CatgNumOfAnimation == 1 )
    {
    shoppingSectionDiv.classList.add("second");
    catgCardDiv.classList.add("leftanimation");
    }
    else if ( CatgNumOfAnimation == 2 )
    {
    shoppingSectionDiv.classList.add("third");
    catgCardDiv.classList.add("rightanimation");
    } 
    else if ( CatgNumOfAnimation == 3)
    {
    CatgNumOfAnimation = -1;
    shoppingSectionDiv.classList.add("fourth");
    catgCardDiv.classList.add("leftanimation");
    }

    }

                // Append button Shows All products

    var allProductsAnchor = document.createElement("a");
    // allProductsAnchor.setAttribute("href","#containerOfAllProducts")
    var allProductsButton = document.createElement("input");
    allProductsButton.setAttribute("type","button");
    allProductsButton.setAttribute("class","allProductsButton");
    allProductsButton.setAttribute("id","allProductsButton");
    allProductsButton.setAttribute("value","All Products");
    allProductsAnchor.appendChild(allProductsButton);
    containerDivs[0].appendChild(allProductsAnchor);
}

appendCategoriesSection(categoriesContent);



//----------------------------------------- products button  -------------------------------------------


