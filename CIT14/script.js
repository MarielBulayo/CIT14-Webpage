let addToCartBtn = document.querySelectorAll('addToCartBtn');

for (var i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', updateCartContainer);
}

function updateCartContainer(){
    localStorage.setItem('updateCartContainer', 1);
}

