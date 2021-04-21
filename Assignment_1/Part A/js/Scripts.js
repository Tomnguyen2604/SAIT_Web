function convertLitres(val) {
    var gallons = parseFloat(0);

    gallons = val /4.45;
    document.getElementById("gallons").value = gallons.toFixed(2);
}

function convertGallons(val) {
    var litres = parseFloat(0);

    litres = val * 4.45;
    document.getElementById("litres").value = litres.toFixed(2);
}




function convertMetres(val) {
    var feet = parseFloat(0);

    feet = val * 3.28;
    document.getElementById("feet").value = feet.toFixed(2);
}

function convertFeet(val) {
    var metres = parseFloat(0);

    metres = val /3.28;
    document.getElementById("Metres").value = metres.toFixed(2);
}




function convertKilo(val) {
    var pounds = parseFloat(0);

    pounds = val / 2.20;
    document.getElementById("pounds").value = pounds.toFixed(2);
}
function convertPounds(val) {
    var kilo = parseFloat(0);

    kilo = val * 2.20;
    document.getElementById("kilo").value = kilo.toFixed(2);
}




function convertGram(val) {
    var oz = parseFloat(0);

    oz = val / 0.035;
    document.getElementById("oz").value = oz.toFixed(2);
}
function convertOz(val) {
    var gram = parseFloat(0);

    gram = val * 2.20;
    document.getElementById("gram").value = gram.toFixed(2);
}