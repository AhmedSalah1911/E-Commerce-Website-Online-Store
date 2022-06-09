var sectionSliderDiv = document.getElementById("sectionSlider"),
    picSliderDiv = document.getElementById("PicSlider"),

    slideLeftBtn = document.getElementById("slideLeft"),
    slideRightBtn = document.getElementById("slideRight"),

    mySection = document.getElementById("sectionSlider"),
    sectionHeader = document.getElementById("sectionHeader"),
    sectionSpan = document.getElementById("sectionSpan"),
    sectionParagraph = document.getElementById("sectionParagraph"),
    // sectionButton = document.getElementById("shoppingBtn"),

    sectionImg = document.getElementById("sectionImg");



//--------------------------------------------- Slider Div Content ----------------------------------------------


let categoriesContent = 
[
    {
        id: 0,
        span : "Online Store ",
        paragraphofSlider : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
        buttonTextOfSLider : "About Us" ,
        img : "data/0.png",
    },

    {
        id: 1,
        span : "Mobile Phones",
        paragraphofSlider : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        buttonTextOfSLider : "Mobile Phones",
        img : "data/21.png",
        paragraphOfCategoriesSection: "Shop Any Mobile Online at Our Stores in Egypt The Biggest Mobile Shop in Egypt",
        h2 : "Mobile Phone" ,
        a_Value : "mobilePhone",
    },

    {
        id: 2,
        span : "Men Fashion",
        paragraphofSlider :"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.",
        buttonTextOfSLider : "Men Fashion",
        img : "data/2.png",
        h2 : "Men Clothes",
        paragraphOfCategoriesSection : "Find the latest trends and styles in men's clothing At Our Store",
        a_Value : "menClothes"
    },

    {
        id: 3,
        span : "Women Fashion",
        paragraphofSlider :"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. ",
        buttonTextOfSLider : "Women Fashion",
        img : "data/3.png",
        h2 : "Women Clothes ",
        paragraphOfCategoriesSection :"Stylish and Elegant Ladies Fashion Collection Only At Our Store",
        a_Value : "womenClothes"
    },

    {
        id: 4,
        span : "Electronics",
        paragraphofSlider : "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.",
        buttonTextOfSLider : "Electronics",
        img : "data/4.png",
        h2 : "Electronics ",
        paragraphOfCategoriesSection :"Shop Best offers in electronics online home appliances & accessories & games",
        a_Value : "electronics"
    },

    {
        id: 5,
        span : "Accessories",
        paragraphofSlider :"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        buttonTextOfSLider : "Buy Accessories",
        img : "data/6.png",
        h2 : "Accessories",
        paragraphOfCategoriesSection : "Welcome to Accessorize Global. Shop your favourite bags, jewellery and seasonal favourites",
        a_Value : "accessories"
    },

    {
        id: 6,
        span : "Makeup",
        paragraphofSlider : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.",
        buttonTextOfSLider : "Beauty Section",
        img : "data/7.png",
        h2 : "Makeup",
        paragraphOfCategoriesSection :"All Girls Needs Are Here click To See our Products",
        a_Value : "makeup"
    },

    {
        id: 7,
        span : "Cars",
        paragraphofSlider : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
        buttonTextOfSLider : "Foods & Drinks",
        img : "data/80.png",
        h2 : "Cars",
        paragraphOfCategoriesSection : "We have All your needs click here To See our Products",
        a_Value : "Cars"
    },

    {
        id: 8,
        span : "Shoes",
        paragraphofSlider : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. ",
        buttonTextOfSLider : "Shoes & Sneakers",
        img : "data/20.png",
        h2 : "Shoes",
        paragraphOfCategoriesSection : "A new Collection of Shoes Available Now Click To See our Products",
        a_Value : "shoes"
    },
]

var id = -1 , startSliding ;


window.onload = function()
{
    id = -1;
    setTimeout (goRightFunc,0);
    setTimeout(startSlidingFunc,1000);

} ;

function startSlidingFunc()
{
    
    startSliding = setInterval(goRightFunc, 1800)
}


                            //__________________ Slide Left ____________________

slideLeftBtn.onclick = function()
        {
            clearInterval(startSliding);
            goLeftFunc();
            startSlidingFunc();
        };



function goLeftFunc()
{

    id--;
        
    if ( id < 0)
    { id = categoriesContent.length-1 }

    sectionSpan.textContent = categoriesContent[id].span;
    sectionParagraph.textContent = categoriesContent[id].paragraphofSlider;
    // sectionButton.setAttribute("value" , categoriesContent[id].buttonTextOfSLider);
    sectionImg.setAttribute("src", categoriesContent[id].img);
}

                            //_______________________ Slide Right _________________


slideRightBtn.onclick = function()
            {    
                clearInterval(startSliding);
                goRightFunc();
                startSlidingFunc();
        } ;
    
    
    function goRightFunc()
    {
    
        id++;
        
        if ( id == categoriesContent.length)
        {id = 0};

        sectionSpan.textContent = categoriesContent[id].span;
        sectionParagraph.textContent = categoriesContent[id].paragraphofSlider;
        // sectionButton.setAttribute("value" , categoriesContent[id].buttonTextOfSLider);
        sectionImg.setAttribute("src", categoriesContent[id].img);

    }



