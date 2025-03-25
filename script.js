var svg = document.querySelector('svg')
function onResize (){
  svg.setAttribute("width", window.innerWidth);
  svg.setAttribute("height", window.innerHeight);
}
window.addEventListener('resize', onResize)
onResize()