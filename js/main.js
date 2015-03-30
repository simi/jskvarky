/*jslint browser:true */

var circle = true;
var i;
var box;
var boxes;

function writeRound() {
  var el = document.getElementById('round');
  if(circle) {
    el.innerText = 'Hraje kolečko!';
  } else {
    el.innerText = 'Hraje křížek!';
  }
}

var listener = function(event) {
  var target = event.target;
  if(!(target.classList.contains('circle') || target.classList.contains('cross'))) {
    var type = circle ? 'circle' : 'cross';

    target.classList.add(type);
    circle = !circle;
    writeRound();
  }
};

function getBoxes() {
  return document.getElementsByTagName('td');
}

function init() {
  boxes = getBoxes();

  for (i = 0; i < boxes.length; i++) {
    box = boxes[i];
    box.addEventListener('click', listener);
  }
  writeRound();
}

function reset() {
  boxes = document.getElementsByTagName('td');

  for (i = 0; i < boxes.length; i++) {
    box = boxes[i];
    box.classList.remove('circle');
    box.classList.remove('cross');
  }

  circle = true;
  writeRound();
}
