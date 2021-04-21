// JavaScript source code
window.addEventListener("load", registerListeners, false);
var request;

function registerListeners() {
	
	var img;
	img=document.getElementById("picture1");
	img.addEventListener("mouseover", function () { getContent("picture1.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
	img=document.getElementById("picture2");
	img.addEventListener("mouseover", function () { getContent("picture2.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
	img=document.getElementById("picture3");
	img.addEventListener("mouseover", function () { getContent("picture3.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
}

function getContent(infopage) {

		request= new XMLHttpRequest();
		request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      document.getElementById("picturerevel").innerHTML = request.responseText;
    }
  };
  request.open("GET", infopage, true);
  request.send();
}


function clearContent() {
	
	document.getElementById("picturerevel").innerHTML="";

}