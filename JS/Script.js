let slide_1 = document.querySelector("#slide_1")
let slide_2 = document.querySelector("#slide_2")
let slide_3 = document.querySelector("#slide_3")

let sliderTrack_1 = document.querySelector("#sliderTrack_1")
let sliderTrack_2 = document.querySelector("#sliderTrack_2")
let sliderTrack_3 = document.querySelector("#sliderTrack_3")

let arrowLeft = document.querySelector("#arrowLeft")
let arrowRight = document.querySelector("#arrowRight")

function Sliding(slide, sliderTrack) {

    slide_1.classList.remove("slide-active")
    slide_2.classList.remove("slide-active")
    slide_3.classList.remove("slide-active")

    slide.classList.add("slide-active")

    sliderTrack_1.classList.remove("sliderTrack__item-active")
    sliderTrack_2.classList.remove("sliderTrack__item-active")
    sliderTrack_3.classList.remove("sliderTrack__item-active")

    sliderTrack.classList.add("sliderTrack__item-active")
}

console.log("JS working")