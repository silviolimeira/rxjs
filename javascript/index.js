var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var letter = this.innerHTML;

    switch (letter) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom2 = new Audio("sounds/tom-3.mp3");
        tom2.play();
        break;

      default:
    }
    console.log("letra: ", letter);
  });
}
