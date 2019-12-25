function MyFunction() {
    var down = document.getElementById("down");
    if(down.style.display == "none") {
        down.style.display = "block"
    }
    else{
        down.style.display = "none"
    }
}

function tabclick(webname) {
    var content = document.getElementsByClassName("content");
    for(i=0; i<content.length; i++) {
        content[i].style.display = "none"
    }
    document.getElementById(webname).style.display = "block"
}


var accord = document.getElementsByClassName("accord");
var i;
for(i=0; i<accord.length; i++) {
    accord[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if(panel.style.display == "none") {
        panel.style.display = "block"
    }
    else{
        panel.style.display = "none"
    }
    })
}


var slides = document.querySelectorAll("#slides .slide");
var currentslide = 0;
var interval = setInterval(nextslide, 2000)

function nextslide() {
    slides[currentslide].className = "slide";
    currentslide = (currentslide+1)%slides.length;
    slides[currentslide].className = "slide showing";
}
