// JavaScript Document


/* [
    {
        "sector": "NORTH",
        "community_name": "02K",
        "category": "Theft OF Vehicle",
        "crime_count": "1",
        "resident_count": "0",
        "date": "2020-04-01T00:00:00.000",
        "year": "2020",
        "month": "APR",
        "long": "-114.18058839890571",
        "lat": "51.19042746687576",
        "id": "2020-APR-02K-Theft OF Vehicle",
        "community_center_point": {
            "type": "Point",
            "coordinates": [
                -114.180588398906,
                51.190427466876
            ]
        },
*/
// JavaScript Document
var xhr=new XMLHttpRequest();
//reference to parsed XML file
window.onload=loadXML;
function loadXML() {

	
	
	//create event listent
	document.getElementById("sector").addEventListener("keyup", function (){ findSector(this.value);},false);
  document.getElementById("community").addEventListener("keyup", function (){ findCommunity(this.value);},false);
  document.getElementById("year").addEventListener("keyup", function (){ findyear(this.value);},false);

	
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
	
      json = JSON.parse(xhr.responseText);
		console.log(json);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
  xhr.send();
	
}

function findSector(input) {
	json = JSON.parse(xhr.responseText);
  input= input.toUpperCase();
	var output = "<tr><th> Sector </th><th> Community Name </th><th> Category </th><th> Year </th><th> Count </th><th>Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.sector.startsWith(input)){
			output+="<tr><td>"
			output+=obj.sector
			output+="</td><td>"
			output+=obj.community_name
			output+="</td><td>"
			output+=obj.category
			output+="</td><td>"
			output+=obj.year
			output+="</td><td>"
			output+=obj.count
			output+="</td><td>"
			output+='<a href=https://www.google.com/maps/place/' + obj.geocoded_column.latitude + ',' + obj.geocoded_column.longitude
			output+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output;
}
function findCommunity(input) {
	json = JSON.parse(xhr.responseText);
  input= input.toUpperCase();
	var output = "<tr><th> Sector </th><th> Community Name </th><th> Description </th><th> Year </th><th> Count </th><th>Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.community_name.startsWith(input)){
			output+="<tr><td>"
			output+=obj.sector
			output+="</td><td>"
			output+=obj.community_name
			output+="</td><td>"
			output+=obj.category
			output+="</td><td>"
			output+=obj.year
			output+="</td><td>"
			output+=obj.count
			output+="</td><td>"
			output+='<a href=https://www.google.com/maps/place/' + obj.geocoded_column.latitude + ',' + obj.geocoded_column.longitude
			output+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output;
}

function findyear(input) {
	json = JSON.parse(xhr.responseText);
	var output = "<tr><th> Sector </th><th> Community Name </th><th> Description </th><th> Year </th><th> Count </th><th>Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.year.search(input.toUpperCase()) != -1){
			output+="<tr><td>"
			output+=obj.sector
			output+="</td><td>"
			output+=obj.community_name
			output+="</td><td>"
			output+=obj.category
			output+="</td><td>"
			output+=obj.year
			output+="</td><td>"
			output+=obj.count
			output+="</td><td>"
			output+='<a href=https://www.google.com/maps/place/' + obj.geocoded_column.latitude + ',' + obj.geocoded_column.longitude
			output+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output;
}
