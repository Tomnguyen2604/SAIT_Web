// JavaScript Document
//square
function square(){
	var name, address, pcode, phone, email;
	name = document.getElementById("name").value;
	address = document.getElementById("address").value;
	pcode = document.getElementById("pcode").value;
	phone = document.getElementById("phone").value;
	email = document.getElementById("email").value;
	var info = name + "\n" + address + "\n" + pcode + "\n" + phone + "\n" + email;
	var square_area;
	var total;
	var length;
	var height;
	var width;
	var info2;
	length = document.getElementById("square_length").value;
	height = document.getElementById("square_height").value;
	width = document.getElementById("square_width").value;
	square_area = length * width * height;
	total = square_area * 0.001;
	info2 = info + "\n" + "Square/Rectangular Cubes" + "\n" + square_area + "cm<sup>3</sup>" + "\n" + "Your total is: " +"$" + total;
	alert(info2); 
}

//cylinders
function cylinder(){
	var name, address, pcode, phone, email;
	name = document.getElementById("name").value;
	address = document.getElementById("address").value;
	pcode = document.getElementById("pcode").value;
	phone = document.getElementById("phone").value;
	email = document.getElementById("email").value;
	var info = name + "\n" + address + "\n" + pcode + "\n" + phone + "\n" + email;
	var radius;
	var height;
	var cylinder_area;
	var total;
	var info2;
	height = document.getElementById("cylinder_height").value;
	radius = document.getElementById("cylinder_radius").value;
	cylinder_area = Math.PI * radius * radius * height;
	total = cylinder_area * 0.0012;
	info2 = info + "\n" + "Flat bottomed cylinder" + "\n" + cylinder_area + "cm<sup>3</sup>" + "\n" + "Your total is: " +"$" + total.toFixed(2);
	alert(info2); 
}

//spherical

function spherical(){
	var name, address, pcode, phone, email;
	name = document.getElementById("name").value;
	address = document.getElementById("address").value;
	pcode = document.getElementById("pcode").value;
	phone = document.getElementById("phone").value;
	email = document.getElementById("email").value;
	var info = name + "\n" + address + "\n" + pcode + "\n" + phone + "\n" + email;
	var radius;
	var spherical_area;
	var total;
	var info2;
	radius = document.getElementById("spherical_radius").value;
	spherical_area = 1/2 * (4/3 * Math.PI * radius * radius * radius);
	total = spherical_area * 0.0015;
	info2 = info + "\n" + "½ Spherical" + "\n" + spherical_area + "cm<sup>3</sup>" + "\n" + "Your total is: " +"$" + total.toFixed(2);
	alert(info2); 
}
// truncated cone
function cone(){
	var name, address, pcode, phone, email;
	name = document.getElementById("name").value;
	address = document.getElementById("address").value;
	pcode = document.getElementById("pcode").value;
	phone = document.getElementById("phone").value;
	email = document.getElementById("email").value;
	var info = name + "\n" + address + "\n" + pcode + "\n" + phone + "\n" + email;
	var radius1;
	var radius2;
	var height;
	var cone_area;
	var total;
	var info2;
	radius1 = document.getElementById("cone_radius1").value;
	radius2 = document.getElementById("cone_radius2").value;
	height = document.getElementById("cone_height").value;
	cone_area = 1/3 * Math.PI *(radius1 * radius1 * radius1 * radius2 + radius2 * radius2) * height;
	total = cone_area * 0.002;
	info2 = info + "\n" + "Truncated cone" + "\n" + cone_area + "cm<sup>3</sup>" + "\n" + "Your total is: " + "$" + total.toFixed(2);
	alert(info2); 
}