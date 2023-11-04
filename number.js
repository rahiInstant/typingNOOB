let textArea = document.getElementById("field");
let Num = document.getElementsByClassName("num");

textArea.addEventListener("keydown", (e) => {
  [...Num].forEach((item) => {
    if (item.id) {
      let IDarr = item.id.split("•");
      for (let v of IDarr) {
        if (v == e.key) {
          item.style.backgroundColor = "rgb(175, 30, 30)";
        }
        setTimeout(() => {
          item.style.backgroundColor = "rgb(134, 134, 134)";
        }, 100);
      }
    }
  });
});
