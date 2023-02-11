//вешаем событие на сам блок

document.querySelector("#test").onmousemove = function (event) {
  event = event || window.event; //это нужно для кроссбраузерности
  //console.log(event); //нам нужены координаты offsetX/offsetY
  document.querySelector("#offx").innerHTML = event.offsetX;
  document.querySelector("#offy").innerHTML = event.offsetY;
};
