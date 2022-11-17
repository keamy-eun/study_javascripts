/*
풀이 유추
질문 키와 답항 키를 for문으로 매치시킨다. 어떻게??
답항 Function : for문으로 질문마다 답항의 갯수를 입력하면 답항이 연결된다.
*/

let questions = [
  {
    Q_num: "Q1",
    Q_con: "해당 매장을 방문시 매장은 청결 하였습니까?",
  },
  { Q_num: "Q2", Q_con: "직원이 제조한 음료에 대해 맛은 좋았습니까?" },
  { Q_num: "Q3", Q_con: "주문시 직원은 고객님께 친절 하였습니까?" },
  { Q_num: "Q4", Q_con: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?" },
  { Q_num: "Q5", Q_con: "주문하신 음료가 나오기까지 시간이 적당하였습니까?" },
];
let answer_lists = [
  { A_num: "E1", A_con: "(1)전혀 아니다. " },
  { A_num: "E2", A_con: "(2)아니다. " },
  { A_num: "E3", A_con: "(3)보통이다 " },
  { A_num: "E4", A_con: "(4)그렇다." },
  { A_num: "E5", A_con: "(5)매우그렇다." },
];

//input
const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);
let answer = inputs;

// 정수 a를 입력하면 1~a까지의 문항의 문자열을 리턴하는 함수
function input_num(a) {
  let str = "";
  for (let i = 0; i < a; i++) {
    str += answer_lists[i]["A_con"];
  }
  return str;
}

questions.forEach((element) => {
  if (element["Q_num"] === "Q1") {
    console.log(`${questions[0]["Q_con"]}`);
    console.log(`${input_num(3)}`);
    console.log(`답) (${answer[0]})`);
  }
  if (element["Q_num"] === "Q2") {
    console.log(`${questions[1]["Q_con"]}`);
    console.log(`${input_num(4)}`);
    console.log(`답) (${answer[1]})`);
  }
  if (element["Q_num"] === "Q3") {
    console.log(`${questions[2]["Q_con"]}`);
    console.log(`${input_num(2)}`);
    console.log(`답) (${answer[2]})`);
  }
  if (element["Q_num"] === "Q4") {
    console.log(`${questions[3]["Q_con"]}`);
    console.log(`${input_num(5)}`);
    console.log(`답) (${answer[3]})`);
  }
  if (element["Q_num"] === "Q5") {
    console.log(`${questions[4]["Q_con"]}`);
    console.log(`${input_num(3)}`);
    console.log(`답) (${answer[4]})`);
  }
});
