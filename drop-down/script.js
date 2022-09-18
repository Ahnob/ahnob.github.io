// accessing the elements with same classname
const elements = document.querySelectorAll(".drop-down");

// adding the event listener by looping
elements.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    // alert("someone hit me");
  });
});

// document.ready(function () {
//   document.getElementByClassName("hidden").mouseenter(function () {
//     document
//       .getElementByClassName("show")
//       .classList.remove("show")
//       .classList.add("hidden");
//     this.classList.remove("hidden").classList.add("show");
//   });
// });

const number = "12";
