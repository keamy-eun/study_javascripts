// let queryInputAll = document.querySelectorAll("input");
// for (queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//     //event.target으로 현재 선택된 쿼리를 볼 수 있다 = document.querySelector('')
//   });
// }

let newItem = `<li>
                    <div>
                    <input type="checkbox" name="" id="item3" />
                    <label for="item3">item three</label>
                    <span>
                    <i class="material-icons delete">delete</i>
                    </span>
                    </div>
                </li>`;

let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undifined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    // event.target.remove(); // parent 들을 따라가서 걸어야 전체삭제됨
    event.target.parentElement.parentElement.parentElement.remove();
  }
});
// queryItemList.innerHTML += newItem;
queryItemList.insertAdjacentHTML("beforeend", newItem);
// innerHTML(기존의 것은 삭제하고 새로운 내용 추가)
// insertAdjacentHTML 는 더 유연한 함수

// 선호하는 방식은 아니다.
// let queryInputs = document.querySelectorAll("input");
// for (queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//     //event.target으로 현재 선택된 쿼리를 볼 수 있다 = document.querySelector('')
//   });
// }
