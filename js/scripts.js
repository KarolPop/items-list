var list = document.getElementById('Lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
   var indexOfItem = document.getElementsByTagName('li');
   list.innerHTML += '<li>item '+indexOfItem.length+'</li>';
});