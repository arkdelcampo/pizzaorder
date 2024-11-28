// Inputs & InnerHTML

// .innerHTML command:
//      1. Gets the contents of an HTML element. E.g. <p>Click <a>here</a> </p>
//          The innerHTML of the paragraph is: Click <a>here</a>
//          The innerHTML of the anchor <a> is: here
//      2. Sets the content of an HTML element.

// function showContent() {
//   document.getElementById("output").innerHTML =
//     "Welcome to my <a href="">Pizzeria</a>. Order below.";
// }

// document.getElementById("btn").addEventListener("click", showContent);

// let top1Content = document.getElementById("top1").innerHTML;
// console.log(top1Content);

// value command: retrieves the content of an <input> element.
//  ** IMPORTANT ** the value command should ALWAYS be used within a function

document.getElementById("order-btn").addEventListener("click", getOrder);
function getOrder() {
  // Input: Retrieve the user's data
  let topping1 = document.getElementById("top1input").value;
  let topping2 = document.getElementById("top2input").value;
  let size = document.getElementById("sizeInput").value;

  // Process
  let output =
    "Your " +
    size +
    " pizza with " +
    topping1 +
    " and " +
    topping2 +
    " will be ready in 20 minutes.";

  // Output
  document.getElementById("order-output").innerHTML = output;
}
