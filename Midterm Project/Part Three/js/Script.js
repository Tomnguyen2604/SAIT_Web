var array = [];
var i = 0;

function addClient() {
    var client = { firstname, lastname, postalcode, phone, email };
    client.lastname = document.getElementById("lastname").value;
    client.firstname = document.getElementById("firstname").value;
    client.address = document.getElementById("address").value;
    client.postalcode = document.getElementById("postalcode").value;
	client.phone = document.getElementById("phone").value;
    client.email = document.getElementById("email").value;
    array.push(client);
    alert(client.toString());
    displayList();


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
        round_radius.style.display = "block";
    } else {
        round_radius.style.display = "none";
    }

    }


function squarecake() {
    var getLayer = document.querySelector("layers");
    var length = document.getElementById("square_length");
    var height = document.getElementById("square_height");
    var a = length * height;
    var b = a - 900;
    var c = b * 0.02;
    var d = (c/2) * getLayer;
    dimensions_square = d + 18;

    if (checkbox2.checked == true) {
        square_length.style.display = "block";
        square_height.style.display = "block";
    } else {
        square_length.style.display = "none";
        square_height.style.display = "none";
    }

    }

function displayList() {
    var client;
    var output = ""
    var output2 = ""
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
    var d = (c1/2) * getLayer;
    dimensions_square = d + 18;

    for (var i = 0; i < array.length; i++) {
        var client = { firstname, lastname, postalcode, phone, email};
        client = array[i];
        client = client.lastname + " " + client.firstname + " \n " + client.address + " \n " + client.postalcode + " \n " + client.email;
        var getExtra1 = document.querySelector("extra1");
        var getExtra2 = document.querySelector("extra2");
        var getExtra3 = document.querySelector("extra3");
        var total = dimensions_round + dimensions_square + getExtra1 + getExtra2 + getExtra3;
        if (document.querySelector("input[name=extra1].checked")) {
            client.asset.push("Cream Cheese Icing");
        }
        if (document.querySelector("input[name=extra2].checked")) {
            client.asset.push("Fruit and Almonds");
        }
        if (document.querySelector("input[name=extra3].checked")) {
            client.asset.push("Fruit jam filling between layers");
        }
        output+=client;

        output2 = client + "\n" + total;
    }
	alert(output2);
}
