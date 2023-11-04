let inputField = document.getElementById("field");
let characterKey = document.getElementsByClassName("chr");

inputField.addEventListener("keydown", (e) => {
  [...characterKey].forEach((item) => {
    let IDarr = item.id.split("•");
    for (let i = 0; i < IDarr.length; i++) {
      if (IDarr[i] == e.key) {
        item.style.backgroundColor = "rgb(175, 30, 30)";
      }
      setTimeout(() => {
        item.style.backgroundColor = "rgb(14, 16, 34)";
      }, 100);
    }
  });
});
