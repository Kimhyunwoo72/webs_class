gsap.from(".site_desc", {
  y: 100,
});
gsap.to(".site_desc", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  y: 0,
  ease: "sine.out",
  opacity: 1,
  duration: 1.5,
});

///////////////////////
// line1
gsap.from(".site_line1", {
  scaleX: 0,
});
gsap.to(".site_line1", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
});

// 1
// line2
gsap.from(".subtitle1 > .site_line2", {
  scaleX: 0,
});
gsap.to(".subtitle1 > .site_line2", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.2,
});

// line3
gsap.from(".subtitle1 > .site_line3", {
  scaleX: 0,
});
gsap.to(".subtitle1 > .site_line3", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.4,
});

// line4
gsap.from(".site_info1 > .site_line4", {
  scaleX: 0,
});
gsap.to(".site_info1 > .site_line4", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.9,
});

// Height line
gsap.to(".site_info1 .siteH_line", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  duration: 2,
  height: 100 + "%",
});

// img
gsap.to(".site_info1 .siteImg_bg", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  duration: 2,
  height: 0,
});
// 축소
gsap.from(".siteImg1", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".siteImg1", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1.2,
  ease: "power1.out",
  delay: 1.2,
  scleX: 1,
  scleY: 1,
});
// 1

// 2
// line2
gsap.from(".subtitle2 > .site_line2", {
  scaleX: 0,
});
gsap.to(".subtitle2 > .site_line2", {
  scrollTrigger: {
    trigger: ".subtitle2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.1,
});

// line3
gsap.from(".subtitle2 > .site_line3", {
  scaleX: 0,
});
gsap.to(".subtitle2 > .site_line3", {
  scrollTrigger: {
    trigger: ".subtitle2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.2,
});

// line4
gsap.from(".site_line5", {
  scaleX: 0,
});
gsap.to(".site_line5", {
  scrollTrigger: {
    trigger: ".subtitle2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.4,
});

// Height line
gsap.to(".site_info2 .siteH_line", {
  scrollTrigger: {
    trigger: ".subtitle2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  duration: 2,
  delay: 0.2,
  height: 100 + "%",
});

// img
gsap.to(".site_info2 .siteImg_bg", {
  scrollTrigger: {
    trigger: ".subtitle2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  duration: 2,
  height: 0,
});

// 축소
gsap.from(".siteImg2", {
  scrollTrigger: {
    trigger: ".subtitle2",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".siteImg2", {
  scrollTrigger: {
    trigger: ".subtitle2",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1.2,
  ease: "power1.out",
  delay: 1.2,
  scleX: 1,
  scleY: 1,
});
// 2

// 3
// line2
gsap.from(".subtitle3 > .site_line2", {
  scaleX: 0,
});
gsap.to(".subtitle3 > .site_line2", {
  scrollTrigger: {
    trigger: ".subtitle3",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.1,
});

// line3
gsap.from(".subtitle3 > .site_line3", {
  scaleX: 0,
});
gsap.to(".subtitle3 > .site_line3", {
  scrollTrigger: {
    trigger: ".subtitle3",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.2,
});

// line4
gsap.from(".site_line6", {
  scaleX: 0,
});
gsap.to(".site_line6", {
  scrollTrigger: {
    trigger: ".subtitle3",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.4,
});

// Height line
gsap.to(".site_info3 .siteH_line", {
  scrollTrigger: {
    trigger: ".subtitle3",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  duration: 2,
  delay: 0.2,
  height: 100 + "%",
});

// img
gsap.to(".site_info3 .siteImg_bg", {
  scrollTrigger: {
    trigger: ".subtitle3",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  duration: 2,
  height: 0,
});

// 축소
gsap.from(".siteImg3", {
  scrollTrigger: {
    trigger: ".subtitle3",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".siteImg3", {
  scrollTrigger: {
    trigger: ".subtitle3",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1.2,
  ease: "power1.out",
  delay: 1.2,
  scleX: 1,
  scleY: 1,
});
// 3

// 4
// line2
gsap.from(".subtitle4 > .site_line2", {
  scaleX: 0,
});
gsap.to(".subtitle4 > .site_line2", {
  scrollTrigger: {
    trigger: ".subtitle4",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.1,
});

// line3
gsap.from(".subtitle4 > .site_line3", {
  scaleX: 0,
});
gsap.to(".subtitle4 > .site_line3", {
  scrollTrigger: {
    trigger: ".subtitle4",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.2,
});

// line4
gsap.from(".site_line7", {
  scaleX: 0,
});
gsap.to(".site_line7", {
  scrollTrigger: {
    trigger: ".subtitle4",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.4,
});

// Height line
gsap.to(".site_info4 .siteH_line", {
  scrollTrigger: {
    trigger: ".subtitle4",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  duration: 2,
  delay: 0.2,
  height: 100 + "%",
});

// img
gsap.to(".site_info4 .siteImg_bg", {
  scrollTrigger: {
    trigger: ".subtitle4",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  duration: 2,
  height: 0,
});

// 축소
gsap.from(".siteImg4", {
  scrollTrigger: {
    trigger: ".subtitle4",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".siteImg4", {
  scrollTrigger: {
    trigger: ".subtitle4",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1.2,
  ease: "power1.out",
  delay: 1.2,
  scleX: 1,
  scleY: 1,
});
// 4

// 5
// line2
gsap.from(".subtitle5 > .site_line2", {
  scaleX: 0,
});
gsap.to(".subtitle5 > .site_line2", {
  scrollTrigger: {
    trigger: ".subtitle5",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.1,
});

// line3
gsap.from(".subtitle5 > .site_line3", {
  scaleX: 0,
});
gsap.to(".subtitle5 > .site_line3", {
  scrollTrigger: {
    trigger: ".subtitle5",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.2,
});

// line4
gsap.from(".site_line8", {
  scaleX: 0,
});
gsap.to(".site_line8", {
  scrollTrigger: {
    trigger: ".subtitle5",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.4,
});

// Height line
gsap.to(".site_info5 .siteH_line", {
  scrollTrigger: {
    trigger: ".subtitle5",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  duration: 2,
  delay: 0.2,
  height: 100 + "%",
});

// img
gsap.to(".site_info5 .siteImg_bg", {
  scrollTrigger: {
    trigger: ".subtitle5",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  duration: 2,
  height: 0,
});

// 축소
gsap.from(".siteImg5", {
  scrollTrigger: {
    trigger: ".subtitle5",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".siteImg5", {
  scrollTrigger: {
    trigger: ".subtitle5",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1.2,
  ease: "power1.out",
  delay: 1.2,
  scleX: 1,
  scleY: 1,
});
// 5
