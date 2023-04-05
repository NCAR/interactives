$(document).ready(function() {
    const video = document.querySelector('#vid');
    var controller = new ScrollMagic.Controller();

    // handling video scroll
    var mainScene = new ScrollMagic.Scene({
        duration: 195000,
        triggerElement: "#vidframe",
        triggerHook: 0
    })
        // .addIndicators()
        .setPin("#vidframe")
        .addTo(controller)
    // implementing a minor delay after scrolling stops to make a smoother transition
    let accelAmount = 0.5;
    let scrollPos = 0;
    let delay = 0;

    mainScene.on('update', e => {
        scrollPos = e.scrollPos / 1000;
    });

    setInterval(() => {
        delay += (scrollPos - delay) * accelAmount;
        video.currentTime = delay;
    }, 200)


    // handling text box scroll
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 5000,
        triggerHook: 0.35
    }).setPin("#trigger1")
    // .addIndicators();

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        duration: 8000,
        triggerHook: 0.35
    }).setPin("#trigger2")
    // .addIndicators();

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3",
        duration: 8000,
        triggerHook: 0.35
    }).setPin("#trigger3")
    // .addIndicators();

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4",
        duration: 9000,
        triggerHook: 0.35
    }).setPin("#trigger4")
    // .addIndicators();

    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger5")
    // .addIndicators();

    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger6",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger6")
    // .addIndicators();

    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger7")
    // .addIndicators();

    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#trigger7",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger7")
    // .addIndicators();

    var scene8 = new ScrollMagic.Scene({
        triggerElement: "#trigger8",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger8")
    // .addIndicators();

    var scene9 = new ScrollMagic.Scene({
        triggerElement: "#trigger9",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger9")
    // .addIndicators();

    var scene10 = new ScrollMagic.Scene({
        triggerElement: "#trigger10",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger10")
    // .addIndicators();

    var scene11 = new ScrollMagic.Scene({
        triggerElement: "#trigger11",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger11")
    // .addIndicators();

    var scene12 = new ScrollMagic.Scene({
        triggerElement: "#trigger12",
        duration: 7000,
        triggerHook: 0.35
    }).setPin("#trigger12")
    // .addIndicators();

    controller.addScene([
        scene1,
        scene2,
        scene3,
        scene4,
        scene5,
        scene6,
        scene7,
        scene8,
        scene9,
        scene10,
        scene11,
        scene12
    ])
})


