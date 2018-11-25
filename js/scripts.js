"use-strict";

const theForm = document.getElementById("the-form");
const theDate = document.getElementById("date");
const getDate = document.querySelector('input[type="date"]');

const theColour = document.getElementById("colour");
const theValue = document.getElementById("the-value");


getDate.addEventListener("change", showDate);
theForm.addEventListener("input", setColor);

let originalValue = theDate.innerText;

let today = new Date();
parseDate(today);
setColor();

function showDate()
{
  let d = new Date(getDate.value);
  parseDate(d);
}

function parseDate(date)
{
  theDate.innerText = `${originalValue} ${date.toDateString()}`;
}

function setColor()
{
  theValue.style.color = theColour.value;
}


