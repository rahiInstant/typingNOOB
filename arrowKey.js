let textField = document.getElementById("field");
let arrowKey = document.getElementsByClassName("arrow");

textField.addEventListener("keydown", (e) => {
  [...arrowKey].forEach((item) => {
    for (let v of item.children) {
      let ID = v.id;
      if (e.key == v.id) {
        v.style.backgroundColor = "rgb(175, 30, 30)";
      }
      setTimeout(() => {
        if (ID == "ArrowRight" || ID == "ArrowUp") {
          v.style.backgroundColor = "rgb(169, 169, 169)";
        } else {
          v.style.backgroundColor = "rgb(211, 211, 211)";
        }
      }, 100);
    }
  });
});
