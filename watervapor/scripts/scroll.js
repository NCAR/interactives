/////////////////// VIDEO SCROLLING SECTION ///////////////////
const videoFrame = document.querySelector('#video-frame');
const video = videoFrame.querySelector('#vid');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene( {
    duration: 74000,
    triggrElemnt: videoFrame,
    triggerHook: 0
})
    .setPin(videoFrame)
    .addTo(controller)


// implementing a minor delay after scrolling stops to make a smoother transition
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