var xhr = new XMLHttpRequest();
var xmldoc;
window.onload = loadXML;
function loadXML(){
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200) {
            processXML(xhr);
        }
    };
    xhr.open("GET", "js/FinalQuiz.xml", true);
    xhr.send();

}
var array = [];
var i;
function processXML(xhr){
    xmldoc = xhr.responseXML;
    var x = xmldoc.getElementsByTagName("question");
    
    var output = "";
    for (i = 0; i < x.length; i++) {
    var number = x[i].getElementsByTagName('qnumber')[0].childNodes[0].nodeValue;
    var question = x[i].getElementsByTagName('qtitle')[0].childNodes[0].nodeValue;
    var a = x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue;
    var b = x[i].getElementsByTagName("b")[0].childNodes[0].nodeValue;
    var c = x[i].getElementsByTagName("c")[0].childNodes[0].nodeValue;
    var d = x[i].getElementsByTagName("d")[0].childNodes[0].nodeValue;
    
    output +=  "<p>" + "Question " + number + ": " + "</p>" + question + "<br>" + 
    "<input type='radio' name='" + number + "' value='a'>" + a + "<br><input type='radio' name='" + number + "' value='b'>" + b + "<br><input type='radio'name='"+ number +"' value='c'>" + c + "<br><input type='radio' name='"+ number +"' value='d'>" + d + "\n";
    };
    document.getElementById("question").innerHTML = output;
}


function grade(){
    console.log("hm");
    var grade = 0;
    var xmldoc = xhr.responseXML;
    var correctAnswer = xmldoc.getElementsByTagName("rightanswers")[0].childNodes[0].nodeValue;
    var array = correctAnswer.split(",");
		// rightAnswer = ["b", "a", "c"];
        // userAnswer = [document.fegt W];
      var userAnswer = [document.querySelector('input[name="1"]:checked').value, 
                    document.querySelector('input[name="2"]:checked').value, 
                    document.querySelector('input[name="3"]:checked').value, 
                    document.querySelector('input[name="4"]:checked').value, 
                    document.querySelector('input[name="5"]:checked').value];
                    console.log(userAnswer);
                for (i = 0; i < array.length; i++) {
                    if(array[i] === userAnswer[i]){
                        grade++;
                    }
                }
document.getElementById("result").innerHTML = "<h2> Your grade: " + grade + "/" + array.length + "</h2>"
}