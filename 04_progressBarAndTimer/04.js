function userProgress(time) {
  let start = 0;
  let time2 = Math.round((time * 1000) / 100); //перевод в секунды
  let progressElement = document.getElementById("user-progress");
  let intervalId = setInterval(function () {
    if (start >= 100) {
      clearInterval(intervalId); //https://learn.javascript.ru/settimeout-setinterval
      userProgressCallBack();
    } else {
    }
    progressElement.value = start;
    start++;
  }, time2);
}

function userProgressCallBack() {
  //пользователь сам тут пишет тектс, что выйдет на страницу
  document.querySelector(".hiddenBlock").style.display = "block";
}

userProgress(5); //время в секундах для удобства пользователя
