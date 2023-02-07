//1. добавить событие click на элемент

document.onclick = function (event) {
  //   console.log(event.target.tagName);

  if (event.target.tagName == "IMG") {
    event.target.classList.add("bordered");
  }
};
