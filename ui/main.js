console.log('Loaded!');


// Change the text of the main-text div
var element = document.getElementById("main-text");
element.innerHTML = "Happy Holi";

// Move the image gradually
var img = document.getElementById("madi");

var marginLeft = 0;
function moveRight(){
    marginLeft += 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};
