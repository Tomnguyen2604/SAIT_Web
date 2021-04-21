
window.onload = initfunction;

function initfunction() {

    window.onload = function datetime() {
        var today = new Date();
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        document.getElementById("current").innerHTML = "Today is:" + "  " + month[today.getMonth()] + "/" + today.getDate() + "/" + today.getFullYear();
    }
}
function print() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementsByName("quantity").values;
    var pizza1 = document.getElementById("pizza1").value;
    var pizza2 = document.getElementById("pizza2").value;
    var pizza3 = document.getElementById("pizza3").value;
    var total1 = (pizza1 * 12) * quantity + (pizza2 * 12.50) * quantity + (pizza3 * 13) * quantity
    var sandwich1 = document.getElementById("sandwich1").value;
    var sandwich2 = document.getElementById("sandwich2").value;
    var sandwich3 = document.getElementById("sandwich3").value;
    var total2 = (sandwich1 * 8.50) * quantity + (sandwich2 * 9.50) * quantity + (sandwich3 * 10) * quantity
    var coffe = document.getElementById("coffe").value;
    var latte = document.getElementById("latte").value;
    var softdrink = document.getElementById("softdrink").value;
    var total3 = coffe * quantity + latte * quantity + softdrink * quantity
    var total = total1 + total2 + total3
    document.write("Name: " + name);
    document.write("Phone: " + phone);
    document.write(total1);
    document.write(total2);
    document.write(total3);
    document.write("Your order total cost is: " + total);

}