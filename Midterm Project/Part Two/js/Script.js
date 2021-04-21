function processBack() {
element=document.getElementById("myPicture");
element.style.opacity=0;
if (thisPic == 0) {
thisPic = myPix.length;
}
thisPic--;

//document.getElementById("myPicture").src = myPix[thisPic];
//As per notes from Alan Sweeny
//Set timeout will call this function after waiting 2000 msec.
//Switches picture and sets opacity back to 1.
setTimeout(function(){
document.getElementById("myPicture").src = myPix[thisPic];
document.getElementById("picCaption").innerHTML=myCaptions[myPix[thisPic]];
element.style.opacity=1;
}, 2000);

 //document.getElementById("picCaption").innerHTML=myCaptions[myPix[thisPic]];
return false;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(function() {document})
}