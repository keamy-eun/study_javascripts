let todo_lists = `<li id="newList">
                    <div>
                        <span id="icon_span">
                        <div id = "favorite">
                            <i class="material-icons favorite">favorite_border</i>
                            </div>
                            <div id = "delete">
                            <i class="material-icons delete">delete</i>
                            </div>
                        </span>
                    </div>
                </li>`;

let queryTodoList = document.querySelector(".todoList");
let queryAddButton = document.querySelector(".add_btn");

//버튼 클릭시
queryAddButton.addEventListener("click", (event) => {
  if (event.target.parentElement.children[0].value == "") {
    alert(`"Please enter a task"`);
  } else {
    queryTodoList.insertAdjacentHTML("beforeend", todo_lists);
    event.target.parentElement.parentElement.lastChild.insertAdjacentHTML(
      "afterbegin",
      event.target.parentElement.children[0].value
    );
    event.target.parentElement.children[0].value = "";
  }
});

// text 엔터 입력시  (click과 중복되는 내용 -> click함수를 재사용하여 불러올 수 있는지 확인)
let queryTextType = document.querySelector("#AddText");
queryTextType.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    if (event.target.parentElement.children[0].value == "") {
      alert(`"Please enter a task"`);
    } else {
      queryTodoList.insertAdjacentHTML("beforeend", todo_lists);
      event.target.parentElement.parentElement.lastChild.insertAdjacentHTML(
        "afterbegin",
        event.target.parentElement.children[0].value
      );
      event.target.parentElement.children[0].value = "";
    }
  }
});

// 아이콘
let queryNewList = document.querySelector("ul"); // "#newList"는 안된다..
queryNewList.addEventListener("click", (event) => {
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  } else if (event.target.innerHTML == "favorite") {
    event.target.parentElement.parentElement.parentElement;
  }
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
  } else if (event.target.innerHTML == "favorite")
    event.target.innerHTML = "favorite_border";
});
