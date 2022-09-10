let showBtn = document.querySelector('.show-navigation');
let menus = document.querySelector('.menu-list');
// making the header sticky 
window.addEventListener("scroll",()=>{
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
    if(window.scrollY > 0){
        showBtn.style.color = "#000";
    }else{
        showBtn.style.color = "#fff";
    }
});

//hamburg  menu button uppar ke right side me jo hai 
showBtn.addEventListener('click',()=>{
    menus.classList.toggle('show-menu');
});

// filtering the data and giving the data as asked by the user
let root = document.querySelector('.cards-container');
let allProducts = document.querySelector('.allproducts');
let featuredProducts = document.querySelector('.featured');
let flashdeal = document.querySelector('.flashdeal');
let lastminute = document.querySelector('.lastminute');

//On our window Load ham sare products dikha denge lenge
window.addEventListener('load',()=>{
    root.innerHTML ="";
    data.map(everyProduct=>{
        cardUI(everyProduct,root);
    });
});


// get all the products even when the allproducts button is clicked
allProducts.addEventListener('click',()=>{
    root.innerHTML ="";
    data.map(everyProduct=>{
        cardUI(everyProduct,root);
    });
});

//get all the flash deal product when the user click on flash deal button
flashdeal.addEventListener('click',()=>{
    root.innerHTML="";
    data.filter(everyProduct=>{
        if(everyProduct.flashDealProduct===true){
            cardUI(everyProduct,root);
        }
    })
});

// get only the featured products 
featuredProducts.addEventListener('click',()=>{
    root.innerHTML = "";
    data.filter(everyProduct=>{
        if(everyProduct.isFeatured ===true){
            cardUI(everyProduct,root);
        }
    });
});

// get all the last minute products  when the last minute button is clicked 
lastminute.addEventListener('click',()=>{
    root.innerHTML = "";
    data.filter(everyProduct=>{
        if(everyProduct.lastminute ===true){
            cardUI(everyProduct,root);
        }
    });
});

//user interface  for all the product cards 

function cardUI(product,rootEle){
    let card = document.createElement('div');
    card.classList.add('card');

    let figure = document.createElement('figrue');
    figure.classList.add('product-image');
    let image = document.createElement('img');
    image.src = product.imageurl;
    figure.append(image);
    card.append(figure);

    let cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    let titleAndPrice = document.createElement('div');
    titleAndPrice.classList.add('title-price');
    cardInfo.append(titleAndPrice);

    let h2 = document.createElement('h2');
    h2.classList.add('title');
    h2.innerText = product.title;
    titleAndPrice.append(h2);

    let h4 = document.createElement('h4');
    h4.classList.add('price');
    h4.innerText = product.price
    titleAndPrice.append(h4);

    let cardDescription = document.createElement('div');
    cardDescription.classList.add('card-description');
    cardInfo.append(cardDescription);
    let para  = document.createElement('p');
    para.innerText= product.description;
    cardDescription.append(para);

    let productReview = document.createElement('div');
    productReview.classList.add('product-review')
    cardInfo.append(productReview);
    let reviewStars  = document.createElement('div');
    reviewStars.classList.add('review-stars');
    reviewStars.innerHTML= `<i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             `;
   
    productReview.append(reviewStars);
    let reviewCount  = document.createElement('div');
    reviewCount.classList.add('review-count');
    let anchor = document.createElement('a')
    let span = document.createElement('span');
    span.innerText = product.review;
    anchor.append(span);
    reviewCount.append(anchor);
    productReview.append(reviewCount)
    card.append(cardInfo);

    rootEle.append(card);
    return card ;
}
