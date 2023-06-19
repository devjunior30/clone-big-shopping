/*
let time = 2000

let currentImageIndex = 0

let  img = document.querySelectorAll("#img img")

let    max = images.length;

function nextImage() {

    images[currentImageIndex]
         .classList.remove("elements")

    currentImageIndex++ 

    if(currentImageIndex >= max)
      currentImageIndex = 0

      images[currentImageIndex]
              .classList.add("elements")

            
      imgs.style.transform = `translateX(${-idx * 500}px)`
}


window.addEventListener("load", start)
   

