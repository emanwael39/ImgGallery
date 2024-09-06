var imges = [
    "images/Earrings1.jpeg",
    "images/Earrings2.jpeg",
    "images/Earrings3.jpeg",
]
var img = document.querySelector("img")
var index = 0;
var interval
var dots=document.querySelectorAll(".dots span")

function show() {
    if (index == imges.length) index = 0;
    else if (index < 0) index = 2
    img.src = imges[index]
    dots.forEach((item)=>item.style.backgroundColor="#888")
    dots[index].style.backgroundColor="#ddd"
}
function autoPlay() {
    interval = setInterval(() => {
        show()
        index++
    }, 3000)
}
autoPlay()
function stop() {
    clearInterval(interval)
}
img.onmouseenter = function () {
    stop()
}
img.onmouseleave = function () {
    autoPlay()
}
function nextBTN() {
    show()
    index++;
    clearInterval(interval)
}
function preBTN() {
    show()
    index--;
    clearInterval(interval)
}
