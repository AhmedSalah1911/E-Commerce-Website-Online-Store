var typeOfCategory , containerName;


let products =
[
                    // Mobile Products
    {
        productId: 0,
        img : "data/products/0.png",
        productCategory : "mobile phone",
        productName : "iphone 11" ,
        price : "20000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 1,
        img : "data/products/12.png",
        productCategory : "mobile phone",
        productName : "iphone 12 pro" ,
        price : "21000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 2,
        img : "data/products/2.png",
        productCategory : "mobile phone",
        productName : "Iphone X" ,
        price : "16599 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 3,
        img : "data/products/3.png",
        productCategory : "mobile phone",
        productName : "Iphone 7" ,
        price : "9834 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 4,
        img : "data/products/4.png",
        productCategory : "mobile phone",
        productName : "Iphone 6 Plus" ,
        price : "5680 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 5,
        img : "data/products/5.png",
        productCategory : "mobile phone",
        productName : "Huawei p9" ,
        price : "7266 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 6,
        img : "data/products/6.png",
        productCategory : "mobile phone",
        productName : "Huawei p8 Lite" ,
        price : "4658 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 7,
        img : "data/products/7.png",
        productCategory : "mobile phone",
        productName : "Huawei Vivo V9" ,
        price : "9999 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 8,
        img : "data/products/8.png",
        productCategory : "mobile phone",
        productName : "Samsung Galaxy S9" ,
        price : "13390 LE",
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 9,
        img : "data/products/9.png",
        productCategory : "mobile phone",
        productName : "Samsung Telephone 4G" ,
        price : "12600 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 10,
        img : "data/products/10.png",
        productCategory : "mobile phone",
        productName : "Samsung Galaxy LG G6" ,
        price : "14265 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 11,
        img : "data/products/11.png",
        productCategory : "mobile phone",
        productName : "Samsung Galaxy S9" ,
        price : "17890 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 12,
        img : "data/products/1.png",
        productCategory : "mobile phone",
        productName : "Silver iPhone X" ,
        price :"14599 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 13,
        img : "data/products/13.png",
        productCategory : "mobile phone",
        productName : "Apple iPhone 8" ,
        price : "8999 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 14,
        img : "data/products/14.png",
        productCategory : "mobile phone",
        productName : "IPhone 8 Plus" ,
        price : "8769 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 15,
        img : "data/products/15.png",
        productCategory : "mobile phone",
        productName : "Iphone XS" ,
        price : "11990 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },


                    // Men Clothes

    {
        productId: 16,
        img : "data/products/16.png",
        productCategory : "Men Clothes",
        productName : "Classic Shirt" ,
        price : "120 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 17,
        img : "data/products/17.png",
        productCategory : "Men Clothes",
        productName : "Black T Shirt" ,
        price : "99 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 18,
        img : "data/products/18.png",
        productCategory : "Men Clothes",
        productName : "T-shirt Polo" ,
        price : "150 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 19,
        img : "data/products/19.png",
        productCategory : "Men Clothes",
        productName : "Gray crew-neck t-shirt" ,
        price : "170 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 20,
        img : "data/products/20.png",
        productCategory : "Men Clothes",
        productName : "T-shirt Hoodie Polo shirt" ,
        price : "180 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 21,
        img : "data/products/21.png",
        productCategory : "Men Clothes",
        productName : "Black pullover hoodie" ,
        price : "320 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 22,
        img : "data/products/22.png",
        productCategory : "Men Clothes",
        productName : "Gray long-sleeved shirt" ,
        price : "280 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 23,
        img : "data/products/23.png",
        productCategory : "Men Clothes",
        productName : "Blue crew-neck t-shirt " ,
        price : "220 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 24,
        img : "data/products/24.png",
        productCategory : "Men Clothes",
        productName : "T-shirt Dress shirt" ,
        price : "190 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 25,
        img : "data/products/25.png",
        productCategory : "Men Clothes",
        productName : "Several button-up shirts" ,
        price : "150 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 26,
        img : "data/products/26.png",
        productCategory : "Men Clothes",
        productName : "Folded shirts illustration" ,
        price : "180 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 27,
        img : "data/products/27.png",
        productCategory : "Men Clothes",
        productName : "Jacket Hoodie Overcoat" ,
        price : "480 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 28,
        img : "data/products/28.png",
        productCategory : "Men Clothes",
        productName : "Hoodie T-shirt Sweater" ,
        price : "560 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 29,
        img : "data/products/29.png",
        productCategory : "Men Clothes",
        productName : "Hoodie T-shirt Sweater" ,
        price : "180 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 30,
        img : "data/products/30.png",
        productCategory : "Men Clothes",
        productName : "Hoodie Polo shirt" ,
        price : "360 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 31,
        img : "data/products/31.png",
        productCategory : "Men Clothes",
        productName : "Long-sleeved T-shirt" ,
        price : "280 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 32,
        img : "data/products/32.png",
        productCategory : "Men Clothes",
        productName : "Orange crew-neck shirt" ,
        price : "130 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
    
    {
        productId: 33,
        img : "data/products/33.png",
        productCategory : "Men Clothes",
        productName : "Blue dress shirt" ,
        price : "180 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

                        //Women Clothes

    {
        productId: 34,
        img : "data/products/34.png",
        productCategory : "Women Clothes",
        productName : "Women's yellow dress" ,
        price : "480 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 35,
        img : "data/products/35.png",
        productCategory : "Women Clothes",
        productName : "long-sleeved flare dress" ,
        price : "320 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 36,
        img : "data/products/36.png",
        productCategory : "Women Clothes",
        productName : "Casual Blouse & Jeans" ,
        price : "280 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 37,
        img : "data/products/37.png",
        productCategory : "Women Clothes",
        productName : "Blue jeans" ,
        price : "290 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 38,
        img : "data/products/38.png",
        productCategory : "Women Clothes",
        productName : "Little black dress" ,
        price : "520 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 39,
        img : "data/products/39.png",
        productCategory : "Women Clothes",
        productName : "Dress Fashion" ,
        price : "170 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 40,
        img : "data/products/40.png",
        productCategory : "Women Clothes",
        productName : "Top High-heeled footwear" ,
        price : "180 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 41,
        img : "data/products/41.png",
        productCategory : "Women Clothes",
        productName : "mini dress" ,
        price : "370 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 42,
        img : "data/products/42.png",
        productCategory : "Women Clothes",
        productName : "Blue-washed denim" ,
        price : "320 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 43,
        img : "data/products/43.png",
        productCategory : "Women Clothes",
        productName : "Women's beige pea coat" ,
        price : "410 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 44,
        img : "data/products/44.png",
        productCategory : "Women Clothes",
        productName : "T-shirt Blouse Ruffle" ,
        price : "180 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 45,
        img : "data/products/45.png",
        productCategory : "Women Clothes",
        productName : "Jeans Jacket Denim" ,
        price : "280 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 46,
        img : "data/products/46.png",
        productCategory : "Women Clothes",
        productName : "Jeans Denim" ,
        price : "160 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 47,
        img : "data/products/47.png",
        productCategory : "Women Clothes",
        productName : "Blazer Tuxedo " ,
        price : "660 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 48,
        img : "data/products/48.png",
        productCategory : "Women Clothes",
        productName : "Sweater Cardigan Crop top" ,
        price : "480 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 49,
        img : "data/products/49.png",
        productCategory : "Women Clothes",
        productName : "Sweater Polo neck" ,
        price : "350 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 50,
        img : "data/products/50.png",
        productCategory : "Women Clothes",
        productName : "Blouse Dress shirt Shirtdress" ,
        price : "290 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 51,
        img : "data/products/51.png",
        productCategory : "Women Clothes",
        productName : "Hoodie Coat Outerwear" ,
        price : "690 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 52,
        img : "data/products/52.png",
        productCategory : "Women Clothes",
        productName : "Blouse Jacket Sleeve" ,
        price : "399 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

                // Electronics

    {
        productId: 53,
        img : "data/products/53.png",
        productCategory : "Electronics",
        productName : " Samsung Electronics DNS" ,
        price : "4700 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 54,
        img : "data/products/54.png",
        productCategory : "Electronics",
        productName : "Washing Machines LG" ,
        price : "5900 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 55,
        img : "data/products/55.png",
        productCategory : "Electronics",
        productName : "top-mount refrigerator" ,
        price : "11299 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 56,
        img : "data/products/56.png",
        productCategory : "Electronics",
        productName : "Refrigerator Icemaker" ,
        price : "11299 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 57,
        img : "data/products/57.png",
        productCategory : "Electronics",
        productName : " Cooking Ranges " ,
        price : "13199 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 58,
        img : "data/products/58.png",
        productCategory : "Electronics",
        productName : "Microwave oven " ,
        price : "3999 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 59,
        img : "data/products/59.png",
        productCategory : "Electronics",
        productName : "Refrigerator Icemaker Home" ,
        price : "10999 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 60,
        img : "data/products/60.png",
        productCategory : "Electronics",
        productName : "Washing Machines" ,
        price : "11299 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 61,
        img : "data/products/61.png",
        productCategory : "Electronics",
        productName : "Washing Machines" ,
        price : "6199 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 62,
        img : "data/products/62.png",
        productCategory : "Electronics",
        productName : "Washing Machines LG" ,
        price : "5299 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 63,
        img : "data/products/63.png",
        productCategory : "Electronics",
        productName : " mechanism appliance" ,
        price : "7999 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 64,
        img : "data/products/64.png",
        productCategory : "Electronics",
        productName : " Air conditioning HVAC" ,
        price : "8000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 65,
        img : "data/products/65.png",
        productCategory : "Electronics",
        productName : "Clothes iron" ,
        price : "1299 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 66,
        img : "data/products/66.png",
        productCategory : "Electronics",
        productName : "Blender Mixer" ,
        price : "899 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 67,
        img : "data/products/67.png",
        productCategory : "Electronics",
        productName : "Electric kettle" ,
        price : "569 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 68,
        img : "data/products/68.png",
        productCategory : "Electronics",
        productName : "Espresso Coffeemaker" ,
        price : "3999 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 69,
        img : "data/products/69.png",
        productCategory : "Electronics",
        productName : "KitchenAid stand mixer" ,
        price : "2500 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 70,
        img : "data/products/70.png",
        productCategory : "Electronics",
        productName : "Mixer Cream Food" ,
        price : "1800 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 71,
        img : "data/products/71.png",
        productCategory : "Electronics",
        productName : "Deep Fryers Blender" ,
        price : "899 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

                        // Cars

    {
        productId: 72,
        img : "data/products/72.png",
        productCategory : "Cars",
        productName : "Mercedes Car" ,
        price : "1200000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 73,
        img : "data/products/73.png",
        productCategory : "Cars",
        productName : "Hyundai Tucson Car" ,
        price : "900000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 74,
        img : "data/products/74.png",
        productCategory : "Cars",
        productName : "2018 Toyota Corolla" ,
        price : "400000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 75,
        img : "data/products/75.png",
        productCategory : "Cars",
        productName : "Jeep Grand Cherokee 2018" ,
        price : "1100000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 76,
        img : "data/products/76.png",
        productCategory : "Cars",
        productName : "2018 Toyota" ,
        price : "500000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 77,
        img : "data/products/77.png",
        productCategory : "Cars",
        productName : "Chevrolet Camaro" ,
        price : "2000000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 78,
        img : "data/products/78.png",
        productCategory : "Cars",
        productName : "Mercedes-Benz sedan" ,
        price : "2200000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 79,
        img : "data/products/79.png",
        productCategory : "Cars",
        productName : " BMW M2" ,
        price : "900000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId:80,
        img : "data/products/80.png",
        productCategory : "Cars",
        productName : "Audi R8" ,
        price : "1100000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 81,
        img : "data/products/81.png",
        productCategory : "Cars",
        productName : "Mercedes-Benz" ,
        price : "1300000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 82,
        img : "data/products/82.png",
        productCategory : "Cars",
        productName : "Toyota Hilux" ,
        price : "800000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 83,
        img : "data/products/83.png",
        productCategory : "Cars",
        productName : " BMW X1 " ,
        price : "1400000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 84,
        img : "data/products/84.png",
        productCategory : "Cars",
        productName : " BMW X1 " ,
        price : "300000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 85,
        img : "data/products/85.png",
        productCategory : "Cars",
        productName : "VOLKSWAGEN " ,
        price : "800000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 86,
        img : "data/products/86.png",
        productCategory : "Cars",
        productName : " Honda Civic 2018" ,
        price : "900000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 87,
        img : "data/products/87.png",
        productCategory : "Cars",
        productName : "Sports car ISO 7736" ,
        price : "1200000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

                    // Accessories

    {
        productId: 88,
        img : "data/products/88.png",
        productCategory : "Accessories",
        productName : "Sun Glassess" ,
        price : "120 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 89,
        img : "data/products/89.png",
        productCategory : "Accessories",
        productName : "chain necklace" ,
        price : "1000 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 90,
        img : "data/products/90.png",
        productCategory : "Accessories",
        productName : "Bow tie Blue" ,
        price : "80 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 91,
        img : "data/products/91.png",
        productCategory : "Accessories",
        productName : "Men's tie" ,
        price : "99 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 92,
        img : "data/products/90.png",
        productCategory : "Accessories",
        productName : "Wallet Leather" ,
        price : "180 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 93,
        img : "data/products/93.png",
        productCategory : "Accessories",
        productName : "Handbag Tote bag" ,
        price : "120 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 94,
        img : "data/products/94.png",
        productCategory : "Accessories",
        productName : "Men's watch" ,
        price : "220 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 95,
        img : "data/products/95.png",
        productCategory : "Accessories",
        productName : "Watch Strap" ,
        price : "120 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 96,
        img : "data/products/96.png",
        productCategory : "Accessories",
        productName : "Wallet Handbag Brown" ,
        price : "190 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 97,
        img : "data/products/97.png",
        productCategory : "Accessories",
        productName : "Watch Icon" ,
        price : "899 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 98,
        img : "data/products/98.png",
        productCategory : "Accessories",
        productName : "Wedding ring" ,
        price : "760 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 99,
        img : "data/products/99.png",
        productCategory : "Accessories",
        productName : "Suit Bow tie" ,
        price : "120 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 100,
        img : "data/products/100.png",
        productCategory : "Accessories",
        productName : "Belt buckle Versace" ,
        price : "160 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 101,
        img : "data/products/101.png",
        productCategory : "Accessories",
        productName : "Wallet Louis Vuitton " ,
        price : "70 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 102,
        img : "data/products/102.png",
        productCategory : "Accessories",
        productName : "Wallet Handbag" ,
        price : "199 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 103,
        img : "data/products/103.png",
        productCategory : "Accessories",
        productName : "Sun Glassess" ,
        price : "320 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

                //Makeup

    {
        productId: 104,
        img : "data/products/104.png",
        productCategory : "Makeup",
        productName : "Black makeup palette" ,
        price : "320 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 105,
        img : "data/products/105.png",
        productCategory : "Makeup",
        productName : "Assorted cosmetic products" ,
        price : "420 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 106,
        img : "data/products/106.png",
        productCategory : "Makeup",
        productName : "Eyelash extensions" ,
        price : "90 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 107,
        img : "data/products/107.png",
        productCategory : "Makeup",
        productName : "graphy Eye shadow" ,
        price : "560 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 108,
        img : "data/products/108.png",
        productCategory : "Makeup",
        productName : "lipstick" ,
        price : "66 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 109,
        img : "data/products/109.png",
        productCategory : "Makeup",
        productName : "Brown makeup brushes" ,
        price : "110 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 110,
        img : "data/products/110.png",
        productCategory : "Makeup",
        productName : "Makeup kit illustration" ,
        price : "480 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 111,
        img : "data/products/111.png",
        productCategory : "Makeup",
        productName : "Cosmetics Drawing Make-up " ,
        price : "320 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 112,
        img : "data/products/112.png",
        productCategory : "Makeup",
        productName : "Make-up Face powder" ,
        price : "530 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 113,
        img : "data/products/113.png",
        productCategory : "Makeup",
        productName : "Watercolor painting" ,
        price : "620 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 114,
        img : "data/products/114.png",
        productCategory : "Makeup",
        productName : "Nail Polish Make-up" ,
        price : "220 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 115,
        img : "data/products/115.png",
        productCategory : "Makeup",
        productName : "Nail polish" ,
        price : "170 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 116,
        img : "data/products/116.png",
        productCategory : "Makeup",
        productName : "Gel nails Manicure" ,
        price : "320 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 117,
        img : "data/products/117.png",
        productCategory : "Makeup",
        productName : "Spilled nail polishes" ,
        price : "190 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 118,
        img : "data/products/118.png",
        productCategory : "Makeup",
        productName : "Nail polish" ,
        price : "150 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 119,
        img : "data/products/119.png",
        productCategory : "Makeup",
        productName : "Makeup brush" ,
        price : "110 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 120,
        img : "data/products/120.png",
        productCategory : "Makeup",
        productName : "Eyelash extensions" ,
        price : "130 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

                    //Shoes

    {
        productId: 121,
        img : "data/products/121.png",
        productCategory : "Shoes",
        productName : "Adidas Shoe Sneakers" ,
        price : "230 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 122,
        img : "data/products/122.png",
        productCategory : "Shoes",
        productName : "Shoe Nike" ,
        price : "330 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 123,
        img : "data/products/123.png",
        productCategory : "Shoes",
        productName : "Air Jordan" ,
        price : "480 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 124,
        img : "data/products/124.png",
        productCategory : "Shoes",
        productName : "Sneakers Vans" ,
        price : "520 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 125,
        img : "data/products/125.png",
        productCategory : "Shoes",
        productName : "Sneakers Nike" ,
        price : "680 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 126,
        img : "data/products/126.png",
        productCategory : "Shoes",
        productName : "black running shoe" ,
        price : "390 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 127,
        img : "data/products/127.png",
        productCategory : "Shoes",
        productName : "Air Force Nike" ,
        price : "450 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 128,
        img : "data/products/128.png",
        productCategory : "Shoes",
        productName : "Air Force Nike" ,
        price : "620 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 129,
        img : "data/products/129.png",
        productCategory : "Shoes",
        productName : "Adidas Stan " ,
        price : "530 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 130,
        img : "data/products/130.png",
        productCategory : "Shoes",
        productName : "Nike Air Max" ,
        price : "420 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 131,
        img : "data/products/131.png",
        productCategory : "Shoes",
        productName : "Nike Air Max" ,
        price : "590 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 132,
        img : "data/products/132.png",
        productCategory : "Shoes",
        productName : "Air Jordan Nike" ,
        price : "820 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 133,
        img : "data/products/133.png",
        productCategory : "Shoes",
        productName : "Nike Air Max" ,
        price : "760 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 134,
        img : "data/products/134.png",
        productCategory : "Shoes",
        productName : "Women's sports shoes" ,
        price : "550 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 135,
        img : "data/products/135.png",
        productCategory : "Shoes",
        productName : "Nike Air Max" ,
        price : "799 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 136,
        img : "data/products/136.png",
        productCategory : "Shoes",
        productName : "Shoe Sneakers" ,
        price : "820 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 137,
        img : "data/products/137.png",
        productCategory : "Shoes",
        productName : "Nike Flywire" ,
        price : "699 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 138,
        img : "data/products/138.png",
        productCategory : "Shoes",
        productName : "Puma Oakley" ,
        price : "599 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },

    {
        productId: 139,
        img : "data/products/139.png",
        productCategory : "Shoes",
        productName : "Sneakers Nike" ,
        price : "499 LE" ,
        productInfo : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis nobis laudantium nulla dolorum saepe sint quia asperiores deleniti cum reprehenderit a libero vitae, ex facilis aspernatur eos impedit harum!",
    },
]

//-------------------------- Function to append all products in containers ---------------------------------
//----------------------------------------------------------------------------------------------------------


function addSelectedCategory(productsArray )
{
    for ( var i = 0 ; i < productsArray.length ; i++)
    {
                        //create Double face Div

            var doubleFaceCard = document.createElement("div");
            doubleFaceCard.setAttribute("class","doubleFaceCard");
            // doubleFaceCard.setAttribute("id", `product${i}`)
                    
                        // Create Front Face Div
                    
            var frontFaceDiv = document.createElement("div");
            frontFaceDiv.setAttribute("class","frontFace");
        
            var productImg = document.createElement("img");
            productImg.setAttribute("src",productsArray[i].img);
            frontFaceDiv.appendChild(productImg);

            var productName = document.createElement("h4");
            productName.textContent = productsArray[i].productName;
            frontFaceDiv.appendChild(productName);

                        // Create back Face Div

            var backFaceDiv = document.createElement("div");
            backFaceDiv.setAttribute("class","backFace");

            var priceh4 = document.createElement("h4");
            priceh4.textContent = productsArray[i].price;
            backFaceDiv.appendChild(priceh4);

            var productInfo = document.createElement("p");
            productInfo.textContent = productsArray[i].productInfo;
            backFaceDiv.appendChild(productInfo);

            var buyBtn = document.createElement("input");
            buyBtn.setAttribute("type" , "button");
            buyBtn.setAttribute("value","Buy Now");
            backFaceDiv.appendChild(buyBtn);

                        // Append Divs into Double face Div

            doubleFaceCard.appendChild(frontFaceDiv);
            doubleFaceCard.appendChild(backFaceDiv);

                        // Append Double face Div into Container 

            if ( products[i].productCategory == "mobile phone" )
                containerDivs[1].appendChild(doubleFaceCard);
            else if (products[i].productCategory == "Men Clothes")
                containerDivs[2].appendChild(doubleFaceCard);
            else if ( products[i].productCategory == "Women Clothes")
                containerDivs[3].appendChild(doubleFaceCard);
            else if (products[i].productCategory == "Electronics")
            containerDivs[4].appendChild(doubleFaceCard);  
            else if (products[i].productCategory == "Accessories")
            containerDivs[5].appendChild(doubleFaceCard);  
            else if (products[i].productCategory == "Makeup")
            containerDivs[6].appendChild(doubleFaceCard);  
            else if (products[i].productCategory == "Cars")
            containerDivs[7].appendChild(doubleFaceCard); 
            else if (products[i].productCategory == "Shoes")
            containerDivs[8].appendChild(doubleFaceCard); 
}
}

addSelectedCategory(products);


//----------------------------------------- Mobile Phones Section ------------------------------------------
//----------------------------------------------------------------------------------------------------------

let mobilePhone = document.getElementById("mobilePhone");

mobilePhone.onclick = function()
{
    hideContainerDivs(1);
}


//----------------------------------------- Men Clothes Section ------------------------------------------
//----------------------------------------------------------------------------------------------------------

let menClothes = document.getElementById("menClothes");

menClothes.onclick = function()
{
    hideContainerDivs(2);
}


//----------------------------------------- Women Clothes Section ------------------------------------------
//----------------------------------------------------------------------------------------------------------

let womenClothes = document.getElementById("womenClothes");

womenClothes.onclick = function()
{
    hideContainerDivs(3);
}


//-------------------------------------------- Electronics Section ------------------------------------------
//----------------------------------------------------------------------------------------------------------

let electronics = document.getElementById("electronics");

electronics.onclick = function()
{
    hideContainerDivs(4);
}

//-------------------------------------------- Accessories Section ------------------------------------------
//----------------------------------------------------------------------------------------------------------

let accessories = document.getElementById("accessories");

accessories.onclick = function()
{
    hideContainerDivs(5);

}


//-------------------------------------------- Makeup Section ------------------------------------------

let makeup = document.getElementById("makeup");

makeup.onclick = function()
{
    hideContainerDivs(6);

}


//-------------------------------------------- Cars Section ------------------------------------------
//----------------------------------------------------------------------------------------------------------

let Cars = document.getElementById("Cars");

Cars.onclick = function()
{
    hideContainerDivs(7);

}





//-------------------------------------------- Shoes Section ------------------------------------------
//----------------------------------------------------------------------------------------------------------

let shoes = document.getElementById("shoes");

shoes.onclick = function()
{
    hideContainerDivs(8);

}

//-------------------------------------------- all products Section ------------------------------------------
//----------------------------------------------------------------------------------------------------------

let allProductsButton = document.getElementById("allProductsButton");

allProductsButton.onclick = function()
{
    for ( var i = 0 ; i < containerDivs.length ; i++)
    {
        containerDivs[i].style.display = null
    }

}
