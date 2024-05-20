// gsap.fromTo(".logo", { opacity: 0, y: -40 }, { opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut" });
gsap.fromTo(".loading-screen", { opacity: 1 }, { opacity: 0, duration: 1.5, delay: 2.5, ease: "power1.inOut", onComplete: function() { document.querySelector(".loading-screen").classList.add("hidden") }});
gsap.fromTo(".logo h1", { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1.5, delay: 1.5, ease: "power1.inOut" });
gsap.fromTo(".logo p", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1.5, delay: 1.5, ease: "power1.inOut" });
gsap.fromTo(".logo img", { opacity: 0, rotate: -260, y: "-200%" }, { opacity: 1, rotate: 0, y: 0, duration: 1.5, ease: "power1.inOut" });

// Plane

// gsap.fromTo(".plane", { x: "-100%", y: "100%" }, { x: 0, y: "-30%", duration: 2.5, delay: 2.5, ease: "power1.inOut" });

// Parallax

gsap.to(".parallax-cloud", {
    scrollTrigger: {
      scrub: 1
    }, 
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
});

window.addEventListener("scroll", function() {
    if(window.scrollY > 0) {
        document.querySelector("header").classList.add("not-top")
    } else {
        document.querySelector("header").classList.remove("not-top")
    }
})