function zoomIn()

{

var Page = document.getElementById('Body');

var zoom = parseInt(Page.style.zoom) + 50 +'%'

Page.style.zoom = zoom;

return false;

}