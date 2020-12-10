let hidePlankDesktop = 47;
let previousPosition;
if (window.innerWidth > 767) {
    document.addEventListener('scroll', function(e) {
        if (window.pageYOffset > hidePlankDesktop) {
            hideSecondLVL()
        }
        if(previousPosition < window.pageYOffset) {
            showSecondLVL()
        }
        previousPosition = window.pageYOffset
    })
}
function hideSecondLVL(){
    document.getElementById("navigation-second").classList.remove("hide")
}
function showSecondLVL(){
    document.getElementById("navigation-second").classList.add("hide")
}