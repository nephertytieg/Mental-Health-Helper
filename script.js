// function ourAnimation() {
//   var ourImage = document.getElementById("Animation");

// ourImage.style.position = "relative";
// var position = 0;

// setInterval(move,5);

// function move() {
// if (position == window.screen.width - 325)
//  {
//    clearInterval();
//  } else {
//    position++;
//   ourImage.style.left = position + "px";
//    }
//   }
// }

function ourAnimation() {
  var ourImage = document.getElementById("animation");

  ourImage.style.position = "relative";
  var position = 0;

  setInterval(move, 5);

  function move() {
    if (position == window.screen.width - 150) {
      clearInterval();
    } else {
      position++;
      ourImage.style.left = position + "px";
    }
  }
}