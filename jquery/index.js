// // should be used if you put javascript jquery and other scripts at head in the html
// $(document).ready(function() {
//   $("h1").css("color", "red");
// });

// Put in the end of body, not need of verifycation like it
$("h1").css("color", "red"); // 32px default
console.log($("h1").css("font-size"));
$("h1").css("font-size", "5rem"); //80px
console.log($("h1").css("font-size"));

// Select all the buttons on the document
$("button");

// Manipulating Styles with jQuery
$("h1").addClass("big-title margin-50");

// Remove Styles with jQuery
function removeStyle() {
  setTimeout(function() {
    $("h1").removeClass("big-title");
  }, 5000);
}
removeStyle();

// Test if the tag has a class
console.log($("h1").hasClass("margin-50"));
