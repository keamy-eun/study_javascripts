let querySingle = document.querySelector("#single");
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});
// querySingle.addEventListener("double-click", singleEvent);

function singleEvent(event) {
  //addEventListener가 자동으로 event파라메터를 던져준다
  querySingle.innerHTML = "Changed";
}

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
