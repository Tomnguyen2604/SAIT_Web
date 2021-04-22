var xhr=new XMLHttpRequest();
//reference to parsed XML file
window.onload=loadXML;
function loadXML() {

	
	
	//create event listent
	document.getElementById("name").addEventListener("keyup", function (){ findname(this.value);},false);
	document.getElementById("sector").addEventListener("keyup", function (){ findSector(this.value);},false);
	document.getElementById("month").addEventListener("keyup", function (){ findMonth(this.value);},false);
	document.getElementById("year").addEventListener("keyup", function (){ findYear(this.value);},false);
	
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
	
      json = JSON.parse(xhr.responseText);
		console.log(json);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);
  xhr.send();
	
}

function findname(input) {
	json = JSON.parse(xhr.responseText);
	var output = "<tr><th> Sector </th><th> Community Name </th><th> Description </th><th> Year </th><th> Count </th><th>Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.community_name.toUpperCase().search(input.toUpperCase()) != -1){
			output+="<tr><td>"
			output+=obj.incident_info
			output+="</td><td>"
			output+=obj.description
			output+="</td><td>"
			output+=obj.start_dt
			output+="</td><td>"
			output+=obj.
			output+="</td><td>"
			output+=obj.count
			output+="</td><td>"
			output+='<a href="https://www.google.com/maps/place/"' + obj.geocoded_column.latitude + ',' + obj.geocoded_column.longitude
			output+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output;
}

