// JavaScript Document
function getHTML(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status ==200){
			document.getElementById("getName").innerHTML = xhr.responseText;
		}
	};
	xhr.open("GET", "Homepage2.html", true);
	xhr.send();


}