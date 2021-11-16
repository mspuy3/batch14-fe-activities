


function add() {
  let given1 = document.getElementById("given1").value;
  let given2 = document.getElementById("given2").value;

  if(given1 == "" || given2 ==""){
    answer.textContent = "Missing Given/s";
  } else {
  let ans = ((Number(given1)*1000000000) + (Number(given2)*1000000000))/1000000000;
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
    let ans = ((Number(given1)*1000000000) - (Number(given2)*1000000000))/1000000000;
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
    let ans = ((Number(given1)*1000000000) * (Number(given2)*1000000000))/1000000000;
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
    let ans = ((Number(given1)*1000000000) / (Number(given2)*1000000000))/1000000000;
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
    let ans = ((Number(given1)*1000000000) % (Number(given2)*1000000000))/1000000000;
  answer.textContent = "The remainder is: " + ans;
  last.innerHTML = "Last Calculation:</br>" + given1 + " % " + given2 + " = " + ans;
  }
}

function clearOut() {
  document.getElementById("given1").value = "";
  document.getElementById("given2").value = "";
  answer.textContent = "Answer Appears Here";
}




document.querySelector("#add-btn").addEventListener("click", add);
document.querySelector("#subtract-btn").addEventListener("click", subtract);
document.querySelector("#multiply-btn").addEventListener("click", multiply);
document.querySelector("#divide-btn").addEventListener("click", divide);
document.querySelector("#remainder-btn").addEventListener("click", remainder);


document.querySelector("#clear-btn").addEventListener("click", clearOut);