// Remove
let querySingleRemove = document.querySelector("#single_remove");
querySingleRemove.addEventListener("click", (event) => {
  singleRemoveEvent(event);
});

function singleRemoveEvent(event) {
  querySingleRemove.style.display = "none";
}

// Hidden
let querySingleHidden = document.querySelector("#single_hidden");
querySingleHidden.addEventListener("click", (event) => {
  singleHiddenEvent(event);
});

function singleHiddenEvent(event) {
  querySingleHidden.style.visibility = "hidden";
}

// Reset
let querySingleReset = document.querySelector("#single_reset");
querySingleReset.addEventListener("click", (event) => {
  singleResetEvent(event);
});

function singleResetEvent(event) {
  querySingleHidden.style.visibility = "visible";
  querySingleRemove.style.display = "block";
}
