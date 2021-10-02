let given1 = document.getElementById("given1").value;
let given2 = document.getElementById("given2").value;
let answer = document.getElementById("answer");
let last = document.getElementById("last");

function add() {
  let given1 = document.getElementById("given1").value;
  let given2 = document.getElementById("given2").value;
  if(given1 == "" || given2 ==""){
    answer.textContent = "Missing Given/s";
  } else {
  let ans = Number(given1) + Number(given2);
  answer.textContent = "The sum is: " + ans;
  last.innerHTML = "Last Calculation:</br>" + given1 + " + " + given2 + " = " + ans;
  }
}

function subtract() {
  let given1 = document.getElementById("given1").value;
  let given2 = document.getElementById("given2").value;
    if(given1 == "" || given2 ==""){
    answer.textContent = "Missing Given/s";
  } else {
  let ans = Number(given1) - Number(given2);
  answer.textContent = "The difference is: " + ans;
  last.innerHTML = "Last Calculation:</br>" + given1 + " - " + given2 + " = " + ans;
  }
}

function multiply() {
  let given1 = document.getElementById("given1").value;
  let given2 = document.getElementById("given2").value;
    if(given1 == "" || given2 ==""){
    answer.textContent = "Missing Given/s";
  } else {
  let ans = Number(given1) * Number(given2);
  answer.textContent = "The product is: " + ans;
  last.innerHTML = "Last Calculation:</br>" + given1 + " X " + given2 + " = " + ans;
  }
  }

function divide() {
  let given1 = document.getElementById("given1").value;
  let given2 = document.getElementById("given2").value;
  if(given1 == "" || given2 ==""){
    answer.textContent = "Missing Given/s";
  } else {
  let ans = Number(given1) / Number(given2);
  answer.textContent = "The quotient is: " + ans;
  last.innerHTML = "Last Calculation:</br>" + given1 + " ÷ " + given2 + " = " + ans;
  }
}

function remainder() {
  let given1 = document.getElementById("given1").value;
  let given2 = document.getElementById("given2").value;
  if(given1 == "" || given2 ==""){
    answer.textContent = "Missing Given/s";
  } else {
  let ans = Number(given1) % Number(given2);
  answer.textContent = "The remainder is: " + ans;
  last.innerHTML = "Last Calculation:</br>" + given1 + " % " + given2 + " = " + ans;
  }
}

function clearOut() {
  document.getElementById("given1").value = "";
  document.getElementById("given2").value = "";
  answer.textContent = "Answer Appears Here";
}