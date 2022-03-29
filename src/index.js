const toggleButtonElement = document.getElementById('toggleButton');
const navElements = document.getElementById('navItems');
const shopItemsElement = document.getElementById('shopItems');


toggleButtonElement.addEventListener('click', function() {
    navElements.classList.toggle('active')
})


shopItemsElement.addEventListener('click', function() {
    window.location = 'shopItems.html'
});