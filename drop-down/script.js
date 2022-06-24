// accessing the elements with same classname
const elements = document.querySelectorAll(".drop-down");

// adding the event listener by looping
elements.forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    alert("someone hit me");
    
  });
});

// function changeImage() {
//   if (
//     document.querySelector("imgClickAndChange").src ==
//     "../images/icon-arrow-down.svg"
//   ) {
//     document.getElementById("imgClickAndChange").src =
//       "../images/icon-arrow-up.svg";
//   } else {
//     document.getElementById("imgClickAndChange").src =
//       "../images/icon-arrow-down.svg";
//   }
// }

// console.log(changeImage)