const adding = document.querySelector(".add");
const sub = document.querySelector(".sub");
const value = document.querySelector(".value");

const add_to_cart = document.querySelector(".add-to-cart");
const cart_box = document.querySelector(".cart-box");
const cart_img = document.querySelector(".cart-img");
const quantity = document.querySelector(".amount");
const none_empty = document.querySelector(".non-empty");
const empty = document.querySelector(".empty");

const deleted = document.querySelector(".delete");
const quantity2 = document.querySelector(".quantity");
const total = document.querySelector(".total");
let amount = 0;
let counter = 0;
const arrProduct = ['./images/image-product-1.jpg','./images/image-product-2.jpg','./images/image-product-3.jpg','./images/image-product-4.jpg'];
const thumb1 = document.querySelectorAll('.thumb1');
const thumb2 = document.querySelector('.thumb2');
const thumb3 = document.querySelector('.thumb3');
const thumb4 = document.querySelector('.thumb4');

const ligthProduct = document.querySelector(".ligthProduct");
const ligthContainer = document.querySelector(".light-conatiner");
adding.addEventListener('click', () => {
    console.log();
    amount++;
    quantity.innerHTML = amount;
})
sub.addEventListener('click', () => {
    console.log();
    if (amount > 0) {
        amount--;
    }
    quantity.innerHTML = amount;

})

cart_img.addEventListener('click', () => {
    console.log("hovered on it");
    cart_box.classList.toggle('displayCartBox');
})

add_to_cart.addEventListener('click', () => {
    if (amount > 0) {
        value.style.display = 'block';
        value.innerHTML = amount;
        none_empty.style.display = 'block';
        empty.style.display = 'none';
        quantity2.innerHTML = amount;
        total.innerHTML = "$"+amount * 125;
    } else {
        value.style.display = 'none';
        empty.style.display = 'grid';
        none_empty.style.display = 'none';
    }

    console.log('clicked '+ amount);

})

deleted.addEventListener('click', () => {
    amount = 0;
    value.style.display = 'none';
    empty.style.display = 'grid';
    none_empty.style.display = 'none';
    quantity.innerHTML = amount;
});


const thumb = document.querySelectorAll(".thumb");
thumb.forEach((e, a) => {
    e.addEventListener('click', () => {
        console.log(e);
    ligthContainer.style.display = "grid";
        ligthProduct.src = arrProduct[a];
        counter = a;
   })
})

const thumb5 = document.querySelectorAll(".thumb5");
thumb5.forEach((e, a) => {
    e.addEventListener('click', () => {
    ligthProduct.src = arrProduct[a];
   })
})
console.log(thumb);

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const close1 = document.querySelector(".close1");

//reference to the mobile prev and next
const next1 = document.querySelector(".next1");
const prev1 = document.querySelector(".prev1");

const mobileImage = document.querySelector(".mobileImage");

const decrease = (p) => {
      counter--;
    if (counter <0) {
        counter = 3;
         p.src = arrProduct[counter];
    } else {
        p.src = arrProduct[counter];
   }
}
const increase = (p) => {
     counter++;
    if (counter == 4) {
        counter = 0;
         p.src = arrProduct[counter];
    } else {
         p.src = arrProduct[counter];
   }
}
next.addEventListener('click', () => {
    increase(ligthProduct);
})

prev.addEventListener('click', () => {
    decrease(ligthProduct);
})

next1.addEventListener('click', () => {
    increase(mobileImage);
})

prev1.addEventListener('click', () => {
    decrease(mobileImage);
})

close1.addEventListener('click', () => {
    ligthContainer.style.display = "none";
})

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const navContainer = document.querySelector(".close-navList-Container");

menu.addEventListener('click', () => {
    navContainer.style.display = 'block'
})

close.addEventListener('click', () => {
    navContainer.style.display = 'none'
})

