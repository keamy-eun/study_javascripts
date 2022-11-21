// div.inner 태그 내부에 <div>hello</div>를 추가
// 1. 프로그래밍 방식 적용
let queryInner = document.querySelector("#container > .inner"); // 위치 지정
let element = document.createElement("div"); // div 틀 생성
let helloText = document.createTextNode("hello"); // 내용 생성
element.appendChild(helloText); // helloText를 element에 넣는다
queryInner.appendChild(element); // element를 queryInner에 넣는다

// 2. innerHtml 방식
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");
let item = `<div class="item">${animal["name"]} ${animal["age"]}</div>`;
queryApp.innerHTML = item;

// innerHtml 방식 예제
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];

let queryApp1 = document.querySelector("#list");
productsData.forEach((item, index) => {
  queryApp1.innerHTML += `<div>${productsData[index]["title"]} ${productsData[index]["weight"]}</div>`;
});
