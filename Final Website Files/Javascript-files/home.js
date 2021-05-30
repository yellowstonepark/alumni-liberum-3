//JS file

"use strict";

let response = confirm("Elect Otzar as President!");

if (response === false) {
  alert("You really should elect Otzar as President. He has great ideas!");
}

function goToHome () {
  window.location.assign("https://alumni-liberum.com")
}
