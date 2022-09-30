// 기존 함수 선언 방식
// function funPrint() {
//   console.log(n);
//   console.log("외부 자바스크립트");
//   console.log("버튼" + 1);
// }

// ES6+ : 화살표 함수
const funPrint = (n) => {
  // console.log(n);
  // console.log("외부 자바스크립트");
  console.log(`버튼${n}`)
}

  //변수 선언
// console.log(x);
/* const x = 100;
x = 100 * 2
console.log(x); */

/* jQuery
$document.ready() {
  (도큐먼트 생략 가능)
} */

/* document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom Test")
  console.log(document.getElementById("bt"))
}) */

// DOM이 생성되고 난 후에 요소를 CRUD 해야한다.
/* document.addEventListener("DOMContentLoaded", 콜백함수); */
/* document.addEventListener("DOMContentLoaded", function () {}); */
document.addEventListener("DOMContentLoaded", () => {

    /* console.log(document.getElementById("bt").innerHTML); */
  /* 요소 생성
    let bt = document.createElement("button")
    document.getElementById("bt").append(bt); */

  // 요소찾기
  // 결과 HTMLCollection
  // const bts1 = document.getElementsByClassName("bt1")
  // console.log(bts1)

  // 결과 HTMLCollection
  // const bts2 = document.getElementsByTagName("button")
  // console.log(bts2)

  // 결과 Node
  // const bts3 = document.querySelector(".bt1");
  // console.log(bts3)

  // 결과 NodeList
  const bts4 = document.querySelectorAll(".bt1");
  // console.log(bts4)

    // console.log(bts4[0].innerHTML);
/*   console.log(bts4[0].innerText);
  console.log(bts4[1].textContent); */

  // 결과 NodeList를 반복으로 가져오기
  // for(let i = 0; i < bts4.length; i++) {
  //   console.log(typeof(bts4[i]));
  //   // bts4[i].innerHTML = `mybutton${i+1}`
  //   // console.log(bts4[i].innerHTML);
  // }

  // 반복분 for in in : 키 값만 가지고 옴
  // for(let i in bts4) {
  //   console.log(i)
  // }

  // 반복문 foreach : 메소드 형식. 중간에 종료 불가
  bts4.forEach((item)=>{
    console.log(item.innerHTML);
  });

  bts4.forEach((item, idx)=>{
    console.log(`${idx} : ${item.innerHTML}`);
  });

  // for of :
  for(let [idx, item] of bts4.entries()) {
    console.log(item.innerHTML);
    break;
    console.log(`${idx} : ${item.innerHTML}`);
  }

}); 
