// JavaScript Document
//square
function getHTML1() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("contents").innerHTML = xhr.responseText;
		}
	};
	xhr.open("GET", "square_rectangular cubes.html", true);
	xhr.send();
}
//cylinders
function getHTML2() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("contents").innerHTML = xhr.responseText;
		}
	};
	xhr.open("GET", "flat_cylinders.html", true);
	xhr.send();
}
//Sphericals

function getHTML3() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("contents").innerHTML = xhr.responseText;
		}
	};
	xhr.open("GET", "spherical.html", true);
	xhr.send();
}
//Cone

function getHTML4() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("contents").innerHTML = xhr.responseText;
		}
	};
	xhr.open("GET", "truncated_cone.html", true);
	xhr.send();
}