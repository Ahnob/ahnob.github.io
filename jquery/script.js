$("h1").css("color", "red");
// finding out fontsize. If you have a single property in it, you are getng the value of it. I you have 2 properties in it then you are setting the value.
console.log($("h1").css("font-size", "50px"));

// adding and removing classes
$("h1").addClass("margin-50 padding");

// Changing the text using JQery
$("h1").text("Come closer baby!");

// Changing innertext
$("button").html("You good?");

// Mannipulating attributes
$("h1").attr("class");

// changing the attribute
$("a").attr("href", "https://www.yahoo.com");

// Adding event listeners t html elements using jquery

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").click(function () {
  $("h1").css("color", "grey");
});

// event listeners can be added using on
$("h1").on("mouseover", function () {
  $("h1").css("color", "yellow");
});

// adding elements in jquery. The before makes it appear before the element that was selected
$("h1").before("<button></button>");

$("h1").after("<button>You good?</button>");

// This adds what is added directly into the selected Element
$("button").append("<span>You did great</span>");
$("h1").append("<span>You did great</span>");

// This comes just before the selected Element
$("h1").prepend("<button>Amazing!</button>");

// To remove an element
$("h2").remove();

// show, hide and toggle. Use either of them in the function
// $("button").on("click", function () {
//   $("h1").toggle();
// });

// fadeout, fadein and toggle. slideup,slidedown and slidetoggle
// $("button").on("click", function () {
//   $("h1").slideToggle();
// });

// AnimationEffect, this allows us to put down what we want to occur. Inbetween the curly braces, only numeric values can be added.
$("button").on("click", function () {
  $("h1").animate({ opacity: "0.5" });
});

// channing animations
$("h1").on("click", function () {
  $("button").slideUp().slideDown().animate({ opacity: "0.5" });
}); 