let queryPrint_h3 = document.querySelectorAll("h3");
queryPrint_h3.forEach((itmes, index) => console.log(itmes));

let queryPrint_p = document.querySelector("p");
console.log(queryPrint_p);

let queryPrint_button = document.querySelector("button");
console.log(queryPrint_button);

let queryPrint_list = document.querySelectorAll(".list");
queryPrint_list.forEach((itmes, index) => console.log(itmes));

let queryPrint_a = document.querySelector("#google");
console.log(queryPrint_a);

let queryTitle = document.querySelector("#title");
queryTitle.innerHTML = "DOM";

let queryItems = document.querySelectorAll(".item");
// queryItems.forEach((itmes, index) => console.log(itmes));

let queryLists = document.querySelectorAll(".list");
let queryList = document.querySelector(".list"); //첫번째 element만 가져옴

let pByTagName = document.getElementsByTagName("p");
// console.log(`${pByTagName}`);

let listByClassName = document.getElementsByClassName("list");
// console.log(`${listByClassName}`);

let titleById = document.getElementById("title");
// titleById.innerHTML = "Title By Id";
let elementById = window.document.getElementById("selector");
// console.log(`elementById : ${elementById}`);
// elementById.innerHTML = "<b>Change selector</b>";

// change properties from querySelector
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255,0,0,0.5)";

let queryContent = document.querySelector("#contentId");
queryContent.value = "apple";
