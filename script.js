let controller;
let slideScene;

controller = new ScrollMagic.Controller();

const sliders = document.querySelectorAll('.slide');

sliders.forEach(slide => {
    const coverImg = slide.querySelector(".cover-img");
    const coverText = slide.querySelector(".cover-text");

    const slideTimeLine = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "power2.easeOut"
        }
    });

    slideTimeLine.fromTo(coverImg, { x: "0%" }, { x: "100%" });
    slideTimeLine.fromTo(coverText, { x: "0%" }, { x: "100%" });

    slideScene = new ScrollMagic.Scene({
        triggerElement: slide,
        triggerHook: 0.3
    })
        .setTween(slideTimeLine)
        .addTo(controller);
    // .addIndicators({
    //   name: "slider"
    // });
})

let laptopImg = document.querySelector("body > main > section:nth-child(3) > div.slide-img-area > img");
let keyboardImg = document.querySelector("body > main > section:nth-child(9) > div.slide-img-area > img")

function addMouseEventListener(ImgArea, selectImg, Event) {
    ImgArea.addEventListener(Event, function () {
        ImgArea.src = selectImg;
    })
}

addMouseEventListener(laptopImg, "./img/laptop-dark.jpg", "mouseover");
addMouseEventListener(laptopImg, "./img/laptop-light.jpg", "mouseout");
addMouseEventListener(keyboardImg, "./img/keyboard-dark.jpg", "mouseover");
addMouseEventListener(keyboardImg, "./img/keyboard-light.jpg", "mouseout");
