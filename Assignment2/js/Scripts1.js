// JavaScript Document
function square(){
	var square_area;
	var total;
	var length;
	var height;
	var width
	length = document.getElementById("square_length").value;
	height = document.getElementById("square_height").value;
	width = document.getElementById("square_width").value;
	square_area = length * width * height;
	total = square_area * 0.001;	
	return total;
}
