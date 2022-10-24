// https://web.dev/drag-and-drop/

function handleDragStart(e) {
  this.style.opacity = '0.4';
}


function handleDragEnd(e) {
  this.style.opacity = '1';
}


let items = document.querySelectorAll('.days .date');
items.forEach(function (item) {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragend', handleDragEnd);
});