function changeText() {
  let queryChangeText = document.querySelector("#changeText");
  queryChangeText.innerHTML = "Change on Me";
}
let queryClickalert = document.querySelector("#clickalert");
queryClickalert.addEventListener("click", clickALert);
function clickALert() {
  alert("click on Me");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);
function targetText(event) {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
