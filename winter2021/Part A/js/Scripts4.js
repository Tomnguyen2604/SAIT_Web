var xhr=new XMLHttpRequest();
//reference to parsed XML file
window.onload=loadXML;
function loadXML() {
	//create event listent
	document.getElementById("description").addEventListener("keyup", function (){ findDesc(this.value);},false);
	document.getElementById("type").addEventListener("keyup", function (){ findquad(this.value);},false);
	
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
	
      json = JSON.parse(xhr.responseText);
		console.log(json);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/uc4c-6kbd.json", true);
  
  xhr.send();
	
}

function findDesc(input) {
	json = JSON.parse(xhr.responseText);
	var output = "<tr><th> Description </th><th> Obscured </th><th> Type </th><th> Time/Date </th><th> Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.bldg_code_desc.startsWith(input)){
			output+="<tr><td>"
			output+=obj.bldg_code_desc
			output+="</td><td>"
			output+=obj.obscured
			output+="</td><td>"
			output+=obj.multipolygon.type
			output+="</td><td>"
            output+=obj.mod_dt_utc
			output+="</td><td>"
			output+='<a href=https://www.google.com/maps/place/' + obj.x_coord + ',' + obj.y_coord
			output+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output;
}

function findDesc(input) {
	json = JSON.parse(xhr.responseText);
	var output = "<tr><th> Description </th><th> Obscured </th><th> Type </th><th> Time/Date </th><th> Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.bldg_code_desc.startsWith(input)){
			output+="<tr><td>"
			output+=obj.bldg_code_desc
			output+="</td><td>"
			output+=obj.obscured
			output+="</td><td>"
			output+=obj.multipolygon.type
			output+="</td><td>"
            output+=obj.mod_dt_utc
			output+="</td><td>"
			output+='<a href=https://www.google.com/maps/place/' + obj.x_coord + ',' + obj.y_coord
			output+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output;
}

/* [{"bldg_code":"5.0","bldg_code_desc":"Residential Garage","x_coord":"-4805.62123001","y_coord":"5634966.11836","obscured":"N","create_dt_utc":"2020-05-04T20:56:37.000Z","mod_dt_utc":"2020-05-04T20:56:37.000Z","multipolygon":{"type":"MultiPolygon","coordinates":[[[[-114.06830930000001,50.8511263],[-114.0681929,50.8511209],[-114.068185,50.8511885],[-114.0683014,50.8511939],[-114.06830930000001,50.8511263]]]]},"shape__area":"155.140625","shape__length":"49.8669758256356"} */