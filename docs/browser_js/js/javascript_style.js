// Remove
let querySingleRemove = document.querySelector("#single_remove_btn");
querySingleRemove.addEventListener("click", (event) => {
  singleRemoveEvent(event);
});

function singleRemoveEvent(event) {
  document.querySelector("#single_remove").style.display = "none";
}

// Hidden
let querySingleHidden = document.querySelector("#single_hidden_btn");
querySingleHidden.addEventListener("click", (event) => {
  singleHiddenEvent(event);
});

function singleHiddenEvent(event) {
  document.querySelector("#single_hidden").style.visibility = "hidden";
}

// Reset
let querySingleReset = document.querySelector("#single_reset_btn");
querySingleReset.addEventListener("click", (event) => {
  singleResetEvent(event);
});

function singleResetEvent(event) {
  document.querySelector("#single_hidden").style.visibility = "visible";
  document.querySelector("#single_remove").style.display = "block";
}
