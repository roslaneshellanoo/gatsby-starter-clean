var selectCanvas = document.querySelector('canvas');
var textarea = document.querySelector('#textarea');

var context = selectCanvas.getContext('2d');

context.drawImage(textarea, 0, 0, 200, 200);