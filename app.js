// const mouseCursor = document.querySelector(".cursor");
// const navLinks = document.querySelectorAll(".nav-links li");

// window.addEventListener("mousemove", cursor);

// function cursor(e) {
//   // console.log(e);
//   mouseCursor.style.top = e.pageY + "px";
//   mouseCursor.style.left = e.pageX + "px";
// }

// navLinks.forEach(function (link) {
//   link.addEventListener("mouseout", function () {
//     mouseCursor.classList.remove("link-grow");
//     link.classList.remove("hovered-link");
//   });

//   link.addEventListener("mouseover", function () {
//     mouseCursor.classList.add("link-grow");
//     link.classList.add("hovered-link");
//   });
// });

// my code below

const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  console.log(e);
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseout", () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });
});
