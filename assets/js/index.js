$(".widget__slick__block").slick({
     infinite: true,
})
let flashDay = document.querySelector(".flash__day");
let flashHrs = document.querySelector(".flash__hrs");
let flashMin = document.querySelector(".flash__min");
let flashSec = document.querySelector(".flash__sec");

setInterval(() => {
     let currentTime = new Date()
     flashDay.innerHTML = currentTime.getDay();
     flashHrs.innerHTML = currentTime.getHours();
     flashMin.innerHTML = currentTime.getMinutes();
     flashSec.innerHTML = currentTime.getSeconds();
}, 1000)
