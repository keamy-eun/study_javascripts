let questions = [
  {
    Q_num: "Q1",
    Q_con: "해당 매장을 방문시 매장은 청결 하였습니까?",
    Orders: 1,
  },
  {
    Q_num: "Q2",
    Q_con: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    Orders: 2,
  },
  { Q_num: "Q3", Q_con: "주문시 직원은 고객님께 친절 하였습니까?", Orders: 3 },
  {
    Q_num: "Q4",
    Q_con: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    Orders: 4,
  },
  {
    Q_num: "Q5",
    Q_con: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    Orders: 5,
  },
];
let answer_lists = [
  { A_num: "E1", A_con: "(1)전혀 아니다. ", Orders: 1 },
  { A_num: "E2", A_con: "(2)아니다. ", Orders: 2 },
  { A_num: "E3", A_con: "(3)보통이다 ", Orders: 3 },
  { A_num: "E4", A_con: "(4)그렇다.", Orders: 4 },
  { A_num: "E5", A_con: "(5)매우그렇다.", Orders: 5 },
];

const answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];
// 하나의 완전한 string으로 담은 후 Array로 담아 5가지 항목 완성
// innerHTML사용, 이벤트 사용
let idx;
let compare;
let cnt = 0;
k = "Q1";
let array1 = [];
for (idx = 0; idx < answers.length; idx++) {
  if (k != answers[idx]["questions_uid"]) {
    cnt++;
    k = answers[idx]["questions_uid"];
  }
  if (compare !== answers[idx]["questions_uid"]) {
    array1[cnt] = `${questions[cnt]["Q_con"]}\n`;
    array1[cnt] += array1[
      cnt
    ] += `<div><input type="radio" name="${cnt}" value="${cnt}">${
      answer_lists[answers[idx]["example_uid"].charAt(1) * 1 - 1]["A_con"]
    }</div> \n`;
  } else {
    array1[cnt] += `<div><input type="radio" name="${cnt}" value="${
      answers[idx]["example_uid"].charAt(1) * 1 - 1
    }">${
      answer_lists[answers[idx]["example_uid"].charAt(1) * 1 - 1]["A_con"]
    }</div> \n`;
  }
  compare = answers[idx]["questions_uid"];
}
let a;
let queryButton = document.querySelector("#buttonNext");
queryButton.addEventListener("click", Next);
let cnt1 = 0;
function Next(event) {
  let queryNext = document.querySelector("#Next");
  if (cnt1 == 5) queryNext.innerHTML = "DONE";
  if (cnt1 < 5) {
    queryNext.innerHTML = array1[cnt1];
    let obj_length = document.getElementsByName(cnt1).length;
    for (let i = 0; i < obj_length; i++) {
      if (document.getElementsByName(cnt1)[i].checked == true) {
        alert(document.getElementsByName(cnt1).value);
      }
    }
    cnt1++;
  }
}
