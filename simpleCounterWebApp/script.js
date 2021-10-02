let counterNumber = document.getElementById("counter-number");
let recordsList = document.getElementById("records-list");
let counter = 0;

function addOne() {
  counter += 1;
  counterNumber.textContent = counter;
  console.log(counter);
}

function minusOne() {
  counter -= 1;
  counterNumber.textContent = counter;
  console.log(counter);
}

function reset(){
  counter = 0;
  counterNumber.textContent = counter;
  console.log(counter);
}

function record(){
    if(recordsList.textContent == "Empty") {
    recordsList.textContent = "";
    let countStr = counter + " — ";
    recordsList.textContent += countStr;
    counterNumber.textContent = 0;
    counter = 0;
    console.log(recordsList);
  } else {
    let countStr = counter + " — ";
    recordsList.textContent += countStr;
    counterNumber.textContent = 0;
    counter = 0;
    console.log(recordsList);
  };

}

function clearRecord(){
  recordsList.textContent ="Empty";
  console.log(recordsList);
}