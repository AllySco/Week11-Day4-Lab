var onLoad = function(){
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');

  var x = 415;
  var y = 250;

  var maxX = 830;
  var maxY = 500;
  var min = 0;

  context.beginPath();
  context.moveTo(x, y);

  window.addEventListener( 'keydown', function(event) {

    var stepLength = 5;

    if (event.keyCode == '38') {

      if (y - stepLength >= min){
        y -= stepLength;
      } else {
        y = min;
      }
    }
    else if (event.keyCode == '40') {

      if (y + stepLength <= maxY){
        y += stepLength;
      } else {
        y = maxY;
      }
    }
    else if (event.keyCode == '37') {

      if (x - stepLength >= min){
        x -= stepLength;
      } else {
        x = min;
      }
    }
    else if (event.keyCode == '39') {

      if (x + stepLength <= maxX){
        x += stepLength;
      } else {
        x = maxX;
      }
    }
    context.lineTo(x, y);
    context.stroke();
  });

}//onLoad function ends

window.addEventListener('load', onLoad)
