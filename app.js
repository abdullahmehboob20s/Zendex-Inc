let a = document.querySelector(":root");
let rightSide = document.querySelector(".right-side");
let sidebar = document.querySelector(".sidebar");
let button = document.querySelector(".button");
let close_btn = document.querySelector(".close_btn");
let button_mobail = document.querySelector(".button_mobail");
let black_screen = document.querySelector(".black_screen");
let main = document.querySelector(".main");
var btns = document.getElementsByClassName("sidebar_buttons-btn");
let sec = document.querySelectorAll(".section");
// let rightSide = document.querySelector(".right-side")

let toggle = "open";

black_screen.addEventListener("click", () => {
  sidebar.classList.remove("active_side");
  black_screen.style.display = "none";
  rightSide.style.height = "auto";
  rightSide.style.overflow = "auto";
});

close_btn.addEventListener("click", () => {
  sidebar.classList.remove("active_side");
  black_screen.style.display = "none";
  rightSide.style.height = "auto";
  rightSide.style.overflow = "auto";
});
button_mobail.addEventListener("click", () => {
  sidebar.classList.add("active_side");
  black_screen.style.display = "block";
  rightSide.style.height = "100vh";
  rightSide.style.overflow = "hidden";
});

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";

    if (window.innerWidth < 980) {
      sidebar.classList.remove("active_side");
      black_screen.style.display = "none";
      rightSide.style.height = "auto";
      rightSide.style.overflow = "auto";
    }
  });
}

let openWebsite = (link) => {
  window.open(link, "_blank");
};

// var swiper;



// window.addEventListener("resize", () => {
//   if (this.innerWidth < 680) {
//     var swiper = new Swiper(".swiper-container", {
//       slidesPerView: 1,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
//   }

//   else {
//     var swiper = new Swiper(".swiper-container", {
//       slidesPerView: 3,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
// }
// });

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



// window.addEventListener("resize", () => {
//   if (window.innerWidth < 980) {
//     sidebar.classList.remove("active_side")
//     black_screen.style.display = "none";
//   } else {
//     sidebar.style.width = "25%";
//     black_screen.style.display = "none";
//   }
// });

// button.addEventListener("click", () => {
//   if (toggle === "open") {
//     main.style.gridTemplateColumns = "0% 1fr";
//     sidebar.style.transform = "translateX(-100vw)";
//     a.style.setProperty("font-size", "100%");
//     toggle = "close";
//     return;
//   } else if (toggle === "close") {
//     main.style.gridTemplateColumns = "25% 1fr";
//     sidebar.style.transform = "translateX(0vw)";
//     a.style.setProperty("font-size", "88%");
//     toggle = "open";
//     return;
//   }
// });
