//Imprimir en consola un mensaje

console.log("This is the output.js file.");

/* JavaScript Display Possibilities
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML or innerText.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().

*/

// getElementById() method
// The getElementById() method returns the element that has the ID attribute with the specified value.
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// document.write() method
// The document.write() method writes a string of text to a document stream opened by document.open().
document.write("This is a message written by document.write() method.");

// window.alert() method
// The window.alert() method displays an alert box with a specified message and an OK button.
window.alert("This is an alert box!");

// console.log() method
// The console.log() method outputs a message to the web console.
console.log("This is a message logged to the console.");

// console.error() method
// The console.error() method outputs an error message to the web console.
console.error("This is an error message logged to the console.");
