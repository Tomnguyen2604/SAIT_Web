// JavaScript Document
var xhr = new XMLHttpRequest;
var xmldoc;
window.onload = loadXML;
function loadXML(){
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 && xhr.status == 200){
            processXML(xhr);
        }
        };
        xhr.open('GET',"js/FinalQuiz.xml", true);
        xhr.send();
    
}
