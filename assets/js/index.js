/// check if mobile
var detector = new MobileDetect(window.navigator.userAgent);
function aboutAnimation() {
  const aboutAnimation = document.querySelector(".about");

  aboutAnimation.style.transform = "translateY(0)";
  aboutAnimation.style.opacity = 1;
}

aboutAnimation();

/////////

const arrowDown = document.querySelector(".dropdown");
const mobileNav = document.querySelector(".mobile_nav");

arrowDown.addEventListener("click", showDropDownMenu);
var isDropdownOpen;
function showDropDownMenu() {
  if (isDropdownOpen == true) {
    mobileNav.style.display = "block";
    return (isDropdownOpen = false);
  } else {
    mobileNav.style.display = "none";
    return (isDropdownOpen = true);
  }
}

const navBar = document.querySelectorAll(".nav_link");

const setActiveLink = (linkElement) => {
  const previousActiveLink = document.querySelector(".nav_link.active");
  previousActiveLink?.classList.remove("active");
  linkElement.classList.add("active");
};

navBar.forEach((linkElement) => {
  const targetSectionName = linkElement.id.split("_")[0];
  const targetSection = document.querySelector(`#${targetSectionName}`);

  linkElement.addEventListener("click", () => {
    setActiveLink(linkElement);

    // scroll to the corresponding section
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});
//////

const addAnimation = (position, animationFn) => {
  window.addEventListener("scroll", function (e) {
    scroll_position = window.scrollY;
    if (scroll_position > position) {
      animationFn();
    }
  });
};

addAnimation(320, startAnimation);
addAnimation(319, startAnimationLeft);
addAnimation(892, startAnimationProjects);
//////
// GET ANIMATION'S
//////

//project animations
const projectLinks = document.querySelectorAll(".project__Picture__link");

projectLinks.forEach((element) => {
  element.addEventListener("mouseenter", function (e) {
    e.preventDefault;

    element
      .querySelector(".project__Picture")
      .classList.add("animate__flipInX");
  });

  element.addEventListener("mouseleave", (e) => {
    e.preventDefault;

    element
      .querySelector(".project__Picture")
      .classList.remove("animate__flipInX");
  });
});

const projects = document.querySelector(".project_con");

function startAnimationProjects() {
  projects.classList.add("animate__fadeInDown");
}

//second section animation
const image = document.querySelector(".animate_img");

function startAnimation() {
  image.classList.add("animate__fadeInRight");
}

const skill = document.getElementById("skill__development");

function startAnimationLeft() {
  skill.classList.add("animate__fadeInLeft");
}

///////
// sticky Header
///////
window.onscroll = function () {
  stickyHeader();
};

var header = document.querySelector(".header");

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const sectionIds = ["about", "skill", "projects", "contact"];
const sectionElements = sectionIds.map((id) => document.getElementById(id));

window.addEventListener("scroll", () => {
  sectionElements.forEach((sectionEl) => {
    const bottomBorderDistanceFromPageTop =
      sectionEl.offsetHeight + sectionEl.offsetTop;

    // check if page scroll is within current section borders
    if (
      scrollY > sectionEl.offsetTop &&
      scrollY < bottomBorderDistanceFromPageTop
    ) {
      const correspondingLink = document.getElementById(`${sectionEl.id}_link`);
      setActiveLink(correspondingLink);
    }
  });
});
