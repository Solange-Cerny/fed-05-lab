"use-strict";
const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
const getDate = document.querySelector('input[type="date"]');

getDate.addEventListener("change", showDate);

function showDate(){
  let d = new Date(getDate.value);
  let originalValue = theDate.innerText;
  theDate.innerText = "${originalValue} ${d.toDateString()}";
}

