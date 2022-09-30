// 랜덤수
let randNum;
// 사용자가 선택한 수
let userNum;

// 화면 보기 함수
const dispDom = (diceP, inNumP, bt1p, bt2p) => {
  // DOM 제어
  document.getElementById("dice").style.display = diceP;
  document.getElementById("inNum").style.display = inNumP;
  document.getElementById("bt1").style.display = bt1p;
  document.getElementById("bt2").style.display = bt2p;
}

// 주사위
// function showDice() {}
const showDice = () => {

  // 랜덤 수 생성
  randNum = Math.floor(Math.random() * 6) + 1;
  console.log(`주사위 랜덤 수 => ${randNum}`);

  // DOM 제어
  dispDom("none", "block", "none", "block");
}

// 확인
const showOk = () => {
  userNum = form1.num.value;

  // DOM 제어
  dispDom("block", "none", "block", "none");

  // 주사위 그림
  let tag = `<img src="./img/${randNum}.png">`;
  
  // ox그림
  let ox;
  if (randNum == userNum) {
    ox = "o";
  } else {
    ox = "x";
  }

  tag = `${tag}<img src="./img/${ox}.png">`;

  // 이미지 표시
  document.getElementById("dice").innerHTML=tag;
  console.log(`사용자 선택 수 확인 => ${userNum}`);
}

document.addEventListener("DOMContentLoaded", () => {
  // 주사위 버튼만 보여야 함
  dispDom("none", "none", "block", "none");
});
