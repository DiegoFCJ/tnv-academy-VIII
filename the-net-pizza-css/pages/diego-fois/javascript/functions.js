// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

 


function scrollFunction() {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "35px";
    document.getElementById("links").style.fontSize = "20px";
    document.getElementById("nameAndDescr").style.visibility = "hidden";
    document.getElementById("choice").style.visibility = "hidden";
    document.getElementById("b").style.backgroundImage = "url(../diego-fois/images/background-image.jpg)";
    document.getElementById("choicesText").style.visibility = "hidden";

  } else {
    document.getElementById("navbar").style.height = "100%";
    document.getElementById("links").style.fontSize = "30px";
    document.getElementById("nameAndDescr").style.visibility = "visible";
    document.getElementById("choice").style.visibility = "visible";
    document.getElementById("b").style.backgroundImage = null;
    document.getElementById("b").style.paddingTop = "44%";
    document.getElementById("choicesText").style.visibility = "visible";
  } 
}



