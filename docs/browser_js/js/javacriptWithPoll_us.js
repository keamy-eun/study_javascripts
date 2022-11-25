const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  //   { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  //   { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

let polls = [];
let question_compare;
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음
for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (Object.keys(questions).length > 0) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }

    // console.log(`!= : ${questions_answers[idx]["questions_uid"]}`);
    // console.log(`!= : ${questions_answers[idx]["answer_uid"]}`);
    questions["questions_uid"] = questions_answers[idx]["questions_uid"];
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${questions_answers[idx]["answer_uid"]}`);
    answer_uids.push(questions_answers[idx]["answer_uid"]);
    if (idx + 1 >= questions_answers.length) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
    }
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력
}

function getQuestionByUid(question_uid) {
  let question_desc = "";
  for (let i = 0; i < questions_list.length; i++) {
    if (question_uid === questions_list[i]["questions_uid"]) {
      question_desc = questions_list[i]["question"];
      break;
    }
  }
  return question_desc;
}

function getAnswerByUid(answer_uid) {
  let answer_desc = "";
  for (answer of answer_list) {
    if (answer["answer_uid"] === answer_uid) {
      answer_desc = answer["answer"];
      break;
    }
  }
  return answer_desc;
}

for (poll of polls) {
  //  console.log(`${poll["questions_uid"]}`); // == polls[idx]
  // console.log(`${getQuestionByUid(poll["questions_uid"])}`);
  let answer_uids = poll["answer_uids"];
  answer_uids.forEach((answer_uid, index) => {
    // answers
    // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
  });
}

// Event handlers
let queryNext = document.querySelector("#next");
queryNext.addEventListener("click", setPollContent);
let queryPrev = document.querySelector("#prev");
queryPrev.addEventListener("click", prePollContent);

let index = 0;

function setPollContent() {
  let queryContent = document.querySelector("#poll-contents");
  // console.log(getQuestionByUid(polls[index]["questions_uid"]));
  let desc = "";
  if (index < 5) {
    desc += `<div>${index + 1}. ${getQuestionByUid(
      polls[index]["questions_uid"]
    )}</div>`;

    polls[index]["answer_uids"].forEach((answer_uid, index) => {
      // answers
      // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
      desc += `<div><input type="radio" name="yy" id="${index}"><label for="${index}">${
        index + 1
      }. ${getAnswerByUid(answer_uid)}</label></div>`;
    });
  }
  queryContent.innerHTML = desc;
  if (index == 5) alert("done");
  if (index < 6) index++;
}

function prePollContent() {
  if (index > 0) index--;
  let queryContent = document.querySelector("#poll-contents");
  // console.log(getQuestionByUid(polls[index]["questions_uid"]));
  let desc = "";
  if (index > 0) {
    desc += `<div>${index}. ${getQuestionByUid(
      polls[index - 1]["questions_uid"]
    )}</div>`;

    polls[index - 1]["answer_uids"].forEach((answer_uid, index) => {
      // answers
      // console.log(`${index + 1}. ${getAnswerByUid(answer_uid)}`);
      desc += `<div><input type="radio" name="yy" id="${index}"><label for="${index}">(${
        index + 1
      }). ${getAnswerByUid(answer_uid)}</label></div>`;
    });
  }
  queryContent.innerHTML = desc;

  if (index == 0) alert("Nothing");
}
