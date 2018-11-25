"use-strict";

const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
const getDate = document.querySelector('input[type="date"]');

getDate.addEventListener("change", showDate);

let originalValue = theDate.innerText;

let today = new Date();
parseDate(today);

function showDate(){
  let d = new Date(getDate.value);
  parseDate(d);
}

function parseDate(date){
  theDate.innerText = `${originalValue} ${date.toDateString()}`;
}

