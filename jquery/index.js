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

console.log("Wait for 10 seconds, and you see good bye text in the h1");
setTimeout(function() {
  $("h1").text("Bye.");
  console.log("10 seconds, good bye text in the h1");
}, 10000);

console.log("Wait for 10 seconds, and you see button's text change");
setTimeout(function() {
  $("button").text("Don't Click Me");
  console.log("10 seconds, button's text change");
}, 10000);

console.log("Wait for 12 seconds, and you see button's text change");
setTimeout(function() {
  $("button").html("<em>Bye</em>");
  console.log("12 seconds, button's text change");
}, 12000);

console.log("\n\n");

console.log($("img").attr("src"));

console.log("\n\n");

$("a").attr("href", "https://www.yahoo.com");
$("a").text("Yahoo");

console.log("\n\n");
console.log("list classes in the tag with jquery");
console.log($("h1").attr("class"));
console.log("\n\n");

$("h1").click(function() {
  $("h1").css("color", "purple");
});

// Add Event Listeners with jQuery

// example with javascript
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "yellow";
//   });
// }

// example with jquery
$("button").click(function() {
  $("h1").css("color", "green");
});

// detect key press in the input button
$("input").keypress(function(event) {
  console.log(event.key);
  // change h1 to the key pressed
  $("h1").text(event.key);
});

// change color h1 on mouse over event
// https://developer.mozilla.org/en-US/docs/Web/Events
$("h2").on("mouseover", function() {
  $("h2").css("color", "blue");
  console.log("change color of the h1");
});
