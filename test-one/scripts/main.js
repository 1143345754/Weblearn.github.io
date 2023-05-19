/*
let myHeading = document.querySelector('h1');
myHeading.textContent = '派蒙'; //这是一条注释

这里的所有内容
都是注释。

//这是一个点击事件
document.querySelector("img").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yuan-logo.jpg') {
      myImage.setAttribute('src', 'images/yuan-04.jpeg');
    } else {
      myImage.setAttribute('src', 'images/yuan-logo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(myName === null){
    setUserName();
  } else{
    localStorage.setItem('name', myName);
    myHeading.textContent = '原神 泰裤辣，' + myName; 
  }

}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '原神 泰裤辣，' + storedName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '原神 泰裤辣，' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
