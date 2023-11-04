let inputBox = document.getElementById("field");
let commandKey = document.getElementsByClassName("cmd");

inputBox.addEventListener("keydown", (e) => {
  [...commandKey].forEach((item) => {
    if (e.code == item.id) {
      item.style.backgroundColor = "rgb(175, 30, 30)";
    }
    setTimeout(() => {
      item.style.backgroundColor = "rgb(65, 65, 65)";
    }, 100);
  });
});
