"use strict";

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal"); //returns all the nodes with matching seletors.

console.log(btnOpenModal); //It will return the output in the array format

const showDetail = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeDetail = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", showDetail);
}
btnCloseModal.addEventListener("click", closeDetail);
overlay.addEventListener("click", closeDetail);
// Lets try this with keyboard press functionality
// keydown- type, keypress, keyup are the words used to represent the actioin

document.addEventListener("keydown", function (chargiven) {
  //chargiven indicates the object in which we typed in keyboared
  console.log("keyboard button pressed"); //keyboard button pressed
  //ABOVE will show the button typed confimation
  console.log(chargiven);
  //below is the object output where the key pressed n is mentioned

  /*KeyboardEvent {isTrusted: true, key: 'n', code: 'KeyN', location: 0, ctrlKey: false, …}
isTrusted
: 
true
altKey
: 
false
bubbles
: 
true
cancelBubble
: 
false
cancelable
: 
true
charCode
: 
0
code
: 
"KeyN"
composed
: 
true
ctrlKey
: 
false
currentTarget
: 
null
defaultPrevented
: 
false
detail
: 
0
eventPhase
: 
0
isComposing
: 
false
key
: 
"n"
keyCode
: 
78
location
: 
0
metaKey
: 
false
repeat
: 
false
returnValue
: 
true
shiftKey
: 
false
sourceCapabilities
: 
InputDeviceCapabilities {firesTouchEvents: false}
srcElement
: 
body
target
: 
body
timeStamp
: 
27183.899999999907
type
: 
"keydown"
view
: 
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
which
: 
78
[[Prototype]]
: 
KeyboardEvent
*/

  //IF YOU WANT TO DISPLAY KEY ALONE MEANS YOU NEED TO CONSOLELOG LIKE THIS
  console.log(chargiven.key); //it will give the output for key alone
});
