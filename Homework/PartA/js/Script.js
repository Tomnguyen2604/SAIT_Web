// JavaScript source code
window.onload = initfunction;

function initfunction() {

    window.onload = function datetime() {
        var today = new Date();
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        document.getElementById("current").innerHTML = "Today is:" + "  " + month[today.getMonth()] + "/" + today.getDate() + "/" + today.getFullYear();
    }