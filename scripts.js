// Selectors

//Event listeners

//Functions

//Function Sending PayPal
function substract() {
  let commission = 0.3;
  const send = parseInt(document.getElementById("input1").value);
  //first operation
  let resta = send * 0.054;
  let result = resta + commission;
  let total = send - result;
  document.getElementById("output1").innerHTML = total;
}

// Function Receiving PayPal
function adding() {
  let commission1 = 0.3;
  let commission2 = 0.054;
  const receive = parseInt(document.getElementById("input2").value);
  // Second operation

  let value1 = receive * commission2;
  let value2 = value1 + commission1;
  let total = receive + value2;
  document.getElementById("output2").innerHTML = total;
}

// New function Copy
const clipboard2 = new ClipboardJS(".output-button");
const clipboard = new ClipboardJS(".output-button");

clipboard.addEventListener(
  "click",
  clipboard.on("success", function () {
    alert("Successfully copied text to clipboard!");
  })
);

clipboard2.addEventListener(
  "click",
  clipboard.on("success", function () {
    alert("Successfully copied text to clipboard!");
  })
);

//No borrar esta funcion de abajo. Puede servir para el futuro
// clipboard.on("success", function () {
//   alert("Successfully copied text to clipboard!");
// });

// clipboard.on("success", function () {
//   alert("Successfully copied text to clipboard!");
// });

// //Function Copying Inputs Original
// const clipboard2 = new ClipboardJS(".output-button");
// clipboard.on("success", function () {
//   alert("Successfully copied text to clipboard!");
// });
