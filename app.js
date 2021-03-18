// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById('btn');
// const color = document.querySelector('.box__color');

// btn.addEventListener('click', function(){
//   //get random number between 0 - 3 colors
//     const randomNumber = getRandomNumber();
//     // console.log(randomNumber);

//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
// });

// function getRandomNumber(){
//     return Math.floor(Math.random() * colors.length);
// }

//먼저 컬러 array, 버튼과 변경될 텍스트의 class를 변수에 할당한다
const colors = ['green', 'red', 'purple', 'rgb(63, 191, 191)', 'rgb(38, 114, 114)', 'rgba(38, 38, 114, 0.7)'];
const bth = document.querySelector('.btn');
const colorcode = document.querySelector('.box__color');

//1.eventListener 등록 -> 버튼을 누르면 어떻게 동작할지 지정
btn.addEventListener('click', function() {
  const randomNumber = getRandomNumber();

//3. 배경색, 텍스트 바뀔것 정의
  document.body.style.background = colors[randomNumber];
  colorcode.textContent = colors[randomNumber];
});

//2.eventListener -> function 태스크 만들어주기 (랜덤넘버 찾기)
function getRandomNumber(){
  return Math.floor((Math.random() * colors.length));
};

