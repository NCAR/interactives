const videoFrame = document.querySelector('#video-frame');
const video = videoFrame.querySelector('#vid');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene( {
    duration: 74000,
    triggrElemnt: videoFrame,
    // offset: info.offsetHeight,
    triggerHook: 0
})
    .addIndicators()
    .setPin(videoFrame)
    .addTo(controller)


let accelAmount = 0.5;
let scrollPos = 0;
let delay = 0;

scene.on('update', e => {
    scrollPos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollPos - delay) * accelAmount;
    video.currentTime = delay;
}, 180)