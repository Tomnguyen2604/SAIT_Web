var array = [];


function addClient() {
	var firstname;
	var lastname;
	var postalcode;
	var address;
	var phone;
	var email;
	var info = firstname + "\n" + lastname + "\n" + address + "\n" + postalcode + "\n" + phone + "\n" + email;
	firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    address = document.getElementById("address").value;
    postalcode = document.getElementById("postalcode").value;
	phone = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    alert(info);
}


var dimensions_round = 0;
var dimensions_square = 0;

function roundcake() {
    var checkbox = document.getElementById("checkbox");
    var getLayer = document.querySelector("layers");
    var radius = document.getElementById("round_radius");
    var a = Math.pow(radius, 2);
    var b = a - 707;
    var c = b * 0.02;
    var d = (c / 2) * getLayer;
    dimensions_round = d + 15;
    if (checkbox.checked == true) {
        dimensions_round.style.display = "block";
    } else {
        dimensions_round.style.display = "none";
    }

    }


function squarecake() {
	var checkbox2 = document.querySelector("checkbox2")
    var getLayer = document.querySelector("layers");
    var s_length = document.getElementById("square_length");
    var s_height = document.getElementById("square_height");
    var a = s_height * s_height;
    var b = a - 900;
    var c = b * 0.02;
    var d = (c/2) * getLayer;
    dimensions_square = d + 18;

    if (checkbox2.checked == true) {
        s_length.style.display = "block";
        s_height.style.display = "block";
    } else {
        s_length.style.display = "none";
        s_height.style.display = "none";
    }

    }

function displayList() {
    var client;
    var output2 = "";
	var getLayer = document.querySelector("layers");
    var radius = document.getElementById("round_radius");
    var a = Math.pow(radius, 2);
    var b = a - 707;
    var c = b * 0.02;
    var d = (c / 2) * getLayer;
    dimensions_round = d + 15;
    var length = document.getElementById("square_length");
    var height = document.getElementById("square_height");
    var a1 = length * height;
    var b1 = a1 - 900;
    var c1 = b1 * 0.02;
    var d1 = (c1/2) * getLayer;
    dimensions_square = d1 + 18;

    for (var i = 0; i < array.length; i++) {
        client = array[i];
        client = client.lastname + " " + client.firstname + " \n " + client.address + " \n " + client.postalcode + " \n " + client.email;
        var getExtra1 = document.querySelector("extra1");
        var getExtra2 = document.querySelector("extra2");
        var getExtra3 = document.querySelector("extra3");
        var total = roundcake() + squarecake() + getExtra1 + getExtra2 + getExtra3;
        if (document.querySelector("input[name=extra1].checked")) {
            client.asset.push("Cream Cheese Icing");
        }
        if (document.querySelector("input[name=extra2].checked")) {
            client.asset.push("Fruit and Almonds");
        }
        if (document.querySelector("input[name=extra3].checked")) {
            client.asset.push("Fruit jam filling between layers");
        }
        output2+=client;
        output2 = client + "\n" + total;
		output2 = addClient();
    }
	alert(output2);
}
