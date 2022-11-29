let querySingle = document.querySelector("#single");
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});
// querySingle.addEventListener("double-click", singleEvent);

function singleEvent(event) {
  //addEventListener가 자동으로 event파라메터를 던져준다
  querySingle.innerHTML = "Changed";
}

let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.value);
  }
  console.log(event.target);
});

function keydownDesc(desc) {
  let querykeydownDesc = document.querySelector("#keydownDesc");
  querykeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad());

function queryLoad() {
  queryload.innerHTML = "done on load";
}
