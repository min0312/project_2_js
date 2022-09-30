// function show() {
//   console.log("hi")
// }

// const show = () => {
//   console.log(1);
//   console.log(2);
// }

// 1. 박스 3개 반복문으로 만들기
// const show = () => {
//   // 1. 태그 만들기
//   let tag = "";
//   for (let i = 1; i <= 3; i++) {
//     tag = tag + `<div class="divMsg" id="divId${i}">${i}</div>`;
//   }
//   console.log(tag)

//   // 2. dom에서 태그 넣을 요소 선택
//   const msgDiv = document.querySelector('#msg')
//   // 3. 선택된 요소의 HTML 변경
//   msgDiv.innerHTML = tag 
// }


// 2. 주사위 이미지 6개 출력하기
// const show = () => {
//   let img = "";
//   for (let i = 1; i<=6; i++) {
//     img = img + `<div class="divMsg"><img src="../img/${i}.png" id="msgImgId${i}"></div>`
//   }
//   console.log(img)
//   const msgDiv = document.querySelector('#msg')
//   msgDiv.innerHTML = img 
// }

// 3. 주사위 랜덤하게 나오기
/* const show = () => {
  let ran = "";
  const i = Math.floor(Math.random() * 6+1)
  ran = `<div class="dice"><img src="../img/${i}.png" id="randomdice">${i}</div>`
  console.log(ran)
  const msgDiv = document.querySelector('#dice')
  msgDiv.innerHTML = ran 

  // msgDiv 스타일 변경
  // msgDiv.style.backgroundColor = "#FFFFFF"
} */

//4. 동적으로 생성된 HTML
  // let msgImg = documetn.querySelector('#msgImg')
  // msgImg.style.maxWidth = '100px';
  // msgImg.style.maxheight = '100px';

// 랜덤생성 주사위 번호 맞추기


let arrRadio = document.getElementsByName("num");
for (i=1; i<arrRadio.length; i++) {
  if (arrRadio[i].checked) {
    const showDice = () => {
      let img2 = "";
      img2 = `<div class="ox"><img src="../img/o.png" id="diceox">o</div>`
      const msgDiv = document.querySelector('#dice')
      msgDiv.innerHTML = img2
    }
}
}

let img2 = "";
  img2 = `<div class="ox"><img src="../img/o.png" id="diceox">o</div>`
  const msgDiv = document.querySelector('#msg')
  msgDiv.innerHTML = img2

  
/* const showok = () => {
  const i = Math.floor(Math.random() * 6+1)
  ran = `<div class="dice"><img src="../img/${i}.png" id="randomdice">${i}</div>`
  const msgDiv = document.querySelector('#dice')
  msgDiv.innerHTML = ran
}
if ( rt == i) {
  let img2 = "";
  img2 = `<div class="ox"><img src="../img/o.png" id="diceox">o</div>`
  const msgDiv = document.querySelector('#msg')
  msgDiv.innerHTML = img2
} else {
  let img2 = "";
  img2 = `<div class="ox"><img src="../img/x.png" id="diceox">x</div>`
  const msgDiv = document.querySelector('#msg')
  msgDiv.innerHTML = img2
} */

// 폼 숨기기
// const formSection = document.querySelector('formSection')
// formSection.style.disply = "none"
// 폼 보이기
// formSection.style.disply = "block"


/* myFunction = () => {
  const rt = form1.num.value;
    let arrRadio = document.getElementsByName("num");
    for (i=1; i<arrRadio.length; i++) {
      if (arrRadio[i].checked) {
        let ran = "";
        const i = Math.floor(Math.random() * 6+1)
        ran = `<div class="dice"><img src="../img/${i}.png" id="randomdice">${i}</div>`
        const msgDiv = document.querySelector('#dice')
        msgDiv.innerHTML = ran
        if ( rt == i) {
          let img2 = "";
          img2 = `<div class="ox"><img src="../img/o.png" id="diceox">o</div>`
          const msgDiv = document.querySelector('#msg')
          msgDiv.innerHTML = img2
        } else {
          let img2 = "";
          img2 = `<div class="ox"><img src="../img/x.png" id="diceox">x</div>`
          const msgDiv = document.querySelector('#msg')
          msgDiv.innerHTML = img2
        }
      }
  }
} */