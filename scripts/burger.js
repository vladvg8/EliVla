let burger = document.getElementById('burgerItems')
let burgerSpan = document.getElementById('burgerSpan')

function getBlock () {
    if (burger.style.display === 'none') {
        burger.style.display = 'block';
    } else {
        burger.style.display = 'none';
    }
}

burgerSpan.addEventListener('click', getBlock)
