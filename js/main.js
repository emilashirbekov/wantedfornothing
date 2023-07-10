//!CURSOR START
document.addEventListener("mousemove", function (event) {
  let cursorTrail = document.getElementById("cursor-trail");
  cursorTrail.style.cssText =
    "left: " + event.clientX + "px;top: " + event.clientY + "px";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
//!CURSOR START END

//!SMOOTH SCROLL ANIMATION START
const hiddenElements = document.querySelectorAll(".hidden");
const hiddenText = document.querySelectorAll(".lazy-loading");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
hiddenText.forEach((el) => {
  observer.observe(el);
});

const scrollToTop = document.querySelector(".fa-arrow-up");
scrollToTop.addEventListener("click", () => {
  const scrollTop = () => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  scrollTop();
});
//!SMOOTH SCROLL ANIMATION END

//! BURGER MENU START
const burgerMenu = document.querySelector(".burger-menu");

function toggleBurger() {
  if (window.innerWidth < 1030) {
    burgerMenu.style.display = "flex";
  } else {
    burgerMenu.style.display = "none";
  }
}

toggleBurger();

window.addEventListener("resize", toggleBurger);

//! BURGER MENU END
