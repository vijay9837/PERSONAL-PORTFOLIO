// ...........................for smooth scrolling...............................
const lenis = new Lenis({
  autoRaf: true,
});

lenis.on("scroll", (e) => {});

//............................. for cursor........................................

const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");
const outercursor = document.querySelector(".outercursor");

body.addEventListener("mousemove", (e) => {
  gsap.to(".cursor,.outercursor", {
    opacity: 1,
    x: e.pageX,
    y: e.pageY,
    duration: 0.4,
    stagger: 0.2,
  });
});

const scaleup = document.querySelectorAll(".container h2,.footer-links i");

scaleup.forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    gsap.to(".outercursor",{
      backgroundColor: "white",
      scale: 1.5,
      duration: 0.3,
    });
  });
  ele.addEventListener("mouseleave", () => {
    gsap.to(".outercursor", {
      backgroundColor: "transparent",
      scale: 1,
      duration: 0.3,
    });
  });
});

//....................................  landing page work........................

const tl = gsap.timeline();
const mysplit = new SplitType("#text1,#text2");
const mynamesplit = new SplitType(".name h1", {
  charClass: "name-char",
});

tl.to(".box1", {
  height: 0,
  duration: 0.4,
});

tl.to(".char,.name-char", {
  y: 0,
  duration: 1,
  stagger: 0.03,
  opacity: 1,
  delay: -0.5,
});
tl.to(".open-to-work", {
  opacity: 1,
  delay: -0.6,
});

// .................. for text highlight in box3...........................
const mysplit2 = new SplitType(".items-hover h2", {
  types: "word",
});

gsap.to(".items h2", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".box3",
    scrub: 1,
    start: "15% 60%",
    end: "80% 60%",
  },
});

// ..................for work-items styling in box4...............................

const workitems = document.querySelectorAll(".work-items");

workitems.forEach((ele) => {
  ele.addEventListener("mouseenter", (e) => {
    const h1 = ele.querySelector("h1");
    const img = ele.querySelector("img");
    h1.style.transform = "translateX(20px)";
    img.style.transform = "scale(1)";
    img.style.opacity = "1";
    gsap.to(".outercursor",{
      backgroundColor: "#ffffff",
      scale: 1.5,
      duration: 0.3,
    });
    outercursor.innerHTML = "View"
  });
  ele.addEventListener("mouseleave", (e) => {
    const h1 = ele.querySelector("h1");
    const img = ele.querySelector("img");
    h1.style.transform = "translateX(0px)";
    img.style.transform = "scale(0)";
    img.style.opacity = "0.5";
    gsap.to(".outercursor",{
      backgroundColor: "transparent",
      scale: 1,
      duration: 0.3,
    });
    outercursor.innerHTML = ""
  });
});

