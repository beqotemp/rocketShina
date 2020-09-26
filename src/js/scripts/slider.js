let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let currentDot = 0;
let slideInterval = setInterval(nextSlide, 9000);
let dotsWrapper = document.getElementById('main-slider__dots')
let dots = []

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function pickedSlide(n) {
    number = n.getAttribute('data-id');
    dots[currentSlide].className = 'dot';
    goByDot(number);
    dotClasses();
}
function dotClasses() {
    dots[currentSlide].className = 'dot active';
}
function goToSlide(n) {
    dots[currentSlide].className = 'dot';
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
    dotClasses();
}

function goByDot(n){   
    slides[currentSlide].className = 'slide';
    currentSlide = n-1  
    slides[currentSlide].className = 'slide showing';
    dotClasses(n)
}

function getDots(n) {
    dotsWrapper.insertAdjacentHTML('beforeend', `<li data-id="${n + 1}" class="dot"></li>`)
    let dot = document.querySelectorAll('#main-slider__dots .dot');
    dots = Array.prototype.slice.call(dot)
}

var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow() {
//  pauseButton.innerHTML = 'Play';
//  playing = false;
//  clearInterval(slideInterval);
// }

function playSlideshow() {
//  pauseButton.innerHTML = 'Pause';
 playing = true;
 slideInterval = setInterval(nextSlide,8000);
}

// pauseButton.onclick = function() {
//  if(playing) {
//  pauseSlideshow();
//   } else {
//  playSlideshow();
//   }
// };
if (slides.length > 0) {
    let next = document.getElementById('next');
    let previous = document.getElementById('previous');
    
    next.addEventListener("click", function() {
        nextSlide();
    })
    previous.addEventListener("click", function() {
        previousSlide();
    })
}


// next.onclick = function() {
//  pauseSlideshow();
//  nextSlide();

// };
// previous.onclick = function() {
//  pauseSlideshow();
//  previousSlide();

// };
(function() {
    if (slides.length > 0) {
        for (let n = 0; n < slides.length; n++) {
            getDots(n);
        }
        dots[0].className = 'dot active'
    } else {
        console.log("no slides")
    }

 })();

dots.map((dot) =>{
    dot.addEventListener("click", function() {
        pickedSlide(dot)
    })
})