"use strict";

var xhr = new XMLHttpRequest();
var xmldoc;
window.onload = loadXML;

function loadXML() {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      processXML(xhr);
    }
  };

  xhr.open("GET", "js/FinalQuiz.xml", true);
  xhr.send();
}

var array = [];
var i;

function processXML(xhr) {
  xmldoc = xhr.responseXML;
  var x = xmldoc.getElementsByTagName("question");
  var rightAnswer = xmldoc.getElementsByTagName("rightanswers")[0].childNodes[0].nodeValue;
  array = rightAnswer.split(",");
  console.log(array);
  var output = "";

  for (i = 0; i < x.length; i++) {
    var number = x[i].getElementsByTagName('qnumber')[0].childNodes[0].nodeValue;
    var question = x[i].getElementsByTagName('qtitle')[0].childNodes[0].nodeValue;
    var a = x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue;
    var b = x[i].getElementsByTagName("b")[0].childNodes[0].nodeValue;
    var c = x[i].getElementsByTagName("c")[0].childNodes[0].nodeValue;
    var d = x[i].getElementsByTagName("d")[0].childNodes[0].nodeValue;
    output += "<p>" + "Question " + number + ": " + "</p>" + question + "<br>" + "<input type='radio' name='qnumber' value='a'>" + a + "<br><input type='radio'name='qnumber' value='b'>" + b + "<br><input type='radio'name='qnumber' value='c'>" + c + "<br><input type='radio' name='qnumber' value='d'>" + d + "\n";
  }

  document.getElementById("question").innerHTML = output;
}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
  function showQuestions(questions, quizContainer) {// code will go here
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // rightAnswer = ["b", "a"];
    // userAnswer = [document.fegt W];
    userAnswer = document.getElementById("a"), document.getElementById("b"), document.getElementById("c"), document.getElementById("d");
  } // show the questions


  showQuestions(questions, quizContainer); // when user clicks submit, show results

  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}